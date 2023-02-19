import "./header.scss";

const Header = () => {
  return (
    <header>
      <div className="header__content">
        <div className="header__content__logo">
          <h1 className="title">
            <a href="/">Task Tracker</a>
          </h1>
        </div>
        <div className="header__content__nav">
          <nav>
            <ul className="menu">
              <li className="menu__item">List of dashboards</li>
              <li className="menu__item">Statistics</li>
              <li className="menu__item">My account</li>
            </ul>
          </nav>
        </div>
        <div className="header__content__tools" />
      </div>
    </header>
  );
};

export default Header;
