import React, { useState, useEffect, useRef } from "react";

// Builder Sections (SubComponents)
import NavSection from "./../components/SubComponents/ChooseNav";
import ButtonsSection from "./../components/SubComponents/ChooseButtons";
import FontsSection from "./../components/SubComponents/ChooseFont";
import StyleSection from "./../components/SubComponents/ChooseStyle";

const BuilderRoot = (props) => {

    const [sectionDisplayed, changeSection] = useState("Page Style")

    const ColorBoxPicked1 = useRef("#1881C5")
    const ColorBoxPicked2 = useRef("#ffffff")

    // const [Chosen1, setChosen1] = useState("#1881C5");
    // const [Chosen2, setChosen2] = useState("#ffffff");
    

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
            case "Font Style":
            selected = (<FontsSection/>)
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
    };
    ColorBoxPicked2.current.onchange = () => {
      root.style.setProperty("--ChosenColor2", ColorBoxPicked2.current.value)
    };
    // root.style.setProperty("--ChosenColor2", props.pickedColors[1])

  })



    // console.log(props.Chosen)

    return (
      <div className="RootPage">
        <div className="RootBox">
          <div className="BuilderBox">
            <span className="Header">
              <h1>{`Choose a ${sectionDisplayed}`}</h1>

              <div className="ColorsBox">
                <div className="Colors">
                  <input ref={ColorBoxPicked1} type="color" defaultValue="#1881C5" />
                  <input ref={ColorBoxPicked2} type="color" defaultValue="#ffffff" />
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
                onClick={() => changeSection("Font Style")}
                className={
                  sectionDisplayed === "Font Style" ? "OnStage" : "OffStage"
                }
              >
                <span></span>
                <p>Font Style</p>
              </div>
            </span>
          </div>
        </div>
      </div>
    );
}

export default BuilderRoot