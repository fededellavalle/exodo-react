import "../styles/Transporte.css";
import { useCascadeReveal } from "./hooks/useCascadeReveal";

const localidades = [
  "Río Tercero",
  "Almafuerte",
  "Corralito",
  "Despeñaderos",
  "Hernando",
  "Los Cóndores",
  "Villa Ascasubi",
  "Berrotarán",
  "General Deheza",
  "Las Perdices",
  "San Agustín",
  "General Cabrera",
  "Oliva",
  "Oncativo",
  "Embalse",
];

export function Transporte() {
  const listRef = useCascadeReveal({ delay: 100 });

  return (
    <section className="parallax-transporte">
      <div className="transporte-overlay">
        <section className="transporte-section py-5 text-white">
          <div className="container" id="transporte">
            <div className="row align-items-center">
              {/* Imagen */}
              <div className="col-md-6 mb-4 mb-md-0 text-center">
                <img
                  src="/images/colectivo.png"
                  alt="Colectivo Éxodo"
                  className="img-fluid rounded transporte-img"
                />
              </div>

              {/* Texto */}
              <div className="col-md-6 text-center text-md-start">
                <h2 className="mb-3 transporte-title">
                  🚍 Transporte desde tu localidad
                </h2>

                <p className="lead transporte-text">
                  No te preocupes por cómo llegar. Contamos con transporte
                  disponible desde distintas ciudades para que vivas la fiesta
                  sin excusas.
                </p>

                <ul className="localidades-list mt-4">
                  {localidades.map((loc, i) => (
                    <li key={loc} ref={(el) => (listRef.current[i] = el)}>
                      {loc}
                    </li>
                  ))}
                </ul>

                <a
                  href="https://wa.me/5493571680891?text=Hola,%20quiero%20consultar%20por%20el%20transporte%20para%20ir%20a%20Éxodo%20Club."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-consulta-transporte mt-4"
                >
                  <i className="bi bi-whatsapp"></i>
                  Consultá tu pasaje
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}
