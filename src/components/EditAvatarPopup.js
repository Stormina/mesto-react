import {useEffect, useRef} from 'react';
import PopupWithForm from './PopupWithForm.js';


function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

  const avatarRef = useRef();

  useEffect(() => {
    avatarRef.current.value  = '';
  }, [isOpen]);

  function handleSubmit(event) {
    event.preventDefault();
  
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
  }

  return (
    <PopupWithForm
      name="popup-avatar"
      title="Обновить аватар"
      buttonText="Сохранить"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}>
        <input required
        className="form__input form__input_profile_avatar"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"
        ref={avatarRef}/>
      <span className="form__input-error"/>
    </PopupWithForm>
  );
}
  
export default EditAvatarPopup;