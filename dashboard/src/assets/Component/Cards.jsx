const Cards = ({ cards }) => {
  return cards.map((card) => (
    <div className="card">
      <h2 className="card-title">{card.title}</h2>
      <h3 className="card-description">{card.description}</h3>
    </div>
  ));
};

export default Cards;
