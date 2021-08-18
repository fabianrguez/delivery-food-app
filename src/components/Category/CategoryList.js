import CategoryItem from './CategoryItem';

const CategoryList = ({ title, categories }) => {
  return (
    <section className="dfa-category-list">
      <h3 className="dfa-category-list__title">{ title }</h3>
      <div className="dfa-category-list__items">
        { categories && categories.map((category, index) => (
          <CategoryItem key={ index } active={ index === 0 }{ ...category }/>)) }
      </div>
    </section>
  );
}

export default CategoryList