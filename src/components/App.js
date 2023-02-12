import React from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import ImagePopup from './ImagePopup.js';

function App() {

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main 
        onEditAvatar={handleEditAvatarClick}
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        title="Обновить аватар"
        buttonText="Сохранить">
      <input required
        className="form__input form__input_profile_avatar"
        name="avatar"
        type="url"
        placeholder="Ссылка на картинку"/>
      <span className="form__input-error"/>
  </PopupWithForm>

  <PopupWithForm
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    title="Редактировать профиль"
    buttonText="Сохранить">
      <input minLength="2" maxLength="40" required
        className="form__input form__input_profile_name"
        name="name"
        type="text"
        placeholder="Имя"/>
      <span className="form__input-error"/>
      <input minLength="2" maxLength="200" required
        className="form__input form__input_profile_job"
        name="about"
        type="text"
        placeholder="О себе"/>
      <span className="form__input-error"/>
  </PopupWithForm>

  <PopupWithForm
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    title="Новое место"
    buttonText="Создать">
      <input minLength="2" maxLength="30" required
        className="form__input form__input_profile_card"
        name="name"
        type="text"
        placeholder="Название"/>
      <span className="form__input-error"/>
      <input required
        className="form__input form__input_profile_link-img"
        name="link"
        type="url"
        placeholder="Ссылка на картинку"/>
      <span className="form__input-error"/>
  </PopupWithForm>

  <PopupWithForm
    onClose={closeAllPopups}
    title="Вы уверены?"
    buttonText="Да">
  </PopupWithForm>
  
  <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}>
  </ImagePopup>
</div>
  );
}

export default App;
