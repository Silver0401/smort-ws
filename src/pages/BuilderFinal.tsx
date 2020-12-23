import React, { useContext, useState, useEffect } from "react"
import { ChosenDataContext } from "./../components/ChosenData"
import anime from "animejs";

const BuilderFinal = () => {
    
    const [Data] = useContext(ChosenDataContext)
    const [stepSelected, setStepSelected] = useState(1)

    
    const ToggledStyle = {
        backgroundColor: "black",
        color: "#33A2CB",
        transition: "background-color 500ms, color 500ms",
        textDecoration: "underline"
    } as React.CSSProperties
    const NotToggledStyle = {
        backgroundColor: "white",
        color: "black",
        transition: "background-color 500ms, color 500ms"
    } as React.CSSProperties;


    const ReturnSelectedSection = () => {

        let displayed = (
            <div>Default</div>
		  )
		  
		  const Checker = (DataType:string) => {

				let translation = "none"

				switch (DataType){
					case "SiteType":
						translation = "Tipo de Sitio"
						break;
					case "PageStyle":
						translation = "Estilo del Sitio"
						break;
					case "ButtonStyle":
						translation = "Estilo de Botones"
						break;
					case "NavBarStyle":
						translation = "Estilo de la Navegación"
						break;
					case "LoaderStyle":
						translation = "Estilo de Cargador"
						break;
					case "Color1":
						translation = "Color #1"
						break;
					case "Color2":
						translation = "Color #2"
						break;
					default:
						translation = "error"
						break;
				}

				return translation
		  }

        if (stepSelected === 2) displayed = (
          <div className="Step1Style">
            <div className="LeftBoxFinal">

					<span className="ResumeBox">
						{Object.keys(Data).map((property, elementId) => (
						<div className="ChosenBox" key={elementId}>
							<p>{Checker(property)}</p>
							<p id="TheData">{Data[property]}</p>
						</div>
						))}
					</span>

            </div>
            <div className="RightBoxFinal"></div>
          </div>
        ); 
        else if (stepSelected === 1) displayed = (
          <div className="Step2Style">
            <p>
              Ahora que tenemos tus diseños y estilos favoritos, necesitamos
              saber cual es el tema / producto / persona principal de la página,
              así como los detalles o ideas que quieras para tu sitio. LLena los
              siguientes espacios y recuerda que mientras más especifico y
              detallado seas en tus respuestas e información, mejor nos quedará
              tu sitio web.
            </p>

            <span className="InputBox1">
              <span>
                <label>Tema Principal de la Página</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu Nombre</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu Correo</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu teléfono</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>
            </span>

            <span className="InputBox2">
              <label>Detllaes y Especificaciones</label>
              <textarea
                defaultValue="Quiero que mi página tenga esto, quiero que mí sitio muestre
                estas cualidades de mi o de mi producto, etc."
              />
            </span>

            <span className="InputBox3">
              <label>Nombre para el Dominio de tu Sitio</label>

              <span>
                <label>Opción #1</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Opción #2</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Opción #3</label>
                <input type="text" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Extensión del Dominio</label>
                <select>
                  <option value=".com">.com</option>
                  <option value=".tech">.tech</option>
                  <option value=".store">.store</option>
                  <option value=".site">.site</option>
                  <option value=".space">.space</option>
                  <option value=".host">.host</option>
                  <option value=".fun">.fun</option>
                </select>
              </span>

              <p>Nota: El precio varia dependiendo de la extensión escogida</p>
            </span>
          </div>
        );
        else displayed = (<div>default2</div>)

        return (displayed)
    }

    // On Step Change FadeIn-Out


    useEffect(() => {
    const tl = anime.timeline({
        targets: ".StepsBody",
        easing: "easeInOutSine",
    });

    tl.add(
        {
        duration: 1000,
        opacity: 0,
        },
        "-=1000"
    );

    tl.add({
        duration: 1500,
        opacity: 1,
    });
    }, [stepSelected]);


    return (
      <div className="BuilderFinalPage">
        <h1 className="Header">Pasos Finales...</h1>

        <section className="Steps">
          <div className="StepsHeader">
            <h2
              className="Step1"
              onClick={() => setStepSelected(1)}
              style={stepSelected === 1 ? ToggledStyle : NotToggledStyle}
            >
              <p>1</p> Especificaciones
            </h2>
            <h2
              className="Step2"
              onClick={() => setStepSelected(2)}
              style={stepSelected === 2 ? ToggledStyle : NotToggledStyle}
            >
              <p>2</p> Resumen & Pago
            </h2>
          </div>
          <div className="StepsBody">{ReturnSelectedSection()}</div>
        </section>
      </div>
    );
}

export default BuilderFinal