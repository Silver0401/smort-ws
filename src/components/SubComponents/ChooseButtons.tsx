import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { ChosenDataContext } from "./../ChosenData";

const ChooseButtons = (props:any) => {

  let [Data, setData] = useContext(ChosenDataContext)
  const { t } = useTranslation()

  const CreateButton = (ButtonName:string) => {

    return (
      <div className="ButtonBox">
        <div className="Item">
          <button className={ButtonName}>
            <p>Click Me</p>
            <span className="liquid"></span>
          </button>
        </div>
        <div className="Info">
          <button
            onClick={() => {
              setData({ ...Data, ButtonStyle: ButtonName });

              setTimeout(() => {
                props.changeFunction(
                  "Loader Style",
                  4,
                  t("BuilderRoot.Builder.Step4.Title")
                );
                props.ScrollToSectionFunction("Instructions");
              }, 500);
            }}
            className="ChooseButton"
          >
            {t("Choose.button")}
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
