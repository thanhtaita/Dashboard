const Card = (title, description) => {
  return (
    <div>
      <h2 className="card-title">{title}</h2>
      <h3 className="card-description">{description}</h3>
    </div>
  );
};

export default Card;
