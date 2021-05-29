import React from "react";
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom";


const LeftBox = () => {

    const { t } = useTranslation();
    let History = useHistory();


    return (
      <div className="LeftBoxHome">
        <div className="Slogan">
          <h1>{t("HomeLeft.Header1")}</h1>
          <h2>{t("HomeLeft.Header2")}</h2>
          <p>{t("HomeLeft.Header3")}</p>
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

export default LeftBox