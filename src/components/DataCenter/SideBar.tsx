import React, { useState } from "react";
import { useHistory } from "react-router-dom"

import SmortLogo from "./../../resources/SmortLogo.svg";

const SideBar = () => {

    let History = useHistory()
    const [DCBurguer, setDCBurguer] = useState(false)

    return (
      <div className="SideBar">
        <div
          className={DCBurguer ? "DataCenterBurguer Toggled" : "DataCenterBurguer notToggled"}
          onClick={() => setDCBurguer((prevState) => !prevState)}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>

        <section className={DCBurguer ? `SideBarBox Toggled` :`SideBarBox notToggled`}>
            <span
            className="LinkBox"
            >
            <h2>Acerca de</h2>
            <ul>
                <li>
                <a href="#Domains">Dominios</a>
                </li>
                <li>
                <a href="#Dates&Payments">Fechas y Pagos</a>
                </li>
                <li>
                <a href="#Terms&Conditions">Términos y Condiciones</a>
                </li>
            </ul>
            <h2>Soporte</h2>
            <ul>
                <li>
                <a href="#ClientSupport">Ayuda al Cliente</a>
                </li>
                <li>
                <a href="#StyleChanges">Cambios de Diseño</a>
                </li>
                <li>
                <a href="#SiteUpdates">Actualización o Mejora</a>
                </li>
            </ul>
            </span>

            <span
            className="LogoBox"
            >
            <img
                onClick={() => History.push("/")}
                src={SmortLogo}
                alt="SmortLogo"
            ></img>
            </span>
        </section>
      </div>
    );
};

export default SideBar;
