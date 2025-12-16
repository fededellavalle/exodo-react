import "../styles/loader.css";
import { useTimer } from "./hooks/useTimer";

export function Loader({ onFinish }) {
  const { visible } = useTimer({ onFinish });

  if (!visible) return null;

  return (
    <div id="loader">
      <div className="loader-content">
        <img
          src="/images/logo-corto-exodo.png"
          alt="Cargando..."
          className="logo"
        />
        <div className="neon-text">Éxodo Club</div>
        <div className="equalizer">
          <div />
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
    </div>
  );
}
