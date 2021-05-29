import React, { useContext } from "react";
import { ChosenDataContext } from "./../ChosenData";
import { useHistory } from "react-router-dom";
import anime from "animejs";
import { useTranslation } from "react-i18next";

const ChooseLoader = () => {

    const [Data, setData] = useContext(ChosenDataContext)
    const History = useHistory()
    const { t } = useTranslation()

    const AnimatePageOut = () => {
      anime({
        targets: ".RootPage",
        translateY: "101%",
        duration: 1000,
        easing: "easeInOutSine"
      })

      setTimeout(() => {
        History.push("/PageBuilder/Final");
      }, 1200)

    }


    const CreateLoader = (LoaderName:string) => {

      let GearsActive = false

      if (LoaderName === "Gears") GearsActive = true

    return (
      <div className="LoaderBox">
        <div className="Item">
          <span className={`AnimBox ${LoaderName}`}>
            <div className="Box1">
              <svg
                style={
                  GearsActive
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                xmlns="http://www.w3.org/2000/svg"
                fill="black"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 13.616v-3.232c-1.651-.587-2.693-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.749-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.743-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 3.384c-2.762 0-5-2.239-5-5s2.238-5 5-5 5 2.239 5 5-2.238 5-5 5zm3-5c0 1.654-1.346 3-3 3s-3-1.346-3-3 1.346-3 3-3 3 1.346 3 3z" />
              </svg>
            </div>
            <div className="Box2">
              <svg
                style={
                  GearsActive
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M24 13.616v-3.232c-1.651-.587-2.694-.752-3.219-2.019v-.001c-.527-1.271.1-2.134.847-3.707l-2.285-2.285c-1.561.742-2.433 1.375-3.707.847h-.001c-1.269-.526-1.435-1.576-2.019-3.219h-3.232c-.582 1.635-.749 2.692-2.019 3.219h-.001c-1.271.528-2.132-.098-3.707-.847l-2.285 2.285c.745 1.568 1.375 2.434.847 3.707-.527 1.271-1.584 1.438-3.219 2.02v3.232c1.632.58 2.692.749 3.219 2.019.53 1.282-.114 2.166-.847 3.707l2.285 2.286c1.562-.743 2.434-1.375 3.707-.847h.001c1.27.526 1.436 1.579 2.019 3.219h3.232c.582-1.636.75-2.69 2.027-3.222h.001c1.262-.524 2.12.101 3.698.851l2.285-2.286c-.744-1.563-1.375-2.433-.848-3.706.527-1.271 1.588-1.44 3.221-2.021zm-12 2.384c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
              </svg>
            </div>
            <div className="Box3">
              <svg
                style={
                  GearsActive
                    ? { visibility: "visible" }
                    : { visibility: "hidden" }
                }
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M21.41 14.515c.237-.893 1.314-.889 2.59-1.208v-2.612c-.907-.227-2.352-.313-2.592-1.217l-.001-.006c-.239-.89.639-1.373 1.639-2.34l-1.306-2.263c-.911.26-2.195.903-2.863.237-.646-.643-.114-1.552.255-2.845l-2.263-1.306c-.649.671-1.446 1.878-2.348 1.637l-.006-.001c-.892-.238-.889-1.313-1.209-2.591h-2.612c-.228.911-.313 2.351-1.217 2.592l-.006.002c-.891.238-1.373-.64-2.34-1.64l-2.262 1.307c.26.911.903 2.195.237 2.863-.644.646-1.553.114-2.845-.255l-1.306 2.262c.67.649 1.878 1.446 1.637 2.348l-.001.006c-.238.893-1.317.89-2.59 1.208v2.612c.907.227 2.352.313 2.592 1.217l.002.006c.238.891-.64 1.373-1.64 2.34l1.306 2.263c.911-.26 2.195-.903 2.863-.237.646.643.114 1.552-.255 2.845l2.263 1.306c.649-.671 1.446-1.878 2.348-1.637l.006.001c.893.238.889 1.313 1.208 2.59h2.612c.228-.911.313-2.351 1.217-2.592l.006-.002c.891-.238 1.373.64 2.34 1.64l2.263-1.306c-.26-.909-.904-2.193-.237-2.863.643-.646 1.552-.114 2.845.255l1.306-2.263c-.671-.649-1.878-1.446-1.637-2.348l.001-.005zm-9.41 1.485c-2.209 0-4-1.791-4-4s1.791-4 4-4 4 1.791 4 4-1.791 4-4 4z" />
              </svg>
            </div>
            <div className="Box4">
              <span className="ExtraBox"></span>
            </div>
            <div className="Box5"></div>
            <div className="Box6"></div>
          </span>
        </div>
        <div className="Info">
          <button
            className="ChooseButton"
            onClick={() => {
              setData({ ...Data, LoaderStyle: LoaderName });
              AnimatePageOut();
            }}
          >
            {t("Choose.button")}
          </button>
          <p>{LoaderName}</p>
        </div>
      </div>
    );
  }


    return (
    <div className="Section">
      {CreateLoader("Orbital")}
      {CreateLoader("Atom")}
      {CreateLoader("Normal")}
      {CreateLoader("Squared-Dots")}
      {CreateLoader("Circled-Dots")}
      {CreateLoader("Gears")}
      {CreateLoader("Waves")}
      {CreateLoader("Liquid")}
      {CreateLoader("Split")}
      {CreateLoader("TicTacs")}
      {CreateLoader("Ondulations")}
    </div>
  )
};

export default ChooseLoader;
