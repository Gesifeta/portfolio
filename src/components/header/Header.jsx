import "./Header.css";

const Header = () => {
  let navitems = ["About", "Projects", "Contact"];
  return (
    <header>
      <div className="logo">
        <img src="/logo.png" alt="logo" />
      </div>
      <nav className="navigation-header">
        <ul>
          {navitems.map((item, index) => (
            <li key={`${item}-${index}`}>
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
