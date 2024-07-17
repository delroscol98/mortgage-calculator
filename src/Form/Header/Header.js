import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="header__heading fs-24">Mortgage Calculator</h1>
      <button className="header__btn fs-16">Clear All</button>
    </header>
  );
};

export default Header;
