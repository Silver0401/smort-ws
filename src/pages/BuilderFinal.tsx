import React, { useContext, useState, useEffect, useRef, useCallback } from "react"
import { ChosenDataContext } from "./../components/ChosenData"
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom"
import axios from "axios";
import SmortLogo from "./../resources/SmortImage.png"
import {ToastContainer, toast} from "react-toastify";
import anime from "animejs";
import { ChakraProvider, Button } from "@chakra-ui/react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { loadStripe } from "@stripe/stripe-js";
import { useTranslation } from "react-i18next";
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
const stripeTestPromise = loadStripe(
  "pk_test_51I4BzFIcDQemC5B8qzbZqMHpExN0NLlapc8NleVrmAn5dU9QYGrycfTRk2qJ0vQxaZky4l1S9NEyQG7nfQJkaGet00RLky3jdi"
);

// PayPal Id
const PayPalOptions = {
  "client-id":
    "Ae5wkLC1rJDKFRhA6orSFRlPHQ6FctDennrS2XBCyyCgliqkRIbhQ6SOwWDzMHSlQbREVFLI-ok4hU8h&currency=MXN",
};

// PayPal Test Id
const PayPalTestOptions = {
  "client-id":
    "ASjqQBWMi6NS8stVQOeWtSzdhqCNV6Il6IMPIInc1t_z24D6bLCLhuGu6Lc2_gWju2vQkp04xH2dP1V0&currency=MXN",
};




const StripeForm = (props:any) => {

  const [cardButtonLoading, setCardButtonLoading] = useState(false)
  const [Data, setData] = useContext(ChosenDataContext)
  const { t } = useTranslation();

  const stripe = useStripe();
  const elements = useElements();
  const History = useHistory()

  const MoneyIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path d="M22 7h-19v11h-1v-12h20v1zm-2-2h-19v11h-1v-12h20v1zm-6 6c-1.656 0-3 1.344-3 3s1.344 3 3 3 3-1.344 3-3-1.344-3-3-3zm.15 4.484v.315h-.3v-.299c-.311-.005-.632-.079-.898-.217l.135-.493c.287.11.669.229.968.162.345-.078.415-.433.034-.604-.279-.129-1.133-.242-1.133-.973 0-.409.312-.775.895-.855v-.319h.301v.305c.217.006.461.043.732.126l-.108.493c-.23-.08-.485-.154-.733-.139-.446.026-.486.413-.174.575.514.242 1.182.42 1.182 1.063 0 .516-.404.791-.901.86zm-10.15-7.484v12h20v-12h-20zm18 8.018c-.959.42-1.395 1.022-1.814 1.982h-12.372c-.419-.959-.855-1.562-1.814-1.982v-4.036c.959-.42 1.395-1.022 1.814-1.982h12.371c.42.959.855 1.562 1.814 1.982v4.036z" />
      </svg>
    );
  };

  const HandlePayRequest = async () => {
    setCardButtonLoading(true)

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

          if (props.masterIsTesting){

            axios.post(
                `${process.env.REACT_APP_NOT_BACKEND_URL}/DataCenter/PaymentProcedureTesting`,
                {
                  id: id,
                  amount: parseInt(`${Data.SiteChosenPrice}00`),
                  Name: Data.Name,
                  Email: Data.Email,
                }
              )
              .then((res) => {
                if (res.data === "Payment Successfull") {
                  console.log("placing in data base...");
  
                  axios.post(`${process.env.REACT_APP_NOT_BACKEND_URL}/DataCenter/PlaceOrder`,
                      {
                        Name: Data.Name,
                        Email: Data.Email,
                        Phone: Data.Phone,
                        Adress: Data.Adress,
  
                        SiteEspecifications: {
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
                          SiteStructure: Data.SiteStructure,
                        },
                        PaymentInfo: {
                          SiteChosenPrice: Data.SiteChosenPrice,
                          PaymentMethod: "Card",
                          TransactionId: id,
                        },
                      }
                    )
                    .then((res) => {
                      toast.success(t("Toaster.Success.PayCorrectMessage"));
                      setCardButtonLoading(false);
                      setData({ ...Data, MongoDBOrderId: res.data._id });
  
                      setTimeout(() => {
                        History.push("/PageBuilder/Success");
                      }, 3500);
                    })
                    .catch((err) => {
                      console.error(`FrontEnd Order Error: ${err}`);
                      toast.error(t("Toaster.Error.Generic"));
                      setCardButtonLoading(false);
                    });
                } else {
                  console.log("error placing in database");
                }
              })
              .catch((err) => {
                console.error(`FrontEnd Payment Error: ${err}`);
                toast.error(t("Toaster.Error.Generic"));
                setCardButtonLoading(false);
              });          
            
          } else {
            
            axios.post(
                `${process.env.REACT_APP_NOT_BACKEND_URL}/DataCenter/PaymentProcedure`,
                {
                  id: id,
                  amount: parseInt(`${Data.SiteChosenPrice}00`),
                  Name: Data.Name,
                  Email: Data.Email,
                }
              )
              .then((res) => {
                if (res.data === "Payment Successfull") {
                  console.log("placing in data base...");
  
                  axios.post(`${process.env.REACT_APP_NOT_BACKEND_URL}/DataCenter/PlaceOrder`,
                      {
                        Name: Data.Name,
                        Email: Data.Email,
                        Phone: Data.Phone,
                        Adress: Data.Adress,
  
                        SiteEspecifications: {
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
                          SiteStructure: Data.SiteStructure,
                        },
                        PaymentInfo: {
                          SiteChosenPrice: Data.SiteChosenPrice,
                          PaymentMethod: "Card",
                          TransactionId: id,
                        },
                      }
                    )
                    .then((res) => {
                      toast.success(t("Toaster.Success.PayCorrectMessage"));
                      setCardButtonLoading(false);
                      setData({ ...Data, MongoDBOrderId: res.data._id });
  
                      setTimeout(() => {
                        History.push("/PageBuilder/Success");
                      }, 3500);
                    })
                    .catch((err) => {
                      console.error(`FrontEnd Order Error: ${err}`);
                      toast.error(t("Toaster.Error.Generic"));
                      setCardButtonLoading(false);
                    });
                } else {
                  console.log("error placing in database");
                }
              })
              .catch((err) => {
                console.error(`FrontEnd Payment Error: ${err}`);
                toast.error(t("Toaster.Error.Generic"));
                setCardButtonLoading(false);
              });
          }          
        }

      } else {
        console.error(error)
        toast.error("error")
        setCardButtonLoading(false)
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
                fontSize: "17px",
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
      <ChakraProvider>
        <Button
          onClick={(e) => {
            e.preventDefault();
            HandlePayRequest();
          }}
          className="PayButton"
          size="lg"
          leftIcon={<MoneyIcon />}
          isLoading={cardButtonLoading}
        >
          {t("BuilderFinal.Tab3.Buttons.Pay")}
        </Button>
      </ChakraProvider>
    </form>
  );
};

const PayPalForm = (props:any) => {

  const [Data, setData] = useContext(ChosenDataContext);
  const [onProcessingPay, setOnProcessingPay] = useState(false)
  const History = useHistory();
  const { t } = useTranslation();

  const PlacePayPalOrder = () => {
    axios
      .post(
        `${process.env.REACT_APP_NOT_BACKEND_URL}/DataCenter/PlaceOrder`,
        {
          Name: Data.Name,
          Email: Data.Email,
          Phone: Data.Phone,
          Adress: Data.Adress,

          SiteEspecifications: {
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
            SiteStructure: Data.SiteStructure,
          },
          PaymentInfo: {
            SiteChosenPrice: Data.SiteChosenPrice,
            PaymentMethod: Data.PaymentMethod,
            TransactionId: Data.TransactionId,
          },
        }
      )
      .then((res) => {
        toast.success(t("Toaster.Success.PayCorrectMessage"));
        setData({ ...Data, MongoDBOrderId: res.data._id });
        setOnProcessingPay(false)

        setTimeout(() => {
          History.push("/PageBuilder/Success");
        }, 3500);
      })
      .catch((err) => {
        console.error(`FrontEnd Order Error: ${err}`);
        toast.error(t("Toaster.Error.Generic"));
        setOnProcessingPay(false);
      });
  };

  const CreateOrder = (data: Record<string, unknown>, actions: any) => {

    setOnProcessingPay(true);

    return actions.order
      .create({
        intent: "CAPTURE",
        purchase_units: [
          {
            description: "smort website",
            amount: {
              currency_code: "MXN",
              value: Data.SiteChosenPrice,
            },
          },
        ],
      })
  }

  return (
    <div className="PayPalInnerBox">
      {onProcessingPay ? (
        <Button
          className="PayPalLoader"
          isLoading={true}
          isFullWidth={true}
          loadingText={t("BuilderFinal.Tab3.Buttons.PaypalLoader")}
        ></Button>
      ) : null}

      <div className="PayPalButton">
        <PayPalButtons
          forceReRender={Data.SiteChosenPrice}
          onClick={() => props.onButtonClicked(true)}
          style={{
            layout: "horizontal",
            color: "gold",
            height: 50,
            tagline: false,
          }}
          createOrder={CreateOrder}
          onCancel={() => setOnProcessingPay(false)}
          onApprove={async (data: any, actions: any) => {
            const order = await actions.order.capture();
            Data.PaymentMethod = "PayPal";
            Data.TransactionId = order.id;
            PlacePayPalOrder();
          }}
          onError={() => {
            console.error("error");
            toast.error(t("Toaster.Error.Generic"));
            setOnProcessingPay(true);
          }}
        />
      </div>
    </div>
  );
}

const BuilderFinal: React.FC = () => {
    
    const { t } = useTranslation()
    const [Data,setData] = useContext(ChosenDataContext)
    const [stepSelected, setStepSelected] = useState(1)
    const [Price, setPrice] = useState <number>(0)
    const [pageStructure, setPageStructure] = useState <string>("vertical")
    const [tcbChecked, setTcbChecked] = useState(false)
    const [masterTesting, setMasterTesting] = useState(false)

    const NameRef = useRef<HTMLInputElement>(null)
    const EmailRef = useRef<HTMLInputElement>(null)
    const PhoneRef = useRef<HTMLInputElement>(null)

    const AdressRef = useRef<HTMLInputElement>(null)
    const DetailsRef = useRef<HTMLTextAreaElement>(null)
    const DomainOpt1 = useRef<HTMLInputElement>(null)
    const DomainOpt2 = useRef<HTMLInputElement>(null)
    const DomainOpt3 = useRef<HTMLInputElement>(null)
    const DomainExtension = useRef<HTMLSelectElement>(null)
    

    const ContainerAlignHorizontaly = {

      width: "100%",
      height: "50%",
      flexDirection: "row",
      transition: "all 500ms",
      justifyContent: "space-evenly"

    } as React.CSSProperties

    const ContainerAlignVertically = {
      
      width: "50%",
      height: "100%",
      flexDirection: "column",
      transition: "all 500ms",
      justifyContent: "center",
    } as React.CSSProperties;




    const SearchForMasterKeyWord = (secretParameter:any) => {
      if (secretParameter.target.value === "ShelasFriasTesting") {
        toast("On testing mode master");
        setMasterTesting(true);
      }
    };

    const PriceDecider = () => {
      switch (Data.SiteType) {
        case t("BuilderInit.Personal.Title"):
          setPrice(1500);
          break;
        case t("BuilderInit.Marketing.Title"):
          setPrice(1500);
          break;
        case t("BuilderInit.Sales.Title"):
          setPrice(3000);
          break;
        case t("BuilderInit.Blog.Title"):
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

        if (t("BuilderFinal.Tab3.Price.Currency") === "Pesos Mexicanos"){
          setPrice((prevPrice) => prevPrice + 200);
        } else {
          setPrice((prevPrice) => prevPrice / 20 + 10);
        }

      } else if (
        DomainExtension.current?.value === ".digital" ||
        DomainExtension.current?.value === ".live"
      ) {

        if (t("BuilderFinal.Tab3.Price.Currency") === "Pesos Mexicanos"){
          setPrice((prevPrice) => prevPrice + 100);
        } else {
          setPrice((prevPrice) => prevPrice / 20 + 5);
        }

      }
    };

    const chosenDate = () => {
      
      let numWeeks = 0
      let today = new Date();

      if (
        Data.SiteType === t("BuilderInit.Personal.Title") ||
        Data.SiteType === t("BuilderInit.Marketing.Title")
      ) {
        numWeeks = 1;
      } else if (
        Data.SiteType === t("BuilderInit.Sales.Title") ||
        Data.SiteType === t("BuilderInit.Blog.Title")
      ) {
        numWeeks = 2;
      } else {
        numWeeks = 0;
      }
        
      today.setDate(today.getDate() + numWeeks * 7);
      let dd = String(today.getDate()).padStart(2, "0");
      let mm = String(today.getMonth() + 1).padStart(2, "0");
      let yyyy = today.getFullYear();
      const DeliveryDate = `${dd} / ${mm} / ${yyyy}`;

      return DeliveryDate
    }

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
  
        Ftl.add(
          {
            targets: [".Price", ".ButtonsBox", "#ImportantP", ".TandCCheckBox"],
            duration: 500,
            opacity: 0,
          },
          "-=1000"
        );
  
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
            targets: [".Price", ".ButtonsBox", "#ImportantP", ".TandCCheckBox"],
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
          translation = t("BuilderFinal.Tab3.Bars.SiteType");
          break;
        case "PageStyle":
          translation = t("BuilderFinal.Tab3.Bars.SiteStyle");
          break;
        case "ButtonStyle":
          translation = t("BuilderFinal.Tab3.Bars.ButtonStyle");
          break;
        case "NavBarStyle":
          translation = t("BuilderFinal.Tab3.Bars.NavigationStyle");
          break;
        case "LoaderStyle":
          translation = t("BuilderFinal.Tab3.Bars.LoaderStyle");
          break;
        case "Color1":
          translation = "Color #1";
          break;
        case "Color2":
          translation = "Color #2";
          break;
        case "SiteStructure":
          translation = t("BuilderFinal.Tab3.Bars.Structure");
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
        AdressRef.current,
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
        return "error";
      }
      else return "All correct";

    }

    const NumberOfPagesDecider = (returner:string) => {

      // let thingy = "Ventas"

      if (returner === "Images"){
        
        switch (Data.SiteType) {

          case t("BuilderInit.Personal.Title"):
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
              </div>)

          case t("BuilderInit.Marketing.Title"):
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
              </div>)

          case t("BuilderInit.Sales.Title"):
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="BlogSvg" src={SalesSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
              </div>)

          case t("BuilderInit.Blog.Title"):
            return(
              <div
                className="InnerImageBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <img alt="Svg" id="HomeSvg" src={HomeSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="AboutSvg" src={AboutSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="BlogSvg" src={BlogSvg} className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
                <img alt="Svg" id="ContactSvg" src={ContactSvg}  className={pageStructure === "vertical" ? "AlignVertically" : "AlignHorizontally"} />
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
          
          case t("BuilderInit.Personal.Title"):
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement HomeSvg">{t("BuilderFinal.Tab2.Tags.Home")}</p>
                </div>
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement AboutSvg">{t("BuilderFinal.Tab2.Tags.About")}</p>
                </div>
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement ContactsSvg">{t("BuilderFinal.Tab2.Tags.Contact")}</p>
                </div>
              </div>
            );
          
          case t("BuilderInit.Marketing.Title"):
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement HomeSvg">{t("BuilderFinal.Tab2.Tags.Home")}</p>
                </div>
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement AboutSvg">{t("BuilderFinal.Tab2.Tags.About")}</p>
                </div>
                <div
                  className={pageStructure === "vertical" ? "Tag AlignVertically" : "Tag AlignHorizontally"}
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
                  <p className="TagPelement ContactsSvg">{t("BuilderFinal.Tab2.Tags.Contact")}</p>
                </div>
              </div>
            );
          
          case t("BuilderInit.Sales.Title"):
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement HomeSvg">
                    {t("BuilderFinal.Tab2.Tags.Home")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement AboutSvg">
                    {t("BuilderFinal.Tab2.Tags.About")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement BlogSvg">
                    {t("BuilderFinal.Tab2.Tags.Sales")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement ContactsSvg">
                    {t("BuilderFinal.Tab2.Tags.Contact")}
                  </p>
                </div>
              </div>
            );
          
          case t("BuilderInit.Blog.Title"):
            return (
              <div
                className="InnerTagsBox"
                style={
                  pageStructure === "vertical"
                    ? ContainerAlignVertically
                    : ContainerAlignHorizontaly
                }
              >
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement HomeSvg">
                    {t("BuilderFinal.Tab2.Tags.Home")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement AboutSvg">
                    {t("BuilderFinal.Tab2.Tags.About")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement BlogSvg">
                    {t("BuilderFinal.Tab2.Tags.Blog")}
                  </p>
                </div>
                <div
                  className={
                    pageStructure === "vertical"
                      ? "Tag AlignVertically"
                      : "Tag AlignHorizontally"
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
                  <p className="TagPelement ContactsSvg">
                    {t("BuilderFinal.Tab2.Tags.Contact")}
                  </p>
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
      if (returner === "Names"){

        switch (Data.SiteType){
          case t("BuilderInit.Personal.Title"):
            return t("BuilderFinal.Tab2.Names.Personal/Merca")

          case t("BuilderInit.Marketing.Title"):
            return t("BuilderFinal.Tab2.Names.Personal/Merca")

          case t("BuilderInit.Sales.Title"):
            return t("BuilderFinal.Tab2.Names.Sales");

          case t("BuilderInit.Blog.Title"):
            return t("BuilderFinal.Tab2.Names.Blog");

          default:
            return t("BuilderFinal.Tab2.Names.Personal/Merca");
        }

      }
    }

    useEffect(() => {

      const SaveDataReceived = () => {
        setData({
          ...Data,
          Name: NameRef.current?.value || "awaiting..",
          Email: EmailRef.current?.value || "awaiting..",
          Phone: PhoneRef.current?.value || 0,
          Adress: AdressRef.current?.value || "awaiting..",
          Details: DetailsRef.current?.value || "awaiting..",
          DomainOptions: [
            DomainOpt1.current?.value || "awaiting..",
            DomainOpt2.current?.value || "awaiting..",
            DomainOpt3.current?.value || "awaiting..",
          ],
          SiteChosenPrice: Price,
          DomainExtension: DomainExtension.current?.value || "awaiting..",
          SiteStructure: pageStructure,
        });
      };

      SaveDataReceived();

    }, [stepSelected])


    return (
      <motion.div
        className="BuilderFinalPage"
        initial={{ opacity: 0, y: "-100vh" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: "-100vh" }}
      >
        <h1 className="Header">{t("BuilderFinal.MainTitle")}...</h1>

        <section className="Steps">
          <div className="StepsHeader">
            <h2
              className={stepSelected === 1 ? "toggled" : "notToggled"}
              onClick={() => setStepSelected(1)}
            >
              <p>1</p> {t("BuilderFinal.Tab1.Title")}
            </h2>
            <h2
              className={stepSelected === 2 ? "toggled" : "notToggled"}
              onClick={() => {
                if (!masterTesting) {
                  if (DataScan() === "All correct") {
                    setStepSelected(2);
                  } else {
                    toast.error(t("Toaster.Error.Forms"));
                  }
                } else {
                  setStepSelected(2);
                }
                PriceDecider();
              }}
            >
              <p>2</p> {t("BuilderFinal.Tab2.Title")}
            </h2>
            <h2
              className={stepSelected === 3 ? "toggled" : "notToggled"}
              onClick={() => {
                if (!masterTesting) {
                  if (DataScan() === "All correct") {
                    setStepSelected(3);
                  } else {
                    toast.error(t("Toaster.Error.Forms"));
                  }
                } else {
                  setStepSelected(3);
                }
                PriceDecider();
              }}
            >
              <p>3</p> {t("BuilderFinal.Tab3.Title")}
            </h2>
          </div>

          <div className="StepsBody">
            <form
              className="Step1Style"
              onSubmit={(e) => {
                e.preventDefault();
                setStepSelected(2);
                PriceDecider();
              }}
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
              <p>{t("BuilderFinal.Tab1.InitialText")}</p>

              <span className="InputBox1">
                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Adress.Label")}</label>
                  <input
                    type="text"
                    placeholder={t("BuilderFinal.Tab1.Form.Adress.Input")}
                    ref={AdressRef}
                    required
                    name="Adress"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Name.Label")}</label>
                  <input
                    type="text"
                    placeholder={t("BuilderFinal.Tab1.Form.Name.Input")}
                    name="Name"
                    required
                    ref={NameRef}
                    onChange={(e: any) => SearchForMasterKeyWord(e)}
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Mail.Label")}</label>
                  <input
                    type="email"
                    placeholder="smortmc2@gmail.com"
                    name="email"
                    id="email"
                    required
                    ref={EmailRef}
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Phone.Label")}</label>
                  <input
                    type="tel"
                    placeholder="723-834-1231"
                    name="Phone"
                    pattern="\d*"
                    required
                    ref={PhoneRef}
                  />
                  <div className="BottomBox" />
                </span>
              </span>

              <span className="InputBox2">
                <label>{t("BuilderFinal.Tab1.Form.TextArea.Label")}</label>
                <textarea
                  placeholder={t("BuilderFinal.Tab1.Form.TextArea.Input")}
                  name="Detalles"
                  required
                  ref={DetailsRef}
                />
              </span>

              <span className="InputBox3">
                <label id="IB3title">
                  {t("BuilderFinal.Tab1.Form.Domain.Title")}
                </label>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Domain.Opt1.Label")}</label>
                  <input
                    ref={DomainOpt1}
                    name="DomainOpt #1"
                    type="text"
                    required
                    placeholder="www.smort"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Domain.Opt2.Label")}</label>
                  <input
                    ref={DomainOpt2}
                    name="DomainOpt #2"
                    type="text"
                    required
                    placeholder="www.smorter"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Domain.Opt3.Label")}</label>
                  <input
                    ref={DomainOpt3}
                    name="DomainOpt #3"
                    type="text"
                    required
                    placeholder="www.smortpages"
                  />
                  <div className="BottomBox" />
                </span>

                <span>
                  <label>{t("BuilderFinal.Tab1.Form.Select.Label")}</label>
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
                <p>{t("BuilderFinal.Tab1.Form.FooterText")}</p>
                <button className="SubmitInfo" type="submit">
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
            </form>

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
                    {t("BuilderFinal.Tab2.Components.Description.1.1")}"
                    {Data.SiteType}"
                    {t("BuilderFinal.Tab2.Components.Description.1.2")}
                    {NumberOfPagesDecider("Names")}
                    {t("BuilderFinal.Tab2.Components.Description.1.3")}
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
                    {t("BuilderFinal.Tab2.Components.Button1")}
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
                    {t("BuilderFinal.Tab2.Components.Button2")}
                  </button>

                  <button
                    className="NextButton"
                    onClick={() => {
                      if (DataScan() === "All correct") {
                        setStepSelected(3);
                      }
                      PriceDecider();
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
                        "SiteStructure",
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
                  <h2>{t("BuilderFinal.Tab3.Price.Currency")}</h2>
                  <h3>
                    {t("BuilderFinal.Tab3.Price.Date")}
                    {chosenDate()}
                  </h3>
                  <h4>dd/mm/{t("BuilderFinal.Tab3.Price.Year")}</h4>

                  <p>{t("BuilderFinal.Tab3.Price.Question")}</p>
                </div>

                <div className="ButtonsBox">
                  <button
                    onClick={() => {
                      if (tcbChecked) {
                        AnimateCardPayOptions("forward");
                      } else {
                        toast.error(t("Toaster.Error.TermsAndConditions"));
                      }
                    }}
                  >
                    {/* <p>{t("BuilderFinal.Tab3.Buttons.Card")}</p> */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19.662 11.156l.375 1.716h-1.344l.645-1.661.215-.567.109.512zm4.338-5.156v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2zm-17.146 8.971l2.549-5.929h-1.715l-1.585 4.051-.169-.823-.568-2.73c-.098-.377-.383-.489-.734-.502h-2.611l-.021.123c.635.154 1.203.376 1.701.651l1.44 5.16 1.713-.001zm4.823-5.934h-1.619l-1.012 5.941h1.619l1.012-5.941zm4.625 3.999c.006-.676-.425-1.19-1.359-1.614-.566-.275-.913-.458-.909-.736 0-.247.293-.511.927-.511.53-.008.913.107 1.212.228l.145.068.219-1.287c-.321-.121-.824-.25-1.451-.25-1.6 0-2.727.806-2.737 1.961-.009.854.805 1.33 1.419 1.614.63.291.842.477.839.737-.004.398-.503.58-.969.58-.648 0-.992-.09-1.524-.312l-.209-.095-.227 1.33c.378.166 1.078.31 1.804.317 1.702 0 2.807-.797 2.82-2.03zm5.698 1.944l-1.311-5.937h-1.251c-.388 0-.678.106-.848.493l-2.405 5.444h1.7l.341-.893 2.074.003.197.89h1.503z" />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.465 16.444c0 .193-.128.339-.319.339-.199 0-.321-.153-.321-.339 0-.186.122-.339.321-.339.19.001.319.147.319.339zm-6.814-.338c-.199 0-.321.153-.321.339 0 .186.122.339.321.339.19 0 .319-.146.319-.339 0-.193-.128-.339-.319-.339zm3.391-.011c-.164 0-.257.104-.281.257h.549c-.024-.164-.119-.257-.268-.257zm5.24.011c-.199 0-.321.153-.321.339 0 .186.122.339.321.339.19 0 .319-.146.319-.339 0-.193-.129-.339-.319-.339zm6.718-10.106v12c0 1.104-.896 2-2 2h-20c-1.104 0-2-.896-2-2v-12c0-1.104.896-2 2-2h20c1.104 0 2 .896 2 2zm-18.456 4.985c0 2.201 1.784 3.985 3.985 3.985.769 0 1.487-.219 2.096-.596-.967-.813-1.582-2.03-1.582-3.389s.616-2.576 1.582-3.389c-.609-.377-1.326-.596-2.096-.596-2.2 0-3.985 1.784-3.985 3.985zm2.346 5.324c0-.25-.159-.418-.416-.421-.135-.002-.274.04-.372.188-.073-.117-.188-.188-.35-.188-.113 0-.224.033-.31.157v-.131h-.23v1.058h.232v-.587c0-.184.102-.281.259-.281.153 0 .23.1.23.279v.589h.232v-.587c0-.184.106-.281.259-.281.157 0 .232.1.232.279v.589h.234v-.663zm1.297-.394h-.23v.128c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .324.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.058zm1.164.74c0-.186-.139-.283-.37-.317l-.108-.016c-.1-.013-.179-.033-.179-.104 0-.078.075-.124.201-.124.135 0 .266.051.33.091l.1-.186c-.111-.073-.263-.111-.432-.111-.268 0-.44.128-.44.339 0 .173.128.279.365.312l.108.016c.126.018.186.051.186.111 0 .082-.084.128-.241.128-.159 0-.274-.051-.352-.111l-.108.179c.126.094.285.138.458.138.305 0 .482-.144.482-.345zm1.025.263l-.066-.197c-.069.04-.144.06-.204.06-.115 0-.153-.071-.153-.177v-.478h.376v-.21h-.376v-.321h-.232v.321h-.215v.21h.215v.483c0 .246.095.392.367.392.1-.001.215-.032.288-.083zm1.173-.474c-.002-.33-.206-.556-.503-.556-.31 0-.527.226-.527.556 0 .336.226.556.542.556.159 0 .305-.04.434-.148l-.113-.17c-.089.071-.201.111-.308.111-.148 0-.283-.069-.317-.259h.786l.006-.09zm.908-.526l-.164-.029c-.133 0-.219.062-.279.155v-.128h-.228v1.058h.23v-.594c0-.175.075-.272.226-.272l.144.027.071-.217zm.308.526c0-.204.135-.336.319-.339.1 0 .19.033.277.095l.111-.186c-.115-.091-.221-.126-.381-.126-.341 0-.564.235-.564.556s.222.556.563.556c.159 0 .266-.035.381-.126l-.111-.186c-.086.062-.177.095-.277.095-.183-.002-.318-.135-.318-.339zm1.916-.529h-.23v.128c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .323.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.058zm.974.003l-.164-.029c-.133 0-.219.062-.279.155v-.128h-.228v1.058h.23v-.594c0-.175.075-.272.226-.272l.144.027.071-.217zm1.162-.428h-.23v.553c-.073-.095-.184-.155-.334-.155-.297 0-.529.232-.529.556 0 .323.232.556.529.556.151 0 .261-.06.334-.155v.128h.23v-1.483zm.639-4.505c0-2.201-1.785-3.985-3.985-3.985s-3.985 1.784-3.985 3.985c0 2.201 1.784 3.985 3.985 3.985s3.985-1.784 3.985-3.985z" />
                    </svg>
                  </button>

                  <div className="PayPalButtonBox">
                    <PayPalScriptProvider options={PayPalTestOptions}>
                      <PayPalForm
                        onButtonClicked={(b: boolean) => {
                          setTcbChecked(b);
                        }}
                      />
                    </PayPalScriptProvider>
                  </div>
                </div>

                <div className="TandCCheckBox">
                  <a
                    onClick={() =>
                      window.open("/SupportCenter#TandC", "_newtab")
                    }
                  >
                    {t("BuilderFinal.Tab3.Price.TermsAndConditions")}
                  </a>
                  <input
                    checked={tcbChecked}
                    onChange={() => setTcbChecked(!tcbChecked)}
                    type="checkbox"
                  />
                </div>

                <div
                  className="PaymentBox"
                  style={
                    stepSelected === 3
                      ? { visibility: "visible" }
                      : { visibility: "hidden" }
                  }
                >
                  <img alt="SmortLogo" id="BgTransSmortLogo" src={SmortLogo} />

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
                      <div
                        className="ProElements Elmts"
                        style={
                          masterTesting
                            ? { visibility: "hidden" }
                            : { visibility: "visible" }
                        }
                      >
                        <Elements stripe={stripePromise}>
                          <StripeForm masterIsTesting={masterTesting} />
                        </Elements>
                      </div>
                      <div
                        className="TestingElements Elmts"
                        style={
                          masterTesting
                            ? { visibility: "visible" }
                            : { visibility: "hidden" }
                        }
                      >
                        <Elements stripe={stripeTestPromise}>
                          <StripeForm masterIsTesting={masterTesting} />
                        </Elements>
                      </div>
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