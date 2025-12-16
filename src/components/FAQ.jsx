import "../styles/FAQ.css";
import { FAQItem } from "./cards/FAQItem";

const preguntas = [
  {
    id: 1,
    icon: "bi-person-badge-fill",
    question: "¿Cuál es la edad mínima para ingresar?",
    answer:
      "La edad mínima es de 18 años. Es obligatorio presentar DNI físico en la entrada.",
  },
  {
    id: 2,
    icon: "bi-ticket-detailed-fill",
    question: "¿Dónde puedo conseguir entradas anticipadas?",
    answer:
      "Podés adquirirlas a través de esta web, por WhatsApp o redes sociales. Cada evento tiene sus propios enlaces y puntos de venta oficiales que se publican anticipadamente.",
  },
  {
    id: 3,
    icon: "bi-bus-front-fill",
    question: "¿Desde qué localidades hay transporte?",
    answer:
      "Contamos con transporte desde Río Tercero, Almafuerte, Hernando, Oncativo y muchas otras ciudades. Consultá tu ciudad en la sección Transporte.",
  },
  {
    id: 4,
    icon: "bi-clock-history",
    question: "¿A qué hora abren las puertas?",
    answer:
      "Por lo general a las 00:30 hs. Te recomendamos llegar temprano para evitar filas.",
  },
  {
    id: 5,
    icon: "bi-stars",
    question: "¿Se pueden reservar mesas o sectores VIP?",
    answer:
      "Sí, contamos con sectores VIP. Se pueden reservar por mensaje privado o WhatsApp con anticipación.",
  },
];

export function FAQ() {
  return (
    <section className="faq-horizon" id="faq">
      <div className="container">
        <h2 className="faq-h-title">Preguntas Frecuentes</h2>
        <p className="faq-h-subtitle">
          Respondemos lo más común antes de que nos escribas
        </p>

        <div className="faq-h-list">
          {preguntas.map((pregunta) => (
            <FAQItem key={pregunta.id} pregunta={pregunta} />
          ))}
        </div>
      </div>
    </section>
  );
}
