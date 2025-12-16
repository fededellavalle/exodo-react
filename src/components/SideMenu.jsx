export function SideMenu({ isOpen, closeMenu }) {
  return (
    <>
      <div
        className={`overlay ${isOpen ? "active" : ""}`}
        onClick={closeMenu}
      />

      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <button className="close-menu" onClick={closeMenu}>
          &times;
        </button>

        <a href="/" onClick={closeMenu} className="item">
          Inicio
        </a>
        <a href="#eventContainer" onClick={closeMenu} className="item">
          Eventos
        </a>
        <a href="#leclat" onClick={closeMenu} className="leclat-menu-item">
          L’éclat
        </a>
        <a href="#transporte" onClick={closeMenu} className="item">
          Transporte
        </a>
        <a href="#faq" onClick={closeMenu} className="item">
          Preguntas Frecuentes
        </a>
        <a href="#footer" onClick={closeMenu} className="item">
          Contacto
        </a>
      </div>
    </>
  );
}
