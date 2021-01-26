import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import SmortLogo from "./../../resources/SmortLogo.svg";
import { useTranslation } from "react-i18next";


const SideBar = () => {

    const { t } = useTranslation()
    let History = useHistory()
    const [DCBurguer, setDCBurguer] = useState(false)

    return (
      <div className={DCBurguer ? `SideBar Toggled` : `SideBar notToggled`}>
        <div
          className="DataCenterBurguer"
          onClick={() => setDCBurguer((prevState) => !prevState)}
        >
          <div id="l1"></div>
          <div id="l2"></div>
          <div id="l3"></div>
        </div>

        <span className="LinkBox">
          <h2>{t("About.TitleWord")}</h2>
          <ul>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#Domains">
                {t("DC.About.Domains.title")}
              </a>
            </li>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#Dates&Payments">
                {t("DC.About.D&P.title")}
              </a>
            </li>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#TandC">
                {t("DC.About.T&C.title")}
              </a>
            </li>
          </ul>
          <h2>{t("Support.TitleWord")}</h2>
          <ul>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#ClientSupport">
                {t("DC.Support.CS.title")}
              </a>
            </li>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#StyleChanges">
                {t("DC.Support.StyleChanges.title")}
              </a>
            </li>
            <li>
              <a onClick={() => setDCBurguer(false)} href="#SiteUpdates">
                {t("DC.Support.SiteUpdates.title")}
              </a>
            </li>
          </ul>
        </span>

        <span className="LogoBox">
          <img
            onClick={() => History.push("/")}
            src={SmortLogo}
            alt="SmortLogo"
          ></img>
        </span>
      </div>
    );
};

export default SideBar;
