import React from "react";
import anime from "animejs";

// Components
import MainSection from "./../SubComponents/ChooseMain";


const BuilderStage2 = (props) => {

    let stateChecker = false

    if (props.chosenSite !== "none"){
      stateChecker = true

      anime({
        targets:".Stage2Box",
        easing: "easeInOutQuad",
        height: "90%",
        delay: 0,
        duration: 1000
      })
    }

    return (
      <div
        style={stateChecker ? { visibility: "visible" } : { visibility: "hidden" }}
        className="Stage2"
      >
        <div className="Stage2Box">
        
          <span className="Header"></span>
          
          <MainSection/>


          <span className="Footer"></span>

        </div>

      </div>
    );
}

export default BuilderStage2