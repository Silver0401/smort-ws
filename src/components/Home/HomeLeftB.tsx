import React from "react";
import { useTranslation } from "react-i18next"
import { useHistory } from "react-router-dom";



const LeftBox = () => {

    const { t } = useTranslation();

    let History = useHistory();

    return (
      <div className="LeftBoxHome">

        <div className="Slogan">
          <h1>Hacemos páginas web de todo tipo, menos ordinarias.</h1>
          <h2>Sitios que capturan tu esencia</h2>
          <p>Desde 1500$ mxn</p>
        </div>

        <button
          onClick={() => History.push("/PageBuilder/Init")}
          className="CreateButton"
        >
          <p>{t("Begin.button")}</p>
          <span className="liquid"></span>
        </button>

        <span className="Arrow">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
          </svg>
        </span>
      </div>
    );
}

export default LeftBox