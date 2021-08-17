import CategoryItem from './CategoryItem';

const CategoryList = ({ title, categories }) => {
  return (
    <div className="dfa-category-list">
      <h3 className="dfa-category-list__title">{ title }</h3>
      <div className="dfa-category-list__items">
        { categories && categories.map((category, index) => (
          <CategoryItem key={ index } active={ index === 0 }{ ...category }/>)) }
      </div>
    </div>
  );
}

export default CategoryList