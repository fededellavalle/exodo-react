import { SocialICons } from "./aditional/SocialIcons";
import "../styles/Footer.css";

const icons = [
  {
    id: 1,
    link: "https://www.facebook.com/profile.php?id=100094000429780",
    icon: "bi-facebook",
  },
  {
    id: 2,
    link: "https://www.instagram.com/exodo_club_/",
    icon: "bi-instagram",
  },
  {
    id: 3,
    link: "https://x.com/exodo_club_",
    icon: "bi-twitter-x",
  },
  {
    id: 4,
    link: "https://www.tiktok.com/@exodoclubnocturno",
    icon: "bi-tiktok",
  },
];

export function Footer() {
  return (
    <footer className="footer text-white py-4" id="footer">
      <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="footer-logo text-center text-md-start mb-4 mb-md-0">
          <img
            src="/images/logo-exodo.png"
            alt="Éxodo Club Nocturno"
            className="img-fluid mb-2"
            style={{ maxWidth: "160px" }}
          />
          <p className="m-0">Éxodo Club Nocturno</p>
        </div>

        <div className="footer-contact text-center text-md-end">
          <p className="mb-1">
            <i className="bi bi-geo-alt-fill me-1"></i>
            <a
              href="https://maps.app.goo.gl/nNKkp1kef3WJAy7p9"
              target="_blank"
              className="footer-map-link"
            >
              Bernardino Rivadavia 934
            </a>
            <br />
            <small className="click-hint">(clic para ver mapa)</small>
          </p>
          <p className="mb-3">Tancacha, Córdoba</p>

          <div className="social-icons d-flex justify-content-center justify-content-md-end gap-3">
            {icons.map((icon) => (
              <SocialICons key={icon.id} social={icon} />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center mt-4 div-copy">
        <p className="mb-0 small">
          &copy; 2025 Éxodo Club Nocturno — Hecho por
          <a
            href="https://www.instagram.com/fededellavalle/"
            target="_blank"
            className="link-footer"
          >
            Federico Dellavalle
          </a>
        </p>
      </div>
    </footer>
  );
}
