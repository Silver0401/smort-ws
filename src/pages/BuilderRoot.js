import React, { useState, useEffect, useRef } from "react";

// Builder Sections (SubComponents)
import NavSection from "./../components/SubComponents/ChooseNav";
import ButtonsSection from "./../components/SubComponents/ChooseButtons";
import LoadersSection from "../components/SubComponents/ChooseLoader";
import StyleSection from "./../components/SubComponents/ChooseStyle";

const BuilderRoot = () => {

    const [sectionDisplayed, changeSection] = useState("Page Style")

    const ColorBoxPicked1 = useRef("#131E25")
    const ColorBoxPicked2 = useRef("#0EECC0")
    

    const ReturnSection = () => {

        let selected = (<div>none</div>)

        switch (sectionDisplayed){
            case "Page Style":
            selected = (<StyleSection/>)
                break;
            case "NavBar Style":
            selected = (<NavSection/>)
                break;
            case "Button Style":
                selected = (<ButtonsSection />)
                break;
            case "Loader Style":
            selected = (<LoadersSection/>)
                break;
            default:
                selected = (<div>Error</div>)
        }

        return(
            selected
        )
    }

  useEffect(() => {

    let root = document.documentElement

    ColorBoxPicked1.current.onchange = () => {
      root.style.setProperty("--ChosenColor1", ColorBoxPicked1.current.value)
      if (ColorBoxPicked1.current.value === "#000000") root.style.setProperty("--ChosenColor3", "#ffffff")
      if (ColorBoxPicked1.current.value === "#ffffff") root.style.setProperty("--ChosenColor3", "#000000")
    };
    ColorBoxPicked2.current.onchange = () => {
      root.style.setProperty("--ChosenColor2", ColorBoxPicked2.current.value)
    };

  })


    return (
      <div className="RootPage">
        <div className="RootBox">
          <div className="BuilderBox">
            <span className="Header">
              <h1>{`Choose a ${sectionDisplayed}`}</h1>

              <div className="ColorsBox">
                <div className="Colors">
                  <input ref={ColorBoxPicked1} type="color" defaultValue="#131E25" />
                  <input ref={ColorBoxPicked2} type="color" defaultValue="#0EECC0" />
                </div>
                <p>Color Picker</p>
              </div>
            </span>

            <div className="Display">{ReturnSection()}</div>

            <span className="Footer">
              <div className="Line"></div>

              <div
                onClick={() => changeSection("Page Style")}
                className={
                  sectionDisplayed === "Page Style" ? "OnStage" : "OffStage"
                }
              >
                <span></span>
                <p>Page Style</p>
              </div>
              <div
                onClick={() => changeSection("NavBar Style")}
                className={
                  sectionDisplayed === "NavBar Style" ? "OnStage" : "OffStage"
                }
              >
                <span></span>
                <p>NavBar Style</p>
              </div>
              <div
                onClick={() => changeSection("Button Style")}
                className={
                  sectionDisplayed === "Button Style" ? "OnStage" : "OffStage"
                }
              >
                <span></span>
                <p>Button Style</p>
              </div>
              <div
                onClick={() => changeSection("Loader Style")}
                className={
                  sectionDisplayed === "Loader Style" ? "OnStage" : "OffStage"
                }
              >
                <span></span>
                <p>Loader Style</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
}

export default BuilderRoot