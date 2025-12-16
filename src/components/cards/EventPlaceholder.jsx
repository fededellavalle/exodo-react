import "../../styles/EventsCard.css";
import "../../styles/EventPlaceHolder.css";

export function EventPlaceholder() {
  return (
    <div className="event-col">
      <article className="event-card event-placeholder">
        <div className="event-image-wrapper">
          <img src="/images/proximamente.jpg" alt="Próximamente" />
          <div className="event-overlay" />

          {/* Badge */}
          <span className="event-badge">Próximamente</span>
        </div>

        <div className="event-body">
          <span className="event-place">Éxodo Club</span>

          <h3 className="event-title">Nuevo Evento</h3>

          <p className="event-dj">
            DJ <span>A confirmar</span>
          </p>

          <div className="event-date">
            <span className="line" />
            <span className="date">Fecha a definir</span>
          </div>

          <div className="event-actions disabled">
            <div className="icon-btn disabled">
              <i className="bi bi-info-circle" />
            </div>

            <div className="icon-btn disabled">
              <img src="/images/logo-passline.png" alt="Passline" />
            </div>
          </div>
        </div>
      </article>
    </div>
  );
}
