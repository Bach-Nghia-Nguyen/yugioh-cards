import React, { useEffect, useState } from "react";
import api from "../apiService";
import CardDetailModal from "../components/CardDetailModal";

const HomePage = () => {
  const [cards, setCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const createURLPath = ({ parameters }) => {
    let urlString = "?";

    if (parameters && parameters instanceof Object) {
      for (let i = 0; i < Object.keys(parameters).length; i++) {
        if (i === Object.keys(parameters).length - 1) {
          // the last query doesn't contain ampersand after it
          let key = Object.keys(parameters)[i];
          return (urlString += `${key}=${parameters[key]}`);
        }

        let key = Object.keys(parameters)[i];
        urlString += `${key}=${parameters[key]}&`;
      }
    }

    return urlString;
  };

  const showCardDetail = (card) => {
    setIsOpen(true);

    if (selectedCard?.id !== card.id || selectedCard?.id === card.id) {
      console.log("Card", card);
      setSelectedCard(card);
    }
  };

  useEffect(() => {
    const getCards = async () => {
      let url = createURLPath({
        parameters: {
          type: "Synchro%20Pendulum%20Effect Monster",
        },
      });
      console.log("test url: ", url);
      const response = await api.get(url);

      setCards(response.data.data);
    };
    getCards();
  }, []);
  console.log("Cards are: ", cards);

  return (
    <>
      <div className="home">
        <h1>Yugioh Cards</h1>

        <main className="card-gallery">
          {cards && cards.length > 0 ? (
            cards.map((card) => (
              <div
                key={card.id}
                className="yugioh-card"
                onClick={() => showCardDetail(card)}
              >
                <img src={card.card_images[0].image_url_small} alt="card" />
              </div>
            ))
          ) : (
            <p>There is no card</p>
          )}
        </main>

        <CardDetailModal
          card={selectedCard}
          open={isOpen}
          onClose={() => setIsOpen(false)}
        />
      </div>
    </>
  );
};

export default HomePage;
