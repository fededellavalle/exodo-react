import "../../styles/EventsCard.css";

function formatDate(fecha) {
  const [year, month, day] = fecha.split("-");
  const date = new Date(year, month - 1, day);
  return date.toLocaleDateString("es-ES", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}

export function EventCard({ event }) {
  return (
    <div className="event-col">
      <article className="event-card">
        <div className="event-image-wrapper">
          <img src={event.imagen} alt={event.nombre} />
          <div className="event-overlay" />
        </div>

        <div className="event-body">
          <span className="event-place">{event.lugar}</span>

          <h3 className="event-title">{event.nombre}</h3>

          <p className="event-dj">
            DJ <span>{event.dj}</span>
          </p>

          <div className="event-date">
            <span className="line" />
            <span className="date">{formatDate(event.fecha)}</span>
          </div>

          <div className="event-actions">
            <button className="icon-btn info">
              <i className="bi bi-info-circle" />
            </button>

            {event.linkPassline ? (
              <a
                href={event.linkPassline}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn ticket"
              >
                <img src="/images/logo-passline.png" alt="Passline" />
              </a>
            ) : (
              <a
                href={`https://wa.me/5493571680891?text=Hola,%20consulto%20por%20el%20evento%20${encodeURIComponent(
                  event.nombre
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-btn whatsapp"
              >
                <i className="bi bi-whatsapp" />
              </a>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
