// Libraries
import React, { useState, useContext } from "react";
import { ChosenDataContext } from "./../components/ChosenData";
import { useHistory } from "react-router-dom";

// Svg's
import PersonalImg from "./../resources/person.svg";
import MercaImg from "./../resources/marketing.svg";
import VentasImg from "./../resources/sales.svg";
import BlogImg from "./../resources/type.svg";
// import EmpresarialImg from "./../resources/company.svg"

// Info
const PersonalInfo =
  "Cualquier persona tiene un curriculum escrito. Hazte destacar y lleva un currículum global, al cual cualquiera pueda accesar con un link. Una página Web personal es el curriculum del futuro, date a conocer, invierte en ti, invierte en tu futuro.";
const MercaInfo =
  "Estas buscando promocionar un equipo de personas? alguna marca o producto? algun videojuego? Invierte un poco y crea su propia página web, ésta, hace que se vea mucho mas profesional y de una calidad superior, dejando atrás a la competencia.";
const VentasInfo =
  "¿Siempre has querido tener tu negocio propio? ¡Es momento de intentarlo! Crea una pagina web de calidad profesional y de diseño sublime, donde puedas anunciar y vender tus productos.";
const BlogInfo =
  "Te interesa dar a conocer tus ideas al mundo, Te encanta escribir y leer y te fascina el diálogo con otras personas. Entonces necesitas un blog personalizado, que logre mostrar de manera fluida tus textos, con un diseño único personalizado.";
// const EmpresarialInfo = "¿Eres propietario de alguna institución, escuela o empresa, y necesitas modernizar la forma en que esta organizada? Inverte en un sistema web capaz de almacenar información, datos, perfiles, etc. De manera segura y con un diseño ergonómico."

const BuilderInit = () => {

  const [Data, setData] = useContext(ChosenDataContext);
  let History = useHistory();
  const [stageDisplay, setDisplay] = useState(false);

  const [PCard, setPCard] = useState(false);
  const [MCard, setMCard] = useState(false);
  const [VCard, setVCard] = useState(false);
  const [ECard, setECard] = useState(false);
  const [BCard, setBCard] = useState(false);

  const MakeSiteBox = (
    name: string,
    img: string,
    description: string,
    fontFamily: string,
    fontSize: string,
    globalNumber: string
  ) => {
    let title = name;
    let GlobalCard = false;
    if (name === "Merca") title = "Marketing";

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
        case "Empresarial":
          setECard(!ECard);
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
      case "Empresarial":
        GlobalCard = ECard;
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
            <h4 style={{ fontSize: "10px" }}>{globalNumber}</h4>
          </span>

          <div className="TitleBox">
            <h2
              style={{
                fontFamily: fontFamily,
                fontSize: fontSize,
              }}
            >
              {title}
            </h2>

            <h4>Haz Click para ver más</h4>
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
            onClick={() => StageTransition(name)}
          >
            Escoger
          </button>
        </span>
      </div>
    );
  };

  const StageTransition = (name: string) => {
    History.push("/PageBuilder/Root");
  };

  return (
    <div className="BuilderPage">
      <div
        style={stageDisplay ? { display: "none" } : { opacity: 1 }}
        className="Stage1"
      >
        <h1 id="Stage1Title">¿Que tipo de sitioWeb Buscas?</h1>

        <div className="Options">
          {MakeSiteBox(
            "Personal",
            PersonalImg,
            PersonalInfo,
            "'Dancing Script', cursive",
            "40px",
            "01"
          )}

          {MakeSiteBox(
            "Merca",
            MercaImg,
            MercaInfo,
            "'Press Start 2P', cursive",
            "25px",
            "02"
          )}

          {MakeSiteBox(
            "Ventas",
            VentasImg,
            VentasInfo,
            "'Berkshire Swash', cursive",
            "40px",
            "03"
          )}

          {MakeSiteBox(
            "Blog",
            BlogImg,
            BlogInfo,
            "'Indie Flower', cursive",
            "50px",
            "04"
          )}

          {/* {MakeSiteBox(
            "Empresarial",
            EmpresarialImg,
            EmpresarialInfo,
            "'Julius Sans One', sans-serif",
            "35px",
            "04"
          )} */}
        </div>
      </div>
    </div>
  );
};

export default BuilderInit;
