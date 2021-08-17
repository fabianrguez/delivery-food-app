const SearchBox = () => {
  return (
    <div className="dfa-search-box__container">
      <div className="dfa-search-box">
        <i aria-hidden="true" className="icon icon-search"></i>
        <input type="text" placeholder="¿Qué estás buscando?"/>
      </div>
      <button className="dfa-search-box__settings">
        <i aria-hidden="true" className="icon icon-settings"></i>
      </button>
    </div>
  );
}

export default SearchBox;