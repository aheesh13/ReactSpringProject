import React, { useEffect, useState } from 'react';
import theaterService from '../services/theaterService';
import DeleteTheaterButton from './DeleteTheaterButton';
import './Styles.css';

function ListTheaters() {
  const [theaters, setTheaters] = useState([]);
  const [showTheaters, setShowTheaters] = useState(false);

  useEffect(() => {
    async function fetchTheaters() {
      try {
        const fetchedData = await theaterService.getAllTheaters();
        const fetchedTheaters = fetchedData._embedded.theaters; // Adjust if your data structure is different
        console.log('Fetched Theaters:', fetchedTheaters);
        setTheaters(fetchedTheaters);
      } catch (error) {
        console.error('Error fetching theaters:', error);
      }
    }
    fetchTheaters();
  }, []);

  return (
    <div className="container">
      <h2>List of Theaters</h2>
      <button onClick={() => setShowTheaters(!showTheaters)}>
        {showTheaters ? "Hide Theaters" : "Show Theaters"}
      </button>
      {showTheaters && (
        <ul>
          {theaters.map((theater) => {
            const theaterId = theater._links.self.href.split('/').pop();

            return (
              <li key={theaterId}>
                {theater.name} - {theater.noOfScreens} screens {}
                <DeleteTheaterButton
                  theaterId={theaterId}
                  onDelete={() => {
                    setTheaters(prevTheaters => prevTheaters.filter(t => t._links.self.href.split('/').pop() !== theaterId));
                  }}
                />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

export default ListTheaters;
