import {useContext} from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext.js';

function Card({card, onCardClick, onCardLike, onCardDeleteClick}) {

  const currentUser = useContext(CurrentUserContext);

  const isOwn = card.owner._id !== currentUser._id;
  const isLiked = card.likes.some((user) => (user._id === currentUser._id));
  const cardLikeButtonClassName = (`element__icon ${isLiked && 'element__icon_active'}`);
  const cardDeleteButtonClassName = (`element__trash ${isOwn && 'element__trash_unvisible'}`);

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDeleteClick(card);
  }

  return (
    <article className="element">
      <img
        onClick={handleCardClick}
        className="element__image"
        src={card.link}
        alt={card.name}/>
      <div className="element__desc">
      <h2 className="element__title">{card.name}</h2>
        <figure className="element__figure">
          <button className={cardLikeButtonClassName} type="button" onClick={handleLikeClick}></button>
          <figcaption className="element__icon-caption">{card.likes.length}</figcaption>
        </figure>
      </div>
      <button className={cardDeleteButtonClassName} type="button" onClick={handleDeleteClick}></button>
    </article>
  );
}

export default Card;