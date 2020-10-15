import React from "react";
import anime from "animejs";

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

      // setTimeout(() => {
      //   window.location = "/PageBuilder/Root"
      // }, 1200)

    }

    return (
      <div
        style={stateChecker ? { visibility: "visible" } : { visibility: "hidden" }}
        className="Stage2"
      >
        <div className="Stage2Box"></div>

      </div>
    );
}

export default BuilderStage2