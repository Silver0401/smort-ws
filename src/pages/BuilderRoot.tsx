// Libraries
import React, { useState, useEffect, useRef, useContext } from "react";
import anime from "animejs";
import { ChosenDataContext } from "./../components/ChosenData";
import { motion } from "framer-motion";

// Builder Sections (SubComponents)
import NavSection from "./../components/SubComponents/ChooseNav";
import ButtonsSection from "./../components/SubComponents/ChooseButtons";
import LoadersSection from "../components/SubComponents/ChooseLoader";
import StyleSection from "./../components/SubComponents/ChooseStyle";

const BuilderRoot = () => {
  // Variables

  const [Data, setData] = useContext(ChosenDataContext);

  const [sectionDisplayed, changeSection] = useState<string>("Page Style");
  const [sectionTitle, setSectionTitle] = useState<string>(
    "Diseño para tu sitio"
  );
  const [sectionId, setSectionId] = useState<number>(1);

  const ColorBoxPicked1 = useRef<HTMLInputElement>(null);
  const ColorBoxPicked2 = useRef<HTMLInputElement>(null);

  const [ColorPicked1, setColorPicked1] = useState("#000000");
  const [ColorPicked2, setColorPicked2] = useState("#ffffff");
  const [colorBoxState, setColorBoxState] = useState(true);
  const [pageYFlow, setPageYFlow] = useState(false);

  const BuilderRef = useRef<HTMLDivElement>(null);
  const InstructionsRef = useRef<HTMLDivElement>(null);

  // Functions

  const ReturnSection = () => {
    let selected = <div>none</div>;

    switch (sectionDisplayed) {
      case "Page Style":
        selected = (
          <StyleSection
            changeFunction={(
              chosenSection: string,
              sectionId: number,
              sectionTitle: string
            ) => {
              changeSection(chosenSection);
              setSectionId(sectionId);
              setSectionTitle(sectionTitle);
            }}
            color1={ColorPicked1}
            color2={ColorPicked2}
            ScrollToSectionFunction={ (e:string) => ScrollToSection(e)}
          />
        );
        break;
      case "NavBar Style":
        selected = (
          <NavSection
            ScrollToSectionFunction={ (e:string) => ScrollToSection(e)}
            changeFunction={(
              chosenSection: string,
              sectionId: number,
              sectionTitle: string
            ) => {
              changeSection(chosenSection);
              setSectionId(sectionId);
              setSectionTitle(sectionTitle);
            }}
          />
        );
        break;
      case "Button Style":
        selected = (
          <ButtonsSection
            ScrollToSectionFunction={ (e:string) => ScrollToSection(e)}
            changeFunction={(
              chosenSection: string,
              sectionId: number,
              sectionTitle: string
            ) => {
              changeSection(chosenSection);
              setSectionId(sectionId);
              setSectionTitle(sectionTitle);
            }}
          />
        );
        break;
      case "Loader Style":
        selected = <LoadersSection />;
        break;
      default:
        selected = <div>Error</div>;
    }

    return selected;
  };

  const RemoveWelcomeBox = () => {
    anime({
      targets: ".WelcomeBox",
      duration: 1000,
      translateX: "-101%",
      easing: "easeInOutSine",
    });
  };

  const ScrollToSection = (section:string) => {

    if (section === "Builder"){

      setTimeout(() => {
        BuilderRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        })
      },900)
      

    }

    if (section === "Instructions"){

      InstructionsRef.current?.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });

      setTimeout(() => {
        BuilderRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
        });
      }, 1500)

    }
  }

  // Live Color Changer
  useEffect(() => {
    let root = document.documentElement;

    if (ColorBoxPicked1 && ColorBoxPicked1.current) {
      ColorBoxPicked1.current.onchange = () => {
        if (ColorBoxPicked1 && ColorBoxPicked1.current) {
          root.style.setProperty(
            "--ChosenColor1",
            ColorBoxPicked1.current.value
          );

          if (ColorBoxPicked1.current.value === "#000000")
            root.style.setProperty("--ChosenColor3", "#ffffff");
          if (ColorBoxPicked1.current.value === "#ffffff")
            root.style.setProperty("--ChosenColor3", "#000000");

          setColorPicked1(ColorBoxPicked1.current.value);
          setData({ ...Data, Color1: ColorBoxPicked1.current.value });
        }
      };
    }

    if (ColorBoxPicked2 && ColorBoxPicked2.current) {
      ColorBoxPicked2.current.onchange = () => {
        if (ColorBoxPicked2 && ColorBoxPicked2.current) {
          root.style.setProperty(
            "--ChosenColor2",
            ColorBoxPicked2.current.value
          );
          setColorPicked2(ColorBoxPicked2.current.value);
          setData({ ...Data, Color2: ColorBoxPicked2.current.value });
        }
      };
    }
  });

  //  On Section Display Change Animation
  useEffect(() => {
    const tl = anime.timeline({
      targets: ".BuilderBox",
      easing: "easeInOutSine",
    });

    tl.add(
      {
        duration: 1000,
        opacity: 0,
      },
      "-=1000"
    );

    tl.add({
      duration: 1500,
      opacity: 1,
    });
  }, [sectionDisplayed]);

  // In case no color is picked
  useEffect(() => {
    setData({
      ...Data,
      Color1: ColorBoxPicked1.current?.value,
      Color2: ColorBoxPicked2.current?.value,
    });
  }, []);

  // Rendered
  return (
    <motion.div
      className="RootPage"
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "-100vh" }}
      style={ pageYFlow ? {overflowY: "scroll"} : {overflowY:"hidden"} }
    >
      <div className="RootBox">
        <div className="InstructionsBox" ref={InstructionsRef}>
          <span className="Header">
            <h1>{`Escoge un ${sectionTitle}`}</h1>
          </span>

          <span className="Middler">
            <div className="Circle">
              <h1>{sectionId}</h1>
            </div>

            <svg
              style={
                sectionId === 1
                  ? { visibility: "hidden" }
                  : { visibility: "visible" }
              }
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fillRule="evenodd"
              clipRule="evenodd"
              viewBox="0 0 24 24"
            >
              <path d="M11 21.883l-6.235-7.527-.765.644 7.521 9 7.479-9-.764-.645-6.236 7.529v-21.884h-1v21.883z" />
            </svg>
          </span>

          <span className="Footer">
            <div
              onClick={() => {
                changeSection("Page Style");
                setSectionTitle("diseño para tu Sitio");
                setSectionId(1);
              }}
              className={
                sectionDisplayed === "Page Style" ? "OnStage" : "OffStage"
              }
            >
              <span></span>
            </div>
            <div
              onClick={() => {
                changeSection("NavBar Style");
                setSectionTitle("diseño para tu navegación");
                setSectionId(2);
              }}
              className={
                sectionDisplayed === "NavBar Style" ? "OnStage" : "OffStage"
              }
            >
              <span></span>
            </div>
            <div
              onClick={() => {
                changeSection("Button Style");
                setSectionTitle("diseño para tus botones");
                setSectionId(3);
              }}
              className={
                sectionDisplayed === "Button Style" ? "OnStage" : "OffStage"
              }
            >
              <span></span>
            </div>
            <div
              onClick={() => {
                changeSection("Loader Style");
                setSectionTitle("diseño para tu cargador");
                setSectionId(4);
              }}
              className={
                sectionDisplayed === "Loader Style" ? "OnStage" : "OffStage"
              }
            >
              <span></span>
            </div>
          </span>
        </div>

        <div className="BuilderBox" id="BuilderBox" ref={BuilderRef}>
          <div className="Display">{ReturnSection()}</div>

          <div
            className="ColorsBox"
            style={
              colorBoxState
                ? { transform: "translateX(0em)" }
                : { transform: "translateX(10em)" }
            }
          >
            <span
              className="ColorsButton"
              onClick={() => setColorBoxState((prevState) => !prevState)}
              style={
                colorBoxState
                  ? { transform: "rotate(0deg)" }
                  : { transform: "rotate(180deg)" }
              }
            >
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
              </svg>
            </span>

            <span className="colors">
              <input
                ref={ColorBoxPicked1}
                type="color"
                defaultValue="#000000"
              />
              <input
                ref={ColorBoxPicked2}
                type="color"
                defaultValue="#ffffff"
              />
            </span>
          </div>
        </div>
      </div>

      <div className="WelcomeBox">
        <div className="WelcomeText">
          <h1>Bienvenid@ a nuestro selector de estilos</h1>
          <h2>
            Simplemente haz click en el botón de empezar, y escoge los diseños y
            colores que más te gusten para tu página
          </h2>
        </div>

        <div className="ButtonsBox">
          <button
            className="StartButton"
            onClick={() => {
              RemoveWelcomeBox();
              setPageYFlow(true)
              setTimeout(() => {
                ScrollToSection("Builder")
              }, 1000)
            }}
          >
            Empezar
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default BuilderRoot;
