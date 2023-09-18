import React from 'react';
import slotService from '../services/slotService';

function DeleteSlotButton({ slotId, onDelete }) {
  const handleDelete = async () => {
    await slotService.deleteSlot(slotId);
    onDelete();
  };

  return (
    <button onClick={handleDelete}>Delete Slot</button>
  );
}

export default DeleteSlotButton;
