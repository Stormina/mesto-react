import {useState, useEffect, useContext} from 'react';
import PopupWithForm from './PopupWithForm.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, isOpen]);

  function handleUserName(event) {
    setName(event.target.value);
  }

  function handleUserDescription(event) {
    setDescription(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    onUpdateUser({
      name: name,
      about: description,
    });
  }

  return (
    <PopupWithForm
      name="popup-profile"
      title="Редактировать профиль"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input minLength="2" maxLength="40" required
          value={name ? name : ''}
          className="form__input form__input_profile_name"
          name="name"
          type="text"
          placeholder="Имя"
          onChange={handleUserName}/>
        <span className="form__input-error"/>
        <input minLength="2" maxLength="200" required
          value={description ? description : ''}
          className="form__input form__input_profile_job"
          name="about"
          type="text"
          placeholder="О себе"
          onChange={handleUserDescription}/>
        <span className="form__input-error"/>
    </PopupWithForm>
  );
}
  
export default EditProfilePopup;