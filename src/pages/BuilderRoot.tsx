// Libraries
import React, { useState, useEffect, useRef, useContext } from "react";
import {ChosenDataContext} from "./../components/ChosenData";
import anime from "animejs";

// Builder Sections (SubComponents)
import NavSection from "./../components/SubComponents/ChooseNav";
import ButtonsSection from "./../components/SubComponents/ChooseButtons";
import LoadersSection from "../components/SubComponents/ChooseLoader";
import StyleSection from "./../components/SubComponents/ChooseStyle";

const BuilderRoot = () => {

  // Variables

  const ChosenData = useContext(ChosenDataContext)

  const [sectionDisplayed, changeSection] = useState <string>("Page Style")
  const [sectionTitle, setSectionTitle] = useState <string> ("Diseño para tu sitio")
  const [sectionId, setSectionId] = useState <number> (1)

  const ColorBoxPicked1 = useRef<HTMLInputElement>(null);
  const ColorBoxPicked2 = useRef<HTMLInputElement>(null);

  const [ColorPicked1, setColorPicked1] = useState("#000000")
  const [ColorPicked2, setColorPicked2] = useState("#ffffff")

  // Functions

  const ReturnSection = () => {

      let selected = (<div>none</div>)

      switch (sectionDisplayed){
          case "Page Style":
            selected = (<StyleSection changeFunction={(chosenSection:string, sectionId:number, sectionTitle:string) => {changeSection(chosenSection); setSectionId(sectionId); setSectionTitle(sectionTitle)}} color1={ColorPicked1} color2={ColorPicked2} />)
            break;
          case "NavBar Style":
            selected = (<NavSection changeFunction={(chosenSection:string, sectionId:number, sectionTitle:string) => {changeSection(chosenSection); setSectionId(sectionId); setSectionTitle(sectionTitle)}}/>)
            break;
          case "Button Style":
            selected = (<ButtonsSection changeFunction={(chosenSection:string, sectionId:number, sectionTitle:string) => {changeSection(chosenSection); setSectionId(sectionId); setSectionTitle(sectionTitle)}} />)
            break;
          case "Loader Style":
            selected = (<LoadersSection changeFunction={(chosenSection:string, sectionId:number, sectionTitle:string) => {changeSection(chosenSection); setSectionId(sectionId); setSectionTitle(sectionTitle)}}/>)
            break;
          default:
            selected = (<div>Error</div>)
      }

      return(
          selected
      )
  }

  const RemoveWelcomeBox = () => {
    anime({
      targets:".WelcomeBox",
      duration: 1000,
      translateX: "-101%",
      easing: "easeInOutSine"
    })
  }

  // Live Color Changer

  useEffect(() => {

    let root = document.documentElement

    if (ColorBoxPicked1 && ColorBoxPicked1.current){
      
      ColorBoxPicked1.current.onchange = () => {

        if (ColorBoxPicked1 && ColorBoxPicked1.current){
          root.style.setProperty("--ChosenColor1", ColorBoxPicked1.current.value)

          if (ColorBoxPicked1.current.value === "#000000") root.style.setProperty("--ChosenColor3", "#ffffff")
          if (ColorBoxPicked1.current.value === "#ffffff") root.style.setProperty("--ChosenColor3", "#000000")

          setColorPicked1(ColorBoxPicked1.current.value)
        }

      };
    }
    
    if (ColorBoxPicked2 && ColorBoxPicked2.current){
      ColorBoxPicked2.current.onchange = () => {

        if (ColorBoxPicked2 && ColorBoxPicked2.current){

          root.style.setProperty("--ChosenColor2", ColorBoxPicked2.current.value)
          setColorPicked2(ColorBoxPicked2.current.value)

        }
      };
    }

  })


  //  On Section Display Change Animation

  useEffect(() => {

    const tl = anime.timeline({
      targets:".BuilderBox",
      easing: "easeInOutSine"
    })

    tl.add({
      duration: 1000,
      opacity: 0,
    },"-=1000");

    tl.add({
      duration: 1500,
      opacity: 1,
    });

  },[sectionDisplayed])

  // Rendered

    return (
      <div className="RootPage">
        <div className="RootBox">
          <div className="InstructionsBox">
            <span className="Header">
              <h1>{`Escoge un ${sectionTitle}`}</h1>

              {/* <div className="ColorsBox">
                <div className="Colors">
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
                </div>
                <p>Colores</p>
              </div> */}
            </span>

            <span className="Middler">
                <div className="Circle">
                  <h1>{sectionId}</h1>
                </div>
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

          <div className="BuilderBox">
            <div className="Display">{ReturnSection()}</div>
          </div>
        </div>

        <div className="WelcomeBox">

          <div className="WelcomeText">
            <h1>Bienvenid@ a nuestro selector de estilos</h1>
            <h2>Simplemente haz click en el botón de empezar, y escoge los diseños y colores que más te gusten para tu página</h2>
            <h2>Si ya tienes un código para una página haz click en el bóton de código</h2>
          </div>

          <div className="ButtonsBox">
            <button className="StartButton" onClick={RemoveWelcomeBox}>Empezar</button>
            <button className="CodeButton">Código</button>
          </div>

        </div>
      </div>
    );
}

export default BuilderRoot