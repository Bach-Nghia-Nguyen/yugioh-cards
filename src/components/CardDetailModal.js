import React from "react";
import ReactDOM from "react-dom";

const CardDetailModal = ({ card, open, onClose }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="card-detail">
        <i
          className="far fa-2x fa-times-circle close-btn"
          size="3x"
          onClick={onClose}
        ></i>

        <div className="card-name">
          <h1>{card.name}</h1>
        </div>

        <div className="card-info">
          <img src={card.card_images[0].image_url} alt="card" height="550px" />

          <div className="info-right">
            <p>Type: {card.type}</p>
            <br />
            <p>Race: {card.race}</p>
            <br />

            {card.level && (
              <>
                <p>Level: {card.level}</p> <br />
              </>
            )}
            {card.attribute && (
              <>
                {" "}
                <p>Attribute: {card.attribute}</p>
                <br />
              </>
            )}

            <p>Description (Card Effect): {card.desc}</p>
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default CardDetailModal;
