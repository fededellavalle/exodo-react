import "../../styles/ReservaModal.css";

export function ReservaModal() {
  return (
    <div
      className="modal fade"
      id="reservaModal"
      tabIndex="-1"
      aria-labelledby="reservaModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <div className="modal-content custom-modal-content">
          <div className="modal-header custom-modal-header">
            <h5 className="modal-title" id="reservaModalLabel">
              Reservá tu mesa en L’éclat
            </h5>
            <button
              type="button"
              className="btn-close btn-close-white"
              data-bs-dismiss="modal"
              aria-label="Cerrar"
            />
          </div>

          <div className="modal-body custom-modal-body">
            <p className="modal-text">
              Podés reservar directamente escribiéndonos por WhatsApp a
              cualquiera de estos números:
            </p>

            <div className="wpp-buttons">
              <a
                href="https://wa.me/543571324617?text=Hola%20Seba%2C%20quiero%20reservar%20una%20mesa%20para%20L%27eclat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wpp"
              >
                SEBA
              </a>

              <div className="separador">
                <span className="linea" />
                <img
                  src="/images/logo-corto-exodo.png"
                  alt="Éxodo"
                  className="icono-separador"
                />
                <span className="linea" />
              </div>

              <a
                href="https://wa.me/543571326577?text=Hola%20Tomi%2C%20me%20gustaría%20reservar%20una%20mesa%20para%20L%27eclat"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-wpp"
              >
                TOMI
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
