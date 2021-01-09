import React, { useContext, useState, useEffect, useRef, useCallback } from "react"
import { ChosenDataContext } from "./../components/ChosenData"
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom"
import axios from "axios";
import SmortLogo from "./../resources/SmortImage.png"
import {ToastContainer, toast} from "react-toastify";
import anime from "animejs";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements
} from "@stripe/react-stripe-js";


import HomeSvg from "./../resources/HomeIcon.svg";
import AboutSvg from "./../resources/AboutIcon.svg";
import SalesSvg from "./../resources/SalesIcon.svg";
import ContactSvg from "./../resources/ContactIcon.svg";
import BlogSvg from "./../resources/BlogIcon.svg";
import SvgBracket from "./../resources/BracketIcon.svg"


// Live Stripe Code
const stripePromise = loadStripe(
  "pk_live_51I4BzFIcDQemC5B8Uio6ufoEgunWRPaRpG0DMZ8n9wkI0Fga3Dkobv7KoS3AP4EnJf8UbDImgeI09diTHuWxBI9T00ZFbvEZL1"
);

// Test Stripe Code
// const stripePromise = loadStripe(
//   "pk_test_51I4BzFIcDQemC5B8qzbZqMHpExN0NLlapc8NleVrmAn5dU9QYGrycfTRk2qJ0vQxaZky4l1S9NEyQG7nfQJkaGet00RLky3jdi"
// );



const StripeForm : React.FC = () => {

  const stripe = useStripe();
  const elements = useElements();
  const [Data, setData] = useContext(ChosenDataContext)
  const History = useHistory()

  const HandlePayRequest = async () => {
    toast("Procesando...");

    if (stripe) {
      const {
        error,
        paymentMethod,
      } = await stripe.createPaymentMethod({
        type: "card",
        card: elements?.getElement(CardElement) || {
          token: "awaiting...",
        },
      });

      if (!error) {
        
        if (paymentMethod){

          const { id } = paymentMethod
          
          axios
            .post("/DataCenter/PaymentProcedure", {
              id: id,
              amount: parseInt(`${Data.SiteChosenPrice}00`),
              Name: Data.Name,
              Email: Data.Email
            })
            .then((res) => {

              if (res.data === "Payment Successfull"){

                console.log("placing in data base...")

                axios
                  .post("/DataCenter/PlaceOrder", {
                    Name: Data.Name,
                    Email: Data.Email,
                    Phone: Data.Phone,
  
                    SiteEspecifications: {
                      MainTheme: Data.MainTheme,
                      Details: Data.Details,
                      DomainOptions: Data.DomainOptions,
                      DomainExtension: Data.DomainExtension,
                    },
                    PageStyleDetails: {
                      SiteType: Data.SiteType,
                      PageStyle: Data.PageStyle,
                      ButtonStyle: Data.ButtonStyle,
                      NavBarStyle: Data.NavBarStyle,
                      LoaderStyle: Data.LoaderStyle,
                      Color1: Data.Color1,
                      Color2: Data.Color2,
                      SiteStructure: Data.SiteStructure
                    },
                    PaymentInfo: {
                      SiteChosenPrice: Data.SiteChosenPrice,
                      PaymentMethod: Data.PaymentMethod,
                      TransactionId: id,
                    },
                  })
                  .then((res) => {
                    toast.success("Operación Realizada con Éxito, redireccionando...")
                    setData({...Data, MongoDBOrderId: res.data._id})

                    setTimeout(() => {
                      History.push("/PageBuilder/Success");
                    }, 3500)
                  })
                  .catch((err) => {
                    console.error(`FrontEnd Order Error: ${err}`)
                    toast.error("Hubo un error en la operación")
                  });

              } else {
                console.log("error placing in database")
              }

            })
            .catch((err) => {
              console.error(`FrontEnd Payment Error: ${err}`)
              toast.error("Hubo un error en la operación  :(");
            });
          
        }

      } else {
        console.error(error)
      }
    }
  };

  return (
    <form>
      <div className="PayLine">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "20px",
                color: "#FFFFFF",
                "::placeholder": {
                  color: "#FFFFFF",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
      </div>
      <button
        onClick={(e) => {e.preventDefault();HandlePayRequest()}}
        className="PayButton"
      >
        Pagar
      </button>
    </form>
  );
};


const BuilderFinal: React.FC = () => {
    
    const [Data,setData] = useContext(ChosenDataContext)
    const [stepSelected, setStepSelected] = useState(1)
    const [Price, setPrice] = useState <number>(0)
    const [pageStructure, setPageStructure] = useState <string>("vertical")

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const PhoneRef = useRef<HTMLInputElement>(null)

    const MainThemeRef = useRef<HTMLInputElement>(null)
    const DetailsRef = useRef<HTMLTextAreaElement>(null)
    const DomainOpt1 = useRef<HTMLInputElement>(null)
    const DomainOpt2 = useRef<HTMLInputElement>(null)
    const DomainOpt3 = useRef<HTMLInputElement>(null)
    const DomainExtension = useRef<HTMLSelectElement>(null)

    const AlignHorizontaly = {

      width: "100%",
      height: "50%",
      flexDirection: "row",
      transition: "all 500ms",
      justifyContent: "space-evenly"

    } as React.CSSProperties

    const AlignVertically = {
      
      width: "50%",
      height: "100%",
      flexDirection: "column",
      transition: "all 500ms",
      justifyContent: "center",
    } as React.CSSProperties;

    const SaveDataReceived = useCallback(() => {

      setData({
        ...Data,
          Name: NameRef.current?.value || "awaiting..",
          Email: EmailRef.current?.value || "awaiting..",
          Phone: PhoneRef.current?.value || 0,
          MainTheme: MainThemeRef.current?.value || "awaiting..",
          Details: DetailsRef.current?.value || "awaiting..",
          DomainOptions: [
            DomainOpt1.current?.value || "awaiting..",
            DomainOpt2.current?.value || "awaiting..",
            DomainOpt3.current?.value || "awaiting..",
          ],
          SiteChosenPrice: Price,
          DomainExtension: DomainExtension.current?.value || "awaiting..",
          SiteStructure: pageStructure
      });
    },[Data, Price, pageStructure, setData])

    const PriceDecider = () => {
      switch (Data.SiteType) {
        case "Personal":
          setPrice(1500);
          break;
        case "Merca":
          setPrice(1500);
          break;
        case "Ventas":
          setPrice(3000);
          break;
        case "Blog":
          setPrice(2500);
          break;
        default:
          setPrice(0);
          break;
      }

      if (
        DomainExtension.current?.value === ".com" ||
        DomainExtension.current?.value === ".me"
      ) {
        setPrice((prevPrice) => prevPrice + 200);
      } else if (
        DomainExtension.current?.value === ".digital" ||
        DomainExtension.current?.value === ".live"
      ) {
        setPrice((prevPrice) => prevPrice + 100);
      }
    };

    const AnimateCardPayOptions = (direction:string) => {

      if (direction === "forward"){
        
        const Ftl = anime.timeline({
          easing:"easeInOutSine",
        })
  
        Ftl.add({
          targets:".RightBoxS3Final",
          duration: 1000,
          rotateY: "180deg",
        })
  
        Ftl.add({
          targets: [".Price", ".ButtonsBox", "#ImportantP"],
          duration: 500,
          opacity: 0
        },"-=1000")
  
        Ftl.add({
          targets:".PaymentBox",
          duration: 500,
          opacity: 1,
          height: "100%"
        },"-=500")

      } else {
       
        const Btl = anime.timeline({
          easing: "easeInOutSine",
        });

        Btl.add({
          targets: ".RightBoxS3Final",
          duration: 1000,
          rotateY: "0deg",
        });

        Btl.add(
          {
            targets: [".Price", ".ButtonsBox", "#ImportantP"],
            duration: 500,
            opacity: 1,
          },
          "-=1000"
        );

        Btl.add(
          {
            targets: ".PaymentBox",
            duration: 500,
            opacity: 0,
            height: "0%",
          },
          "-=1000"
        );

      }

    }

    const Checker = (DataType: string) => {
      let translation = "none";

      switch (DataType) {
        case "SiteType":
          translation = "Tipo de Sitio";
          break;
        case "PageStyle":
          translation = "Estilo del Sitio";
          break;
        case "ButtonStyle":
          translation = "Estilo de Botones";
          break;
        case "NavBarStyle":
          translation = "Estilo de la Navegación";
          break;
        case "LoaderStyle":
          translation = "Estilo de Cargador";
          break;
        case "Color1":
          translation = "Color #1";
          break;
        case "Color2":
          translation = "Color #2";
          break;
        case "SiteStructure":
          translation = "Estructura";
          break;
        default:
          translation = "error";
          break;
      }

      return translation;
    };

    const DataScan = () => {

      const PageRefs = [
        NameRef.current,
        EmailRef.current,
        PhoneRef.current,
        MainThemeRef.current,
        DetailsRef.current,
        DomainOpt1.current,
        DomainOpt2.current,
        DomainOpt3.current,
      ]

      let ErrorsCatched: Array<string> | undefined = []

      PageRefs.forEach((ref) => {
        if (ref?.value){}
        else {
          ErrorsCatched?.push(`${ref?.name}`);
        }
      })

      if (ErrorsCatched.length >= 1) {
        ErrorsCatched?.forEach((error: string) => {
          toast.error(`Error en ${error}, información no válida `);
        });
        return "error";
      }
      else return "All correct";

    }

    const NumberOfPagesDecider = (returner:string) => {

      // let thingy = "Merca"

      if (returner === "Images"){
        
        switch (Data.SiteType) {

          case "Personal":
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
              </div>)

          case "Merca":
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
              </div>)

          case "Ventas":
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="BlogSvg" src={SalesSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
              </div>)

          case "Blog":
            return (
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="BlogSvg" src={BlogSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} style={pageStructure === "vertical" ? {width: "220px", transition: "all 500ms"} : {width: "150px", transition: "all 500ms"}} />
              </div>
            );

          default:
            return(
            <div className="InnerImageBox">
                <h1>Error :(</h1>
            </div>)

        }

      }
      if (returner === "Tags"){
        
        switch (Data.SiteType){
          
          case "Personal":
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement HomeSvg">Home Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement AboutSvg">About Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement ContactsSvg">Contacts Component</p>
                </div>
              </div>
            );
          
          case "Merca":
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement HomeSvg">Home Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement AboutSvg">About Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement ContactsSvg">Contacts Component</p>
                </div>
              </div>
            );
          
          case "Ventas":
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement HomeSvg">Home Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement AboutSvg">About Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement BlogSvg">Sales Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement ContactsSvg">Contacts Component</p>
                </div>
              </div>
            );
          
          case "Blog":
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? AlignVertically
                    : AlignHorizontaly
                }
              >
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement HomeSvg">Home Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement AboutSvg">About Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement BlogSvg">Blog Component</p>
                </div>
                <div
                  className="Tag"
                  style={
                    pageStructure === "vertical"
                      ? AlignHorizontaly
                      : AlignVertically
                  }
                >
                  <img
                    alt="bracket"
                    src={SvgBracket}
                    style={
                      pageStructure === "horizontal"
                        ? { transform: "rotateZ(270deg)" }
                        : { transform: "rotateZ(180deg)" }
                    }
                  />
                  <p className="TagPelement ContactsSvg">Contacts Component</p>
                </div>
              </div>
            );
          
          default:
            return (
              <div
                className="InnerTagsBox"
              >
                <h1>Error :(</h1>
              </div>
            );
        }
      }
    }

    useEffect(() => {

      SaveDataReceived();

    }, [stepSelected, SaveDataReceived])


    return (
      <motion.div
        className="BuilderFinalPage"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100vh" }}
      >
        <h1 className="Header">Pasos Finales...</h1>

        <section className="Steps">
          <div className="StepsHeader">
            <h2
              className={stepSelected === 1 ? "toggled" : "notToggled"}
              onClick={() => setStepSelected(1)}
            >
              <p>1</p> Especificaciones
            </h2>
            <h2
              className={stepSelected === 2 ? "toggled" : "notToggled"}
              onClick={() => {

                if (DataScan() === "All correct"){
                  setStepSelected(2);
                }
                PriceDecider();
              }}
            >
              <p>2</p> Estructura del Sitio
            </h2>
            <h2
              className={stepSelected === 3 ? "toggled" : "notToggled"}
              onClick={() => {
                if (DataScan() === "All correct") {
                  setStepSelected(3);
                }
                PriceDecider();
              }}
            >
              <p>3</p> Resumen & Pago
            </h2>
          </div>

          <div className="StepsBody">
            <div
              className="Step1Style"
              style={
                stepSelected === 1
                  ? {
                      visibility: "visible",
                      opacity: 1,
                      transition: "opacity 500ms",
                    }
                  : {
                      visibility: "hidden",
                      opacity: 0,
                      transition: "opacity 500ms",
                    }
              }
            >
              <p>
                LLena los siguientes espacios y recuerda que mientras más
                especifico y detallado seas en tus respuestas e información,
                mejor nos quedará tu sitio web.
              </p>

              <span className="InputBox1">
                <span>
                  <label>Tema Principal de la Página</label>
                  <input
                    type="text"
                    placeholder="Portafiolio Personal de Pepe"
                    ref={MainThemeRef}
                    name="MainTheme"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Tu Nombre</label>
                  <input
                    type="text"
                    placeholder="Pepe Contreras"
                    name="Name"
                    ref={NameRef}
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Tu Correo</label>
                  <input
                    type="email"
                    placeholder="smortmc2@gmail.com"
                    name="Email"
                    ref={EmailRef}
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Tu teléfono</label>
                  <input
                    type="number"
                    placeholder="723 834 1231"
                    name="Phone"
                    ref={PhoneRef}
                  />
                  <div className="BottomBox" />
                </span>
              </span>

              <span className="InputBox2">
                <label>Detllaes y Especificaciones</label>
                <textarea
                  placeholder="Quiero que mi página tenga esto, quiero que mí sitio muestre
                estas cualidades de mi o de mi producto, etc."
                  name="Detalles"
                  ref={DetailsRef}
                />
              </span>

              <span className="InputBox3">
                <label>Nombre para el Dominio de tu Sitio</label>

                <span>
                  <label>Opción #1</label>
                  <input
                    ref={DomainOpt1} 
                    name="DomainOpt #1"
                    type="text" 
                    placeholder="www.smort" />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Opción #2</label>
                  <input
                    ref={DomainOpt2}
                    name="DomainOpt #2"
                    type="text"
                    placeholder="www.smorter"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Opción #3</label>
                  <input
                    ref={DomainOpt3}
                    name="DomainOpt #3"
                    type="text"
                    placeholder="www.smortpages"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>Extensión del Dominio</label>
                  <select ref={DomainExtension}>
                    <option value=".com">.com</option>
                    <option value=".tech">.tech</option>
                    <option value=".store">.store</option>
                    <option value=".site">.site</option>
                    <option value=".space">.space</option>
                    <option value=".host">.host</option>
                    <option value=".fun">.fun</option>
                    <option value=".me">.me</option>
                    <option value=".live">.live</option>
                    <option value=".digital">.digital</option>
                  </select>
                </span>
              </span>

              <span className="FooterBox">
                <p>
                  Nota: El precio varia dependiendo de la extensión escogida
                </p>
                <button
                  className="SubmitInfo"
                  onClick={() => {
                    if (DataScan() === "All correct") {
                      setStepSelected(2);
                      PriceDecider()
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M16 8v-4l8 8-8 8v-4h-5v-8h5zm-7 0h-2v8h2v-8zm-4.014 0h-1.986v8h1.986v-8zm-3.986 0h-1v8h1v-8z" />
                  </svg>
                </button>
              </span>
            </div>

            <div
              className="Step2Style"
              style={
                stepSelected === 2
                  ? {
                      visibility: "visible",
                      opacity: 1,
                      transition: "opacity 500ms",
                    }
                  : {
                      visibility: "hidden",
                      opacity: 0,
                      transition: "opacity 500ms",
                    }
              }
            >
              <span className="LeftBoxS2Final">
                <div className="Explanation">
                  <h2>{Data.SiteType}</h2>
                  <p>
                    Para las Sitios Web de tipo "{Data.SiteType}", ofrecemos una
                    estructura que consta de los siguientes componentes, los
                    cuales pueden ser puestos en una sola página, o en varias
                    páginas. Escoga la opción que más le guste.
                  </p>
                </div>
                <div className="NumberOfPages">
                  <button
                    onClick={() => setPageStructure("vertical")}
                    className={
                      pageStructure === "vertical" ? "Pressed" : "NotPressed"
                    }
                  >
                    <svg
                      width="24"
                      height="24"
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="evenodd"
                      clipRule="evenodd"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 0v24h-24v-24h24zm-2 22v-16h-20v16h20zm-1-15v14h-11v-14h11zm-14 13v1h-4v-1h4zm2-2v1h-6v-1h6zm8.633-2.615c-.148.049-.308-.031-.357-.179 0 0-1.047-.352-2.291.062l.818 1.269c.085.125.025.295-.116.342l-.555.185-.117.019c-.105 0-.206-.044-.278-.125l-1.123-1.238c-.611.192-1.302-.031-1.534-.606-.053-.133-.08-.273-.08-.415 0-.41.229-.829.727-1.073 2.491-1.223 2.889-2.587 2.889-2.587-.06-.184.077-.372.269-.372.118 0 .228.075.267.193l1.66 4.167c.049.149-.031.308-.179.358zm-8.633.615v1h-6v-1h6zm-2-2.902v1h-4v-1h4zm11.814.856l-.429-.183c.187-.443.205-.959.01-1.44-.196-.482-.566-.839-1.009-1.026l.181-.431c.887.375 1.433 1.24 1.433 2.164 0 .317-.064.629-.186.916zm-.744-.315l-.419-.178c.108-.256.119-.552.005-.83-.111-.277-.326-.483-.581-.59l.178-.421c.362.153.666.445.825.84.16.394.146.815-.008 1.179zm-9.07-2.639v1h-6v-1h6zm0-1.903v1h-6v-1h6zm0-1.097h-6v-1h6v1z" />
                    </svg>
                    Una página con todos los componentes
                  </button>
                  <button
                    onClick={() => setPageStructure("horizontal")}
                    className={
                      pageStructure === "horizontal" ? "Pressed" : "NotPressed"
                    }
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 9.844l-3.583 6.781-1.084-2.625c-4.05 2.278-5.11 5.961-5.333 10h-4c.189-5.147 1.358-10.246 7.75-13.875l-1.041-2.625 7.291 2.344zm-13.242 3.975c-1.098-1.341-2.558-2.586-4.508-3.694l1.041-2.625-7.291 2.344 3.583 6.781 1.084-2.625c2.018 1.135 3.293 2.62 4.093 4.323.412-1.533 1.046-3.052 1.998-4.504zm1.242-13.819l-5 5h3v5.267c.764.621 1.428 1.268 2.011 1.936.582-.666 1.227-1.316 1.989-1.936v-5.267h3l-5-5z" />
                    </svg>
                    Una página por cada componente
                  </button>

                  <button
                    className="NextButton"
                    onClick={() => {
                      if (DataScan() === "All correct") {
                        setStepSelected(3);
                      }
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M16 8v-4l8 8-8 8v-4h-5v-8h5zm-7 0h-2v8h2v-8zm-4.014 0h-1.986v8h1.986v-8zm-3.986 0h-1v8h1v-8z" />
                    </svg>
                  </button>
                </div>
              </span>
              <span className="RightBoxS2Final">
                <div
                  className="Layout"
                  style={
                    pageStructure === "vertical"
                      ? { flexDirection: "row" }
                      : { flexDirection: "column" }
                  }
                >
                  {NumberOfPagesDecider("Images")}

                  {NumberOfPagesDecider("Tags")}
                </div>
              </span>
            </div>

            <div
              className="Step3Style"
              style={
                stepSelected === 3
                  ? {
                      visibility: "visible",
                      opacity: 1,
                      transition: "opacity 500ms",
                    }
                  : {
                      visibility: "hidden",
                      opacity: 0,
                      transition: "opacity 500ms",
                    }
              }
            >
              <div className="LeftBoxS3Final">
                <span className="ResumeBox">
                  {Object.keys(Data)
                    .filter((property) => {
                      const ChosenItemsList = [
                        "SiteType",
                        "PageStyle",
                        "ButtonStyle",
                        "NavBarStyle",
                        "LoaderStyle",
                        "Color1",
                        "Color2",
                        "SiteStructure"
                      ];

                      return ChosenItemsList.includes(property);
                    })
                    .map((property, index) => (
                      <div className="ChosenBox" key={index}>
                        <p>{Checker(property)}</p>
                        <p id="TheData">{Data[property]}</p>
                      </div>
                    ))}
                </span>
              </div>

              <div className="RightBoxS3Final">
                <div className="Price">
                  <h1>{`$${Price}`}</h1>
                  <h2>Pesos Mexicanos</h2>
                </div>

                <div className="ButtonsBox">
                  <button
                    onClick={() => {
                      AnimateCardPayOptions("forward");
                    }}
                  >
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

                <p id="ImportantP">¿Con que deseas comprar tu sitio?</p>
                <div
                  className="PaymentBox"
                  style={
                    stepSelected === 3
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  <img alt="SmortLogo" src={SmortLogo} />

                  <div
                    className="FlipButton"
                    onClick={() => AnimateCardPayOptions("backward")}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M13.427 3.021h-7.427v-3.021l-6 5.39 6 5.61v-3h7.427c3.071 0 5.561 2.356 5.561 5.427 0 3.071-2.489 5.573-5.561 5.573h-7.427v5h7.427c5.84 0 10.573-4.734 10.573-10.573s-4.733-10.406-10.573-10.406z" />
                    </svg>
                  </div>

                  <div className="CardBox">
                    <span className="CardLine">
                      <Elements stripe={stripePromise}>
                        <StripeForm />
                      </Elements>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ToastContainer />
      </motion.div>
    );
}

export default BuilderFinal