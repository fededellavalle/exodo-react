import { useEffect, useState } from "react";
import "../styles/Events.css";
import { EventCard } from "./cards/EventsCards";
import { EventPlaceholder } from "./cards/EventPlaceholder";
import { useGetEvents } from "./hooks/useGetEvents";

export function Events() {
  const { events, loading } = useGetEvents();

  if (loading) {
    return (
      <p style={{ color: "white", textAlign: "center" }}>Cargando eventos…</p>
    );
  }

  return (
    <section className="parallax-eventos">
      <div className="eventos-overlay">
        <section className="eventos-section py-5">
          <h2 className="titulo-eventos">Eventos</h2>

          <div id="eventContainer">
            {events.length === 0 ? (
              <EventPlaceholder />
            ) : (
              events.map((event) => (
                <EventCard key={event.id || event.nombre} event={event} />
              ))
            )}
          </div>
        </section>
      </div>
    </section>
  );
}
