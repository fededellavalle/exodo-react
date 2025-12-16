import { useState } from "react";
import { SideMenu } from "./SideMenu";
import "../styles/Header.css";
import logo from "/images/logo-corto-exodo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <>
      <header>
        <div className="header-container">
          <a href="/">
            <img src={logo} alt="Logo Éxodo" />
          </a>

          <button className="menu-icon" onClick={toggleMenu}>
            <i className="bi bi-list"></i>
          </button>
        </div>
      </header>

      <SideMenu isOpen={isMenuOpen} closeMenu={toggleMenu} />
    </>
  );
}
