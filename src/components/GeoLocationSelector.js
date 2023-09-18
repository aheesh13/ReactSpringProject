import React, { useState, useEffect } from 'react';
import locationService from '../services/locationService';

function LocationSelector() {
    const [location, setLocation] = useState(null);
    const [error, setError] = useState(null);
    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState('');

    useEffect(() => {
      async function fetchLocations() {
        try {
          const fetchedDataLocations = await locationService.getAllLocations();
          const fetchedLocations = fetchedDataLocations._embedded.locations.map(location => {
            const id = location._links.self.href.split('/').pop();
            return {
              ...location,
              id
            };
          });
          setLocations(fetchedLocations);
        } catch (error) {
          console.error('Error fetching locations:', error);
        }
      }
      fetchLocations();
    }, []);


    const getUserLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                setLocation(`${latitude}, ${longitude}`);
            }, err => {
                setError("Error fetching location. Please select manually.");
            });
        } else {
            setError("Geolocation is not supported by this browser. Please select manually.");
        }
    };

    return (
        <div>
            {location ? (
                <p>Your location: {location}</p>
            ) : (
                <div>
                    <button onClick={getUserLocation}>Get My Location</button>
                    {error && <div>
                        <p>{error}</p>
                        <select
                          value={selectedLocation}
                          onChange={(e) => {
                            setSelectedLocation(e.target.value);
                            setLocation(e.target.selectedOptions[0].textContent);
                          }}
                          required
                        >
                          <option value="" disabled>Select Location</option>
                          {locations.map((location) => (
                            <option key={location.id} value={`/locations/${location.id}`}>{location.city}</option>
                          ))}
                        </select>
                    </div>}
                </div>
            )}
        </div>
    );
}

export default LocationSelector;
