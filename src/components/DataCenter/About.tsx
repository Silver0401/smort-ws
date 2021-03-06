import React from "react";
import DomainSvg from "./../../resources/domain.svg";
import TermsAndConditionsSvg from "./../../resources/TermsAndConditions.svg";
import { useTranslation } from "react-i18next";

const About = (props:any) => {


  const { t } = useTranslation()

  return (
    <section className="About">
      <ul>
        <li id="Domains" ref={props.Refs.DomainRef}>
          <h2>{t("DC.About.Domains.title")}</h2>
          <div className="D Content">
            <span className="TextBox">
              <p>{t("DC.About.Domains.P1")}</p>
              <hr />
              <p>{t("DC.About.Domains.P2")}</p>
            </span>

            <span className="ImgBox">
              <img src={DomainSvg} alt="Domain svg" />
            </span>
          </div>
        </li>
        <li
          id="Dates&Payments"
          className="DandP"
          ref={props.Refs.DatesAndPaymentsRef}
        >
          <h2>{t("DC.About.D&P.title")}</h2>
          
          <div className="TextBox">
            <p>{t("DC.About.D&P.P1")}</p>
            <hr />
            <p>{t("DC.About.D&P.P2")}</p>
            <hr />
          </div>
        </li>
        <li id="TandC" ref={props.Refs.TermsAndConditionsRef}>
            
          <h2>{t("DC.About.T&C.title")}</h2>

          <div className="TextBox">
            <p>{t("DC.About.T&C.P1")}</p>
            <hr />
            <p>{t("DC.About.T&C.P2")}</p>
          </div>

          <div className="ImageBox">
            <img alt="Terms and Conditions svg" src={TermsAndConditionsSvg} />
          </div>

        </li>
      </ul>
    </section>
  );
};

export default About;
