const CategoryItem = ({ name, image, active }) => {
  return (
    <a href="#" className={ `dfa-category-item ${ active ? 'active' : '' }` }>
      <div className="dfa-category-item__image">
        <img src={ image } alt={ name }/>
      </div>
      <span className="dfa-category-item__name">{ name }</span>
    </a>
  );
}

export default CategoryItem;