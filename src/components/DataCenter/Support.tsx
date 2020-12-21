import React from "react";

const Support = () => {
  return (
    <section className="Support">
      <h1>Soporte</h1>
      <ul>
        <li>
          <h2 id="ClientSupport">Ayuda al Cliente</h2>
          <p>
            Si necesita contactarnos para cualquier problema, 
            duda o aclaración puede enviarnos un correo al email: smortmc2@gmail.com, 
            enviarnos un whatsapp o llamrnos al número 771 411 6235 o también escribirnos 
            por aqui mismo, llenando la información requerida.
          </p>

          <form>

            <div className="TopForm">
              <label>Nombre</label>
              <input/>
              <label>Correo</label>
              <input/>
            </div>
            <div className="BottomForm">
              <label>Mensaje</label>
              <input/>
            </div>
          </form>
        </li>
        <li>
          <h2 id="StyleChanges">Cambios del diseño y estilo de la página</h2>
          <p>
            En el caso de que ya haya comprado su sitio web con nosotros, puede 
            contactarnos en cualquier momento si encuentra algun error o falla en el sitio. 
            Nosotros nos encargaremos de arreglar el error en menos de 24 horas sin costo alguno.
            Pero si por otro lado, busca que le cambiemos o removamos algo del diseño inicial, únicamente tendrá 
            derecho a dos de estos cambios sin cosot alguno, cualquier otro cambio o remoción que usted quiera 
            tendrá un costo exacto de $500 pesos mexicano (cada uno).
          </p>
        </li>
        <li>
          <h2 id="SiteUpdates">Actualización o Mejora de tu Página</h2>
          <p>
            Si en algun punto busca que le agreguemos, actualizemos o mejoremos la página de cualquier manera,
            se cobrará un cantidad acorde al tamaño de la nueva implementación deseada (los precios pueden variar desde
            tan solo $500 hasta $1000 pesos mexicanos). En casos de nuevas secciones o adiciones a páginas ya creadas, cada
            nueva sección tendrá un costo de 500$ pesos mexicanos. Cuando se busque añadir desde cero una núeva página, cada 
            una de estas tendrá un costo de creación e implementación de 1000$ pesos mexicanos. 
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Support;
