import React from 'react';
import Card from './Card.js';
import api from '../utils/Api.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

  const [{userName, userDescription, userAvatar}, setState] = React.useState([]);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
    .then((res) => {
      setCards(res);
    })
    .catch((err) => console.log(err))
  }, []);

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setState({
        userName: res.name,
        userDescription: res.about,
        userAvatar: res.avatar
      })
    }, []);
  })

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={userAvatar} alt="Аватар пользователя"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
            <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="elements" aria-label="Карточки с фотографиями">  
          {cards.map((card) => (
            <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}/>
          ))
          }
      </section>
    </main>
  );
}

  
export default Main;