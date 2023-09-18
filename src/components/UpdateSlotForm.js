import React, { useState } from 'react';
import slotService from '../services/slotService';

function UpdateSlotForm({ slot, onUpdate }) {
  const [startTime, setStartTime] = useState(slot.startTime);
  const [endTime, setEndTime] = useState(slot.endTime);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedSlotData = { startTime, endTime };
    await slotService.updateSlot(slot.id, updatedSlotData);
    onUpdate();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Start Time:</label>
        <input
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
      </div>
      <div>
        <label>End Time:</label>
        <input
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Update Slot</button>
    </form>
  );
}

export default UpdateSlotForm;
