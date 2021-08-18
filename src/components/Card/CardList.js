import Card from './Card';

const CardList = ({ title, cards }) => {
  return (
    <section className="dfa-card-list">
      <h3>{ title }</h3>
      <div className="dfa-card-list__items">
        { cards && cards.map(({ name, category, image, price, previousPrice }, index) => (
          <Card key={ index }
                title={ name }
                subtitle={ category }
                price={ price }
                previousPrice={ previousPrice }
                image={ image }/>)) }
      </div>

    </section>
  );
}

export default CardList;