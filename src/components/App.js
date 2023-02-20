import {useState, useEffect} from 'react';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import EditProfilePopup from './EditProfilePopup.js';
import EditAvatarPopup from './EditAvatarPopup.js';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import ImagePopup from './ImagePopup.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';
import api from '../utils/Api.js';

function App() {
  const [currentUser, setCurrentUser] = useState({});

  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedDeleteCard, setSelectedDeleteCard] = useState({});
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setCurrentUser(res)
    })
    .catch((err) => console.log(err));

    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err))
  }, []);

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

  function handleCardDeleteClick(card) {
    setSelectedDeleteCard(card);
    setDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({});
  }

  function handleUpdateUser(name, about) {
    api.patchUserProfile(name, about)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleUpdateAvatar(avatar) {
    api.patchUserAvatar(avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((user) => (user._id === currentUser._id));
    
    // Отправляем запрос в API и получаем обновлённые данные карточки
    api.changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) => (
          state.map((item) => item._id === card._id ? newCard : item)
        ));
      })
      .catch((err) => console.log(err));
  }

  function handleCardDelete() {
    api.deleteUserCard(selectedDeleteCard._id)
    .then(() => {
      setCards(
        cards.filter((item) => item._id !== selectedDeleteCard._id)
      );
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  function handleAddPlace(name, link) {
    api.postNewCard(name, link)
    .then((res) => {
      setCards([res, ...cards]);
      closeAllPopups();
    })
    .catch((err) => console.log(err));
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main 
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={handleCardClick}
          onCardDeleteClick={handleCardDeleteClick}
          onCardLike={handleCardLike}
          cards={cards}
        />
        <Footer />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlace}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}>
        </ImagePopup>
        <DeleteCardPopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          onCardDelete={handleCardDelete}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
