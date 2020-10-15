import React, { useEffect } from "react";

const ChooseButtons = (props) => {

  const CreateButton = (ButtonName) => {

    return (
      <div className="Box">
        <div className="Item">
          <a  href="#" className={ButtonName}>
            <p>Click Me</p>
			      <span className="liquid"></span>
          </a>
        </div>
        <div className="Info">
          <button className="ChooseButton">Choose</button>
          <p>{ButtonName}</p>
        </div>
      </div>
    );
  }

  useEffect(() => {

    let root = document.documentElement

    root.style.setProperty("--ChosenColor1", props.pickedColors[0])
    root.style.setProperty("--ChosenColor2", props.pickedColors[1])
    
  })

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
