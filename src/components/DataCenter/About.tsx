import { domain } from "process";
import React from "react";
import DomainSvg from "./../../resources/domain.svg";

const About = () => {
  return (
    <section className="About">
      {/* <h1>Acerca de Smort</h1> */}
      <ul>
        <li id="Domains">
          <h2>Dominios</h2>
          <div className="D Content">

            <span className="TextBox">
              <p>
                Al comprar una página con Smort, usted nos provee 3 opciones o
                posibles nombres que le pudieramos dar a su página. Nosotros nos
                encargamos de checar la disponibiliad, así como de administrar el
                mismo dominio; dependiendo del nombre y la extensión (.com, .tech,
                .net, etc) que usted escoga los precios pueden variar.
              </p>
              <hr />
              <p>
                La primera vez que usted compre una página web con nosotros
                obtendrá su diseño web y su dominio. El diseño de la página es
                completamente suyo y nunca le volveremos a hacer un nuevo cargo
                por su diseño (a menos de que usted quiera que lo mejoremos,
                cambiemos o actualizemos). Sin embargo, el dominio es algo que se
                tiene que renovar cada año, por lo cual para mantenerlo, es
                necesario hacer pagos anuales, para que sigamos administrando y
                teniendo el dominio.
              </p>
            </span>

            <span className="ImgBox">
              <img src={DomainSvg} alt="Style Changes svg" />
            </span>

          </div>
        </li>
        <li id="Dates&Payments" className="DandP">
          <h2>Fechas y Pagos</h2>
          <p>
            El pago inicial al comprar un sitio comprende el diseño permanente y
            un dominio de un año. Dicho pago inicial puede variar dependiendo de
            varios factores, como: tipo de sitio web (de ventas, de portafiolio,
            de producto, etc.), extensión del sitio web (.com, .tech, .net,
            etc), tipo de diseño y recursos utilizados para el desarrollo del
            sitio web, entre otros.
          </p>
          <hr />
          <p>
            El día que te entreguemos tu sitio web, también nos encargaremos de
            mandarte un correo como comprobante de la fecha de entrega y pago.
            Una vez que haya pasado un año desde esta fecha, te enviaremos
            nuevamente un correo algunos días antes, para recordarte sobre los
            pagos anuales de administración y gestión de la página y el dominio.
            En caso de que haya un atraso en dichos pagos anuales, se perderá la
            posesión del dominio y ya no será posible accesarlo, no obstante el
            diseño de la página permanecerá en la posesión del comprador y en
            nuestra gestión. Si busca volver a hacer el sitio web público, solo
            tendría que ponerse en contacto con nosotros para que volvamos a
            comprar y gestionar el dominio (ya sea el mismo, u otro nuevo).
          </p>
          <hr />
          <p>
            Los pagos anuales son cargos hechos por la administración tanto del
            sitio como de su dominio y estos cuestan la mitad de lo que le haya
            costado el pago inicial. Si al comprar su sitio se le cobraron $2000
            pesos mexicanos, entonces los pagos anuales serían de $1000 pesos
            mexicanos.
          </p>
        </li>
        <li id="Terms&Conditions">
          <h2>Términos y Condiciones</h2>
          <p>
            Al comprar un sitio en Smort, usted accede a que nosotros
            administremos la página en todos sus aspectos, usted es el
            propietario de la página, pero nosotros la administramos. Si en
            algun punto quisiera administar la página usted mismo o un tercero,
            con gusto le cedemos el control de la programación tras el diseño y
            funcionamiento sin cargo alguno.
          </p>
          <hr />
          <p>
            Si en algun punto su página empieza a recibir un elevado número de
            visitas diarias (miles) será necesario empezar a realizar cargos
            mensuales, puesto que estaríamos administrando mucha información y
            datos (lo cual, usualmente solo ocurriría en sitios de ventas).
          </p>
        </li>
      </ul>
    </section>
  );
};

export default About;
