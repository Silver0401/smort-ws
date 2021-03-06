// Libraries
import React, { useState, useContext } from "react";
import { ChosenDataContext } from "./../components/ChosenData";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { DataCenterContext } from "./../components/DataCenterPath";

// Svg's
import PersonalImg from "./../resources/person.svg";
import MercaImg from "./../resources/marketing.svg";
import VentasImg from "./../resources/sales.svg";
import BlogImg from "./../resources/type.svg";
import ContactImg from "./../resources/Bulb.svg";

const BuilderInit = () => {

  const { t } = useTranslation();
  let History = useHistory();
  
  const [chosenPath, setChosenPath] = useContext(DataCenterContext)
  const [Data, setData] = useContext(ChosenDataContext);

  const [PCard, setPCard] = useState(false);
  const [MCard, setMCard] = useState(false);
  const [VCard, setVCard] = useState(false);
  const [CCard, setCCard] = useState(false);
  const [BCard, setBCard] = useState(false);

  // Info
  const PersonalInfo = t("BuilderInit.Personal.content")
  const MercaInfo = t("BuilderInit.Marketing.content");
  const VentasInfo = t("BuilderInit.Sales.content");
  const BlogInfo = t("BuilderInit.Blog.content");
  const ContactInfo = t("BuilderInit.Contact.content")

  const MakeSiteBox = (
    name: string,
    Translation: string,
    img: string,
    description: string,
    fontFamily: string,
    globalNumber: string
  ) => {
    let GlobalCard = false;

    const SelectCard = (name: string) => {
      switch (name) {
        case "Personal":
          setPCard(!PCard);
          break;
        case "Merca":
          setMCard(!MCard);
          break;
        case "Ventas":
          setVCard(!VCard);
          break;
        case "Contact":
          setCCard(!CCard);
          break;
        case "Blog":
          setBCard(!BCard);
          break;
        default:
      }
    };

    switch (name) {
      case "Personal":
        GlobalCard = PCard;
        break;
      case "Merca":
        GlobalCard = MCard;
        break;
      case "Ventas":
        GlobalCard = VCard;
        break;
      case "Contact":
        GlobalCard = CCard;
        break;
      case "Blog":
        GlobalCard = BCard;
        break;
      default:
    }

    return (
      <div
        onClick={() => SelectCard(name)}
        className={GlobalCard ? "optFlipped" : `${name} opt`}
      >
        <span
          className="CardFront"
          style={GlobalCard ? { opacity: 0 } : { opacity: 1 }}
        >
          <div className="imgContainer">
            <img alt="logoThingy" src={img}></img>
            <span className="ball"></span>
          </div>

          <span className="numberBox">
            <p>{globalNumber}</p>
          </span>

          <div className="TitleBox">
            <h2
              className={name}
              style={{
                fontFamily: fontFamily,
              }}
            >
              {Translation}
            </h2>

            <h4>{t("BuilderInit.ClickMe.SubTitle")}</h4>
          </div>
        </span>

        <span
          className="CardBack"
          style={GlobalCard ? { opacity: 1 } : { opacity: 0 }}
        >
          <p>{description}</p>

          <button
            style={
              GlobalCard ? { visibility: "visible" } : { visibility: "hidden" }
            }
            onClick={() => {

              if (name === "Contact"){

                setChosenPath("ClientSupport")

                History.push("/SupportCenter");
                
              } else {
                setData({ ...Data, SiteType: Translation });
                History.push("/PageBuilder/Root");
              }
            }}
          >
            {t("Choose.button")}
          </button>
        </span>
      </div>
    );
  };

  return (
    <motion.div
      className="BuilderPage"
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100vh" }}
    >
      <div className="Stage1">
        <h1 id="Stage1Title">{t("BuilderInit.Title")}</h1>

        <div className="Options">
          {MakeSiteBox(
            "Personal",
            t("BuilderInit.Personal.Title"),
            PersonalImg,
            PersonalInfo,
            "'Dancing Script', cursive",
            "01"
          )}

          {MakeSiteBox(
            "Merca",
            t("BuilderInit.Marketing.Title"),
            MercaImg,
            MercaInfo,
            "'Press Start 2P', cursive",
            "02"
          )}

          {MakeSiteBox(
            "Ventas",
            t("BuilderInit.Sales.Title"),
            VentasImg,
            VentasInfo,
            "'Berkshire Swash', cursive",
            "03"
          )}

          {MakeSiteBox(
            "Blog",
            t("BuilderInit.Blog.Title"),
            BlogImg,
            BlogInfo,
            "'Indie Flower', cursive",
            "04"
          )}

          {MakeSiteBox(
            "Contact",
            t("BuilderInit.Contact.Title"),
            ContactImg,
            ContactInfo,
            "'MuseoModerno', cursive",
            "05"
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default BuilderInit;
