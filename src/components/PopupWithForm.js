import React from 'react';

function PopupWithForm({name, title, isOpen, onClose, onSubmit, children, buttonText}) {
  
  return (
  <div className={`popup popup_type_${name} ${isOpen ? "popup_opened" : ''}`}>
    <div className="popup__container">
      <button className="popup__close" type="button" onClick={onClose}></button>
      <h2 className="popup__title">{title}</h2>
      <form className={`form form_type_${name}`} onSubmit={onSubmit}>
        {children}
        <button className="form__submit" type="submit">{buttonText}</button>
      </form>
    </div>
  </div>
  );
}
  
export default PopupWithForm;