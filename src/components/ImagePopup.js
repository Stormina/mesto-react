function ImagePopup({card, onClose}) {

  return(
    <div className={`popup popup_type_image ${card.name ? "popup_opened" : ''}`}>
      <div className="popup__card">
        <button className="popup__close popup__close_el_image" type="button" onClick={onClose}></button>
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name}/>
          <figcaption className="popup__caption">{card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
}

export default ImagePopup;