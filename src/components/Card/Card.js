const Card = ({ title, subtitle, image, price, previousPrice, liked }) => {
  return (
    <div className="dfa-card">
      <div className="dfa-card__image">
        <img src={ image } alt={ title }/>
      </div>
      <div className="dfa-card__content">
        <div className="dfa-card__content-heading">
          <h1 className="dfa-card__content-title">{ title }</h1>
          <h2 className="dfa-card__content-subtitle">{ subtitle }</h2>
        </div>
        <div className="dfa-card__content-price">
          <span className="dfa-card__content-price-actual">${ price }</span>
          <span className="dfa-card__content-price-previous">${ previousPrice }</span>
        </div>
      </div>
    </div>
  );
}

export default Card;