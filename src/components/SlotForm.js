import React, { useState } from 'react';
import slotService from '../services/slotService';

function SlotForm() {
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const formatTimeToSeconds = (time) => {
    const [hours, minutes] = time.split(':');
    return `${hours}:${minutes}:00`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formattedStartTime = formatTimeToSeconds(startTime);
    const formattedEndTime = formatTimeToSeconds(endTime);

    await slotService.createSlot({ startTime: formattedStartTime, endTime: formattedEndTime });
    // Clear form or navigate to another page if needed
  };

  return (
  <form className="slot-form" onSubmit={handleSubmit}>
    <div className="form-group">
      <label htmlFor="startTime">Start Time:</label>
      <input
        type="time"
        id="startTime"
        value={startTime}
        onChange={(e) => setStartTime(e.target.value)}
        required
      />
    </div>
    <div className="form-group">
      <label htmlFor="endTime">End Time:</label>
      <input
        type="time"
        id="endTime"
        value={endTime}
        onChange={(e) => setEndTime(e.target.value)}
        required
      />
    </div>
    <button type="submit" className="submit-button">Create Slot</button>
  </form>
);
}

export default SlotForm;
