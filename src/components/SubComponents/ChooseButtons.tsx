import React from "react";

const ChooseButtons = (props:any) => {

  const CreateButton = (ButtonName:string) => {

    return (
      <div className="ButtonBox">
        <div className="Item">
          <a href="#" className={ButtonName}>
            <p>Click Me</p>
            <span className="liquid"></span>
          </a>
        </div>
        <div className="Info">
          <button
            onClick={() => props.changeFunction("Loader Style", 4, "diseño para tu cargador")}
            className="ChooseButton"
          >
            Escoger
          </button>
          <p>{ButtonName}</p>
        </div>
      </div>
    );
  }


  return (
    <div className="Section">
      {CreateButton("BoxFlip-Button")}
      {CreateButton("DLine-Button")}
      {CreateButton("Inverted-Button")}
      {CreateButton("Liquid-Button")}
      {CreateButton("FlipX-Button")}
      {CreateButton("Neon-Button")}
      {CreateButton("Gradient-Button")}
      {CreateButton("Glow-Button")}
      {CreateButton("ULine-Button")}
      {CreateButton("FlipY-Button")}
      {CreateButton("Hidden-Button")}
      {CreateButton("FlipZ-Button")}
      {CreateButton("Border-Button")}
      {CreateButton("Loading-Button")}
      {CreateButton("BorderFill-Button")}
    </div>
  );
};

export default ChooseButtons;
