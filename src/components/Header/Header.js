const Header = ({ title, userPhoto }) => {
  return (
    <header className="dfa-header">
      <div className="dfa-header__menu">
        <i aria-hidden="true" className="icon icon-menu"></i>
      </div>
      <h1 className="dfa-header__title"> { title }</h1>
      <div className="dfa-header__user-thumbnail">
        <img src={userPhoto} alt="User Profile"/>
      </div>
    </header>
  );
}

export default Header;