import React, { useEffect, useState } from 'react';
import slotService from '../services/slotService';
import DeleteSlotButton from './DeleteSlotButton';
import './Styles.css';

function ListSlots() {
  const [slots, setSlots] = useState([]);
  //here im setting the showSlot value directly to false (so based on the logic of button below
   // The label will be set to (ShowSlots label) Initially once user clicks our condition
 // showSlots? 'hideSlotsLabel' : 'ShowSlotslabel')
  const [showSlots, setShowSlots] = useState(false);

  useEffect(() => {
    async function fetchSlots() {
      try {
        const fetchedData = await slotService.getAllSlots();
        const fetchedSlots = fetchedData._embedded.slots;
        console.log('Fetched Slots:', fetchedSlots);
        setSlots(fetchedSlots);
      } catch (error) {
        console.error('Error fetching slots:', error);
      }
    }
    fetchSlots();
  }, []);

  return (
    <div className="container">
      <h2>List of Slots</h2>
      <button onClick={() => setShowSlots(!showSlots)}>
        {showSlots ? "Hide Slots" : "Show Slots"}
      </button>
      {showSlots && (
        <ul>
          {slots.map((slot) => {
            const slotId = slot._links.self.href.split('/').pop(); // Extract slotId here

            return (
              <li key={slotId}>
                Start Time: {slot.startTime}, End Time: {slot.endTime}
                <DeleteSlotButton
                  slotId={slotId}
                  onDelete={() => {
                    // get the previous slots in the array and compare with the clicked id
                    // if it does not match then keep those ids in the array if matched then don't keep in array
                    setSlots(prevSlots => prevSlots.filter(s => s._links.self.href.split('/').pop() !== slotId));
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

export default ListSlots;
