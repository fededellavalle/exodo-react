import { useState } from "react";
import "../styles/Leclat.css";
import { useIsMobile } from "./hooks/useIsMobile";
import { useCarouselAutoplay } from "./hooks/useCarouselAutoplay";

const items = [
  {
    img: "/images/leclat/1.webp",
    text: "Un nuevo concepto nace en Éxodo. Exclusivo. Elegante.",
  },
  {
    img: "/images/leclat/2.webp",
    text: "Diseñado para mayores de 21, con un ambiente sofisticado.",
  },
  {
    img: "/images/leclat/3.webp",
    text: "Espacios íntimos, sonido de primer nivel y barra premium.",
  },
  {
    img: "/images/leclat/4.webp",
    text: "Cada detalle pensado para una experiencia distinta a todo.",
  },
  {
    img: "/images/leclat/5.webp",
    text: "L’éclat ya es una realidad. Y vos podés ser parte.",
  },
];

export function Leclat() {
  const isMobile = useIsMobile();
  const [index, setIndex] = useState(0);

  const maxIndex = isMobile ? items.length - 1 : items.length - 2;

  const { resetAutoplay } = useCarouselAutoplay({
    index,
    setIndex,
    maxIndex,
    delay: 6000,
  });

  return (
    <section id="leclat" className="historia-leclat">
      <h2 className="historia-titulo">NUEVOS ESPACIOS, NUEVOS CONCEPTOS</h2>

      <div className="carousel-wrapper">
        <div className="carousel-window">
          <div
            className="carousel-track"
            style={{
              transform: `translateX(-${index * (isMobile ? 100 : 50)}%)`,
            }}
          >
            {items.map((item, i) => (
              <div className="historia-item" key={i}>
                <div className="historia-item-inner">
                  <img src={item.img} alt="" />
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="carousel-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <span
              key={i}
              className={`carousel-dot ${i === index ? "active" : ""}`}
              onClick={() => {
                setIndex(i);
                resetAutoplay();
              }}
            />
          ))}
        </div>
      </div>

      <div className="historia-reserva">
        <p>¿Querés tu lugar en L’éclat?</p>
        <button
          className="btn-reserva"
          data-bs-toggle="modal"
          data-bs-target="#reservaModal"
        >
          Contactanos para reservar tu mesa
        </button>
      </div>
    </section>
  );
}
