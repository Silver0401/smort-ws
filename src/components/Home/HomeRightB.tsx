import React from "react";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next"

const RightBox = () => {

    const { t } = useTranslation()
    let History = useHistory()

    return (
      <div className="RightBoxHome">
        <div className="LettersBox">
          <div className="sent1">
            <h1 className="text1">{t("HomeRight.line1")}</h1>
            <h1 className=" text1 ProWord">{t("HomeRight.line1.word")}</h1>
          </div>
          <div className="sent2">
            <h1 className="text2">{t("HomeRight.line2")}</h1>
            <h1 className=" text2 ProWord">{t("HomeRight.line2.word")}</h1>
          </div>
          <div className="sent3">
            <h1 className="text3">{t("HomeRight.line3")}</h1>
          </div>
        </div>

        <button
          onClick={() => History.push("/PageBuilder/Init")}
          className="CreateButton"
        >
          <p>{t("Begin.button")}</p>
          <span className="liquid"></span>
        </button>
      </div>
    );
}

export default RightBox