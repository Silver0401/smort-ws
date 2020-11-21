import React from "react";

const RightBox = () => {
    return(

        <div className="RightBox">
            <div className="LettersBox">
                <div className="sent1">
                <h1 className="text1">¿Buscas un Sitio Web </h1><h1 className=" text1 ProWord" >Profesional?</h1>
                </div>
                <div className="sent2">
                <h1 className="text2">Dejáselo a los </h1><h1 className=" text2 ProWord" >Profesionales</h1>
                </div>
                <div className="sent3">
                <h1 className="text3">!Consigue el tuyo ya!</h1>
            </div>
        </div>

        <button onClick={() => window.location.href = "/PageBuilder/Init"} className="CreateButton">
            <p>Conseguir mi sitio</p>
            <span className="liquid"></span>
        </button>
        </div>
    
    )
}

export default RightBox