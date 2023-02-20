import {useState, useEffect} from 'react';
import PopupWithForm from './PopupWithForm.js';

function AddPlacePopup({isOpen, onClose, onAddPlace}) {

  const [cardName, setCardName] = useState('');
  const [cardLink, setCardLink] = useState('');

  function handleCardName(event) {
    setCardName(event.target.value);
  }

  function handleCardLink(event) {
    setCardLink(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    onAddPlace({
      name: cardName,
      link: cardLink
    });
  }

  useEffect(() => {
    setCardName('');
    setCardLink('');
  }, [isOpen]);

  return (
    <PopupWithForm
    name="popup-place"
      title="Новое место"
      buttonText="Создать"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input minLength="2" maxLength="30" required
          className="form__input form__input_profile_card"
          name="name"
          type="text"
          placeholder="Название"
          value={cardName ? cardName : ''}
          onChange={handleCardName}/>
        <span className="form__input-error"/>
        <input required
          className="form__input form__input_profile_link-img"
          name="link"
          type="url"
          placeholder="Ссылка на картинку"
          value={cardLink ? cardLink : ''}
          onChange={handleCardLink}/>
        <span className="form__input-error"/>
    </PopupWithForm>
  );
}
  
export default AddPlacePopup;