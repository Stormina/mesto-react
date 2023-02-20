import {useContext} from 'react';
import Card from './Card.js';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Main({onEditProfile, onAddPlace, onEditAvatar, cards, onCardClick, onCardLike, onCardDeleteClick}) {

  const currentUser = useContext(CurrentUserContext);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__block-avatar" onClick={onEditAvatar}>
          <img className="profile__avatar" src={currentUser.avatar} alt="Аватар пользователя"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{currentUser.name}</h1>
            <button className="profile__edit-button" onClick={onEditProfile} type="button"></button>
            <p className="profile__subtitle">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlace} type="button"></button>
      </section>
      <section className="elements" aria-label="Карточки с фотографиями">  
          {cards.map((card) => (
            <Card
            card={card}
            key={card._id}
            onCardClick={onCardClick}
            onCardLike={onCardLike}
            onCardDeleteClick={onCardDeleteClick}/>
          ))
          }
      </section>
    </main>
  );
}

  
export default Main;