import React from "react";
import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div className="mapouter">
        <div className="gmap_canvas">
          <iframe
            width="600"
            height="600"
            id="gmap_canvas"
            src="https://maps.google.com/maps?q=Jiron%20San%20Carlos%201677%20El%20AgUSTINO&t=&z=15&ie=UTF8&iwloc=&output=embed"
            frameBorder="0"
            scrolling="no"
            marginHeight="0"
            marginWidth="0"
          ></iframe>
          <a href="https://123movies-to.org"></a>
        </div>
      </div>

      <div className="contact-container">
        <div className="contact-text">
          <p className="title">Tienda Principal</p>
          <hr />
          <p className="subtitle">JIRON SAN CARLOS 1677 EL AGUSTINO</p>
          <p className="moretext">
          Atención al cliente: Lunes a Viernes de 9 a 18hs.
          </p>
        </div>
        <div className="box-container">
          <div className="contact-box">
            <i className="fab fa-whatsapp fa-lg" />
            <p className="text">WhatsApp +51 999 888 666</p>
          </div>
          <div className="contact-box">
            <i className="fa fa-envelope" aria-hidden="true"></i>
            <p className="text">Email: llowitec_thebest@gmail.com</p>
          </div>
          <div className="contact-box">
            <i className="fa fa-facebook" aria-hidden="true"></i>
            <a target="_blank" href="https://fb.com/llowitec">
              <p>Facebook: Llowitec Oficial</p>
            </a>
          </div>
          <div className="contact-box">
            <i className="fa fa-instagram" aria-hidden="true"></i>
            <p>Instagram: Llowitec Official</p>
          </div>
        </div>
      </div>
    </>
  );
};
