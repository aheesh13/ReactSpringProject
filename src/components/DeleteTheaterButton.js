// DeleteTheaterButton.js
import React from 'react';
import theaterService from '../services/theaterService';

function DeleteTheaterButton({ theaterId, onDelete }) {
  const handleDelete = async () => {
    try {
      await theaterService.deleteTheater(theaterId);
      onDelete();
    } catch (error) {
      console.error('Error deleting theater:', error);
    }
  };

  return <button onClick={handleDelete}>Delete</button>;
}

export default DeleteTheaterButton;
