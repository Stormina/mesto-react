import React from 'react';

function Card({card, onCardClick}) {
  function handleCardClick() {
    onCardClick(card);
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
          <button className="element__icon" type="button" name="like"></button>
          <figcaption className="element__icon-caption">{card.likes.length}</figcaption>
        </figure>
      </div>
      <button className="element__trash" /* element__trash_unvisible */ type="button" name="deleteButton"></button>
    </article>
  );
}

export default Card;