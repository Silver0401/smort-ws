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
      
      const PriceDecider = () => {

        let Price:string

        switch (Data.SiteType){
          case "Personal":
            Price = "$1500"
            break;
          case "Merca":
            Price = "$1500"
            break;
          case "Ventas":
            Price = "$3500"
            break;
          case "Blog":
            Price = "$2500"
            break
          default:
            Price = "error"
            break;
        }

        return Price
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
            <div className="RightBoxFinal">
              <div className="Price">
                <h1>{PriceDecider()}</h1>
                <h2>Pesos Mexicanos</h2>
              </div>

              <div className="ButtonsBox">
                <button>
                  <p>Tarjeta</p>
                  <div className="liquid"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.662 11.156l.375 1.716h-1.344l.645-1.661.215-.567.109.512zm4.338-5.156v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2zm-17.146 8.971l2.549-5.929h-1.715l-1.585 4.051-.169-.823-.568-2.73c-.098-.377-.383-.489-.734-.502h-2.611l-.021.123c.635.154 1.203.376 1.701.651l1.44 5.16 1.713-.001zm4.823-5.934h-1.619l-1.012 5.941h1.619l1.012-5.941zm4.625 3.999c.006-.676-.425-1.19-1.359-1.614-.566-.275-.913-.458-.909-.736 0-.247.293-.511.927-.511.53-.008.913.107 1.212.228l.145.068.219-1.287c-.321-.121-.824-.25-1.451-.25-1.6 0-2.727.806-2.737 1.961-.009.854.805 1.33 1.419 1.614.63.291.842.477.839.737-.004.398-.503.58-.969.58-.648 0-.992-.09-1.524-.312l-.209-.095-.227 1.33c.378.166 1.078.31 1.804.317 1.702 0 2.807-.797 2.82-2.03zm5.698 1.944l-1.311-5.937h-1.251c-.388 0-.678.106-.848.493l-2.405 5.444h1.7l.341-.893 2.074.003.197.89h1.503z" />
                  </svg>
                </button>
                <button id="b2p">
                  <p>PayPal</p>
                  <div className="liquid"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 3h-20c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2v-14c0-1.104-.896-2-2-2zm-11.292 12.11h-1.33c-.122 0-.219-.103-.212-.224.024-.383.246-1.641 1.014-6.586.026-.173.173-.3.346-.3h2.448c1.31 0 2.277.769 2.01 2.147-.275 1.433-1.15 2.13-2.674 2.13l-.753.001c-.309.001-.423.118-.462.393l-.387 2.439zm5.069-3.314c-.282 1.473-1.249 1.982-2.483 1.982h-.191c-.151 0-.279.111-.303.263l-.268 1.697c-.023.151-.151.262-.302.262h-.912c-.13 0-.229-.116-.209-.244l.462-2.96.021-.019h.718c1.745 0 2.836-.873 3.158-2.523.271.272.366.626.366 1-.001.178-.022.361-.057.542z" />
                  </svg>
                </button>
              </div>
              <p>¿Con que deseas comprar tu sitio?</p>
            </div>
          </div>
        ); 
        else if (stepSelected === 1) displayed = (
          <div className="Step2Style">
            <p>
              LLena los siguientes espacios y recuerda que mientras más especifico y
              detallado seas en tus respuestas e información, mejor nos quedará
              tu sitio web.
            </p>

            <span className="InputBox1">
              <span>
                <label>Tema Principal de la Página</label>
                <input type="text" placeholder="Portafiolio Personal de Edgar / Tienda de Alimentos McDonalds / Blog Personal de Alejandra" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu Nombre</label>
                <input type="text" placeholder="Ismael Muñoz" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu Correo</label>
                <input type="email" placeholder="smortmc2@gmail.com" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Tu teléfono</label>
                <input type="tel" placeholder="723 834 1231" />
                <div className="BottomBox"/>
              </span>
            </span>

            <span className="InputBox2">
              <label>Detllaes y Especificaciones</label>
              <textarea
                placeholder="Quiero que mi página tenga esto, quiero que mí sitio muestre
                estas cualidades de mi o de mi producto, etc."
              />
            </span>

            <span className="InputBox3">
              <label>Nombre para el Dominio de tu Sitio</label>

              <span>
                <label>Opción #1</label>
                <input type="text" placeholder="www.smort" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Opción #2</label>
                <input type="text" placeholder="www.smorter" />
                <div className="BottomBox"/>
              </span>

              <span>
                <label>Opción #3</label>
                <input type="text" placeholder="www.smortpages" />
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