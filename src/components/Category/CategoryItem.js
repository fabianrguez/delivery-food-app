const CategoryItem = ({ name, image, active }) => {
  return (
    <button className={ `dfa-category-item ${ active ? 'active' : '' }` }>
      <div className="dfa-category-item__image">
        <img src={ image } alt={ name }/>
      </div>
      <span className="dfa-category-item__name">{ name }</span>
    </button>
  );
}

export default CategoryItem;