import React, { useState, useEffect } from 'react';
import theaterService from '../services/theaterService';
import locationService from '../services/locationService';

function TheaterForm() {
  const [name, setName] = useState('');
  const [noOfScreens, setNoOfScreens] = useState('');
  const [locations, setLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');

  useEffect(() => {
    async function fetchLocations() {
    try {
    const fetchedDataLocations = await locationService.getAllLocations();
    const fetchedLocations = fetchedDataLocations._embedded.locations.map(location => {
      const id = location._links.self.href.split('/').pop(); // Extract the ID from the href link
      return {
        ...location,
        id  // Add the extracted id to each location object
      };
    });

    console.log('Locations fetched with IDs:', fetchedLocations);
    setLocations(fetchedLocations);
  } catch (error) {
    console.error('Error fetching locations:', error);
  }
}
    fetchLocations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await theaterService.createTheater({ name, location: selectedLocation, noOfScreens });
    // Clear form or navigate to another page if needed
    setName('');
    setNoOfScreens('');
    setSelectedLocation('');
  };

  return (
  <form onSubmit={handleSubmit} className="theater-form">
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="Theater Name"
      required
    />
    <select
      value={selectedLocation}
      onChange={(e) => {
        console.log('Selected Location Value:', e.target.value);
        setSelectedLocation(e.target.value);
      }}
      required
    >
      <option value="" disabled>Select Location</option>
      {locations.map((location) => (
        <option key={location.id} value={`/locations/${location.id}`}>{location.city}</option>
      ))}
    </select>
    <input
      type="number"
      value={noOfScreens}
      onChange={(e) => setNoOfScreens(e.target.value)}
      placeholder="Number of Screens"
      required
    />
    <button type="submit" className="submit-button">Create Theater</button>
  </form>
);
}

export default TheaterForm;
