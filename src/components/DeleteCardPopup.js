import React from 'react';
import PopupWithForm from './PopupWithForm.js';

function DeleteCardPopup({isOpen, onClose, onCardDelete}) {

  function handleSubmit(event) {
    event.preventDefault();
    onCardDelete();
  }

  return (
    <PopupWithForm
      name="popup-delete"
      title="Вы уверены?"
      buttonText="Да"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  );
}
  
export default DeleteCardPopup;