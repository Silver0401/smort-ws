import React, { useRef, useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import styleSvg from "./../../resources/style.svg";
import changesSvg from "./../../resources/changes.svg";

const Support = () => {

  const NameRef = useRef <HTMLInputElement> (null)
  const EmailRef = useRef <HTMLInputElement> (null)
  const MessageRef = useRef <HTMLTextAreaElement> (null)

  const [currentNameData, setCurrentNameData] = useState <string | undefined> ()
  const [currentEmailData, setCurrentEmailData] = useState <string | undefined> ()
  const [currentMessageData, setCurrentMessageData] = useState <string | undefined> ()

  const [messageSent, setMessageSent] = useState(false)

  const PostHelpRequest = () => {

    const HelpRequestData = {
      Name: NameRef.current?.value,
      Email: EmailRef.current?.value,
      Message: MessageRef.current?.value
    }

    axios.post("/DataCenter/HelpRequest", HelpRequestData)
      .then(res => {
        console.log(res.data); 
        toast.success("¡Solicitud de Ayuda Enviada!");
        setMessageSent(true)
      })
      .catch(err => {console.log(err); toast.success(err);})
  }

  return (
    <section className="Support">
      {/* <h1>Soporte</h1> */}
      <ul>
        <li id="ClientSupport">
          <h2>Ayuda al Cliente</h2>
          <p>
            Si necesita contactarnos para cualquier problema, duda o aclaración
            puede enviarnos un correo al email: smortmc2@gmail.com, enviarnos un
            whatsapp o llamrnos al número 771 411 6235 o también escribirnos por
            aqui mismo, llenando la información requerida.
          </p>

          <form>
            <div className="TopForm">
              <label className="NameLabel">Nombre</label>
              <input
                ref={NameRef}
                onChange={(e) => setCurrentNameData(e.target.value)}
                value={messageSent ? "" : currentNameData}
              />
              <label>Correo</label>
              <input
                ref={EmailRef}
                onChange={(e) => setCurrentEmailData(e.target.value)}
                value={messageSent ? "" : currentEmailData}
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  PostHelpRequest();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 0l-4.5 16.5-6.097-5.43 5.852-6.175-7.844 5.421-5.411-1.316 18-9zm-11 12.501v5.499l2.193-3.323-2.193-2.176zm-8.698 6.825l-1.439-.507 5.701-5.215 1.436.396-5.698 5.326zm3.262 4.287l-1.323-.565 4.439-4.503 1.32.455-4.436 4.613zm-4.083.387l-1.481-.507 8-7.89 1.437.397-7.956 8z" />
                </svg>
              </button>
            </div>
            <div className="BottomForm">
              <label>Mensaje</label>
              <textarea
                ref={MessageRef}
                placeholder="En que te podemos ayudar?"
                onChange={(e) => setCurrentMessageData(e.target.value)}
                value={messageSent ? "" : currentMessageData}
              />
            </div>
          </form>
        </li>
        <li id="StyleChanges">
          <h2>Cambios del diseño y estilo de la página</h2>
          <div className="SC Content">
            <p>
              En el caso de que ya haya comprado su sitio web con nosotros,
              puede contactarnos en cualquier momento si encuentra algun error o
              falla en el sitio. Nosotros nos encargaremos de arreglar el error
              en menos de 24 horas sin costo alguno. Pero si por otro lado,
              busca que le cambiemos o removamos algo del diseño inicial,
              únicamente tendrá derecho a dos de estos cambios sin cosot alguno,
              cualquier otro cambio o remoción que usted quiera tendrá un costo
              exacto de $500 pesos mexicano (cada uno).
            </p>
            <img src={styleSvg} alt="Style Changes svg" />
          </div>
        </li>
        <li id="SiteUpdates">
          <h2>Actualización o Mejora de tu Página</h2>
          <div className="SU Content">
            <p>
              Si en algun punto busca que le agreguemos, actualizemos o
              mejoremos la página de cualquier manera, se cobrará un cantidad
              acorde al tamaño de la nueva implementación deseada (los precios
              pueden variar desde tan solo $500 hasta $1000 pesos mexicanos). En
              casos de nuevas secciones o adiciones a páginas ya creadas, cada
              nueva sección tendrá un costo de 500$ pesos mexicanos. Cuando se
              busque añadir desde cero una núeva página, cada una de estas
              tendrá un costo de creación e implementación de 1000$ pesos
              mexicanos.
            </p>
            <img src={changesSvg} alt="SU svg image"></img>
          </div>
        </li>
      </ul>
      <ToastContainer />
    </section>
  );
};

export default Support;
