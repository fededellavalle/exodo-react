import { useState, useEffect } from "react";

export function useGetEvents() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost/exodo/php/getEvents.php")
      .then((res) => res.json())
      .then((data) => {
        setEvents(data || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando eventos:", err);
        setLoading(false);
      });
  }, []);

  return { events, loading };
}
