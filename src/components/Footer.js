import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="grid-footer">
          <div className="row-footer">
            <div className="row-content">
              <p className="subtitle">LLOWITEC</p>
              <p className="title">JIRON SAN CARLOS 1677 EL AGUSTINO</p>
            </div>
          </div>
          <div className="row-footer">
            <div className="row-content">
            <p className="subtitle">Categorias</p>
              <ul>
                <li>
                  <p className="title">Teclado</p>
                </li>
                <li>
                  <p className="title">Audifonos</p>
                </li>
                <li>
                  <p className="title">Sillas</p>
                </li>
                <li>
                  <p className="title">Pantallas</p>
                </li>
                <li>
                  <p className="title">Placas</p>
                </li>
                <li>
                  <p className="title">Microfono</p>
                </li>
              </ul>
            </div>
          </div>
          <div className="row-footer">
            <div className="row-content">
            <ul>
            <li>
            <p className="title"> </p>
          </li>
            <li>
              <p className="title">Speakers</p>
            </li>
            <li>
              <p className="title">Computadoras</p>
            </li>
          </ul>
            </div>
          </div>
          <div className="row-footer">
            <div className="row-content">
            <p className="subtitle">Subscribirse</p>
            <input type="text" placeholder="Su direccion de correo electronico" />
            <button>Suscribirse</button>
            <p className="terms">Al hacer clic en el botón, aceptas nuestra Política de privacidad & Términos de servicios .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
