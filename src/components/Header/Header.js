const Header = ({ title, userPhoto, openMenu }) => {
  return (
    <header className="dfa-header">
      <div className="dfa-header__menu">
        <button className="dfa-header__menu-burger" onClick={ openMenu }>
          <i aria-hidden="true" className="icon icon-menu"></i>
        </button>
      </div>
      <h1 className="dfa-header__title"> { title }</h1>
      <div className="dfa-header__user-thumbnail">
        <img src={ userPhoto } alt="User Profile"/>
      </div>
    </header>
  );
}

export default Header;