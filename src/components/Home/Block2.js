import React, { useEffect, useState } from "react";
import Rosa from "react-on-scroll-animation";
import anime from "animejs";
// import "react-on-scroll-animation/build/index.css";

const Block2 = () => {

    const [ReasonCounter, setReasonCounter] = useState(0)

    const ComplicatedReasons = {
        Reason:["Imágenes de Calidad", "Bases de Datos", "Un Proceso de Diseño", "Optimización de Recursos", "Actualizaciones Constantes"],

        SvgPaths:[
            
            "M1.859 6l-.489-2h21.256l-.491 2h-20.276zm1.581-4l-.439-2h17.994l-.439 2h-17.116zm20.56 16h-24l2 6h20l2-6zm-20.896-2l-.814-6h19.411l-.839 6h2.02l1.118-8h-24l1.085 8h2.019zm2.784-3.995c-.049-.555.419-1.005 1.043-1.005.625 0 1.155.449 1.185 1.004.03.555-.438 1.005-1.044 1.005-.605 0-1.136-.449-1.184-1.004zm7.575-.224l-1.824 2.68-1.813-1.312-2.826 2.851h10l-3.537-4.219z",
        
            "M18 15.422v.983c0 .771-1.862 1.396-4 1.396s-4-.625-4-1.396v-.983c.968.695 2.801.902 4 .902 1.202 0 3.035-.208 4-.902zm-4-1.363c-1.202 0-3.035-.209-4-.902v.973c0 .771 1.862 1.396 4 1.396s4-.625 4-1.396v-.973c-.968.695-2.801.902-4 .902zm0-5.86c-2.138 0-4 .625-4 1.396 0 .77 1.862 1.395 4 1.395s4-.625 4-1.395c0-.771-1.862-1.396-4-1.396zm0 3.591c-1.202 0-3.035-.209-4-.902v.977c0 .77 1.862 1.395 4 1.395s4-.625 4-1.395v-.977c-.968.695-2.801.902-4 .902zm-.5-9.79c-5.288 0-9.649 3.914-10.377 9h-3.123l4 5.917 4-5.917h-2.847c.711-3.972 4.174-7 8.347-7 4.687 0 8.5 3.813 8.5 8.5s-3.813 8.5-8.5 8.5c-3.015 0-5.662-1.583-7.171-3.957l-1.2 1.775c1.916 2.536 4.948 4.182 8.371 4.182 5.797 0 10.5-4.702 10.5-10.5s-4.703-10.5-10.5-10.5z",

            "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-6.373 16.199c3.809.315 2.446-3.73 5.97-3.769l1.526 1.274c.381 4.6-5.244 5.626-7.496 2.495zm8.293-3.396l-1.549-1.293c.457-2.18 1.854-4.188 3.267-5.51l3.362 2.804c-1.041 1.636-3.023 3.154-5.08 3.999z",

            "M24 19h-1v-2.2c-1.853 4.237-6.083 7.2-11 7.2-6.623 0-12-5.377-12-12h1c0 6.071 4.929 11 11 11 4.66 0 8.647-2.904 10.249-7h-2.249v-1h4v4zm-11.036 0h-1.886c-.34-.957-.437-1.571-1.177-1.878h-.001c-.743-.308-1.251.061-2.162.494l-1.333-1.333c.427-.899.804-1.415.494-2.163-.308-.74-.926-.839-1.878-1.177v-1.886c.954-.339 1.57-.437 1.878-1.178.308-.743-.06-1.248-.494-2.162l1.333-1.333c.918.436 1.421.801 2.162.494l.001-.001c.74-.307.838-.924 1.177-1.877h1.886c.34.958.437 1.57 1.177 1.877l.001.001c.743.308 1.252-.062 2.162-.494l1.333 1.333c-.435.917-.801 1.421-.494 2.161v.001c.307.739.915.835 1.878 1.178v1.886c-.953.338-1.571.437-1.878 1.178-.308.743.06 1.249.494 2.162l-1.333 1.333c-.92-.438-1.42-.802-2.157-.496-.746.31-.844.926-1.183 1.88zm-.943-4.667c-1.289 0-2.333-1.044-2.333-2.333 0-1.289 1.044-2.334 2.333-2.334 1.289 0 2.333 1.045 2.333 2.334 0 1.289-1.044 2.333-2.333 2.333zm-8.021-5.333h-4v-4h1v2.2c1.853-4.237 6.083-7.2 11-7.2 6.623 0 12 5.377 12 12h-1c0-6.071-4.929-11-11-11-4.66 0-8.647 2.904-10.249 7h2.249v1z",

            "M23 12c0 1.042-.154 2.045-.425 3h-2.101c.335-.94.526-1.947.526-3 0-4.962-4.037-9-9-9-1.706 0-3.296.484-4.654 1.314l1.857 2.686h-6.994l2.152-7 1.85 2.673c1.683-1.049 3.658-1.673 5.789-1.673 6.074 0 11 4.925 11 11zm-6.354 7.692c-1.357.826-2.944 1.308-4.646 1.308-4.963 0-9-4.038-9-9 0-1.053.191-2.06.525-3h-2.1c-.271.955-.425 1.958-.425 3 0 6.075 4.925 11 11 11 2.127 0 4.099-.621 5.78-1.667l1.853 2.667 2.152-6.989h-6.994l1.855 2.681zm-3.646-7.692v-6h-2v8h7v-2h-5z"

        ]
    }

    const ChangeReasonDisplayed = () => {

        setTimeout(() => {

            const tl = anime.timeline({
                targets:".AnimBoxB2",
                easing: "easeInOutQuad",
                delay: 0
            })

            tl.add({
                duration: 1000,
                width: ["0%","50%"]
            })

            tl.add({
                duration: 1000,
                width: ["50%","0%"]
            })
        }, 2000) 

        setTimeout(() => {

            if (ReasonCounter === ComplicatedReasons.Reason.length - 1) setReasonCounter(0)
            else setReasonCounter(prevCounter => prevCounter + 1)

        }, 3000)
    }

    useEffect(() => {
        ChangeReasonDisplayed()

    },[ReasonCounter])

    return(
        <section className="Block2">

            <Rosa animation="slide-right" easing="ease-out-back" once={true} duration={1000} className="LeftBoxB2">
                <h1>Crear un Sitio web Realmente Profesional es complicado</h1>

                <span className="TextAnimBox">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d={ComplicatedReasons.SvgPaths[ReasonCounter]}/></svg>
                    <h2>{ComplicatedReasons.Reason[ReasonCounter]}</h2>
                </span>

                <span className="AnimBoxB2">
                    <h4>Se necesita de</h4>
                    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"/></svg>
                </span>
            </Rosa>

            <Rosa animation="slide-left" easing="ease-out-back" once={true} duration={1000} className="RightBoxB2">

            <div className="TextBox">
                <h1>No pierdas tu tiempo, nosotros lo hacemos </h1>
                <h2>Todo </h2>
                <h1>por ti</h1>
            </div>

            </Rosa>

        </section>
    )
}

export default Block2