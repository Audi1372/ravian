import { useState } from "react";
import { Link } from "react-router-dom";
const Head = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="menu-icon" onClick={toggleMenu}>
        ☰
      </div>
      <nav>
        <ul className={isOpen ? "nav-links open" : "nav-links"}>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/offerings">Offerings</Link>
          </li>
          <li>
            <Link className="logo" to="/">
              RAVIAN AI
            </Link>
          </li>
          <li>
            <Link to="/vision">Vision</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Head;
