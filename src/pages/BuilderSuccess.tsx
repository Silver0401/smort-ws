import React, { useContext, useEffect, useCallback, useRef } from 'react'
import emailjs from "emailjs-com"
import { ChosenDataContext } from "./../components/ChosenData"
import axios from "axios";
import lottie from "lottie-web";
import { motion } from "framer-motion";
import { useHistory } from "react-router-dom";

export default function BuilderSuccess() {

    const History = useHistory()
    const [Data] = useContext(ChosenDataContext)
    const container = useRef <HTMLDivElement> (null)

    const sendEmail = useCallback(() => {

        if (Data.MongoDBOrderId !== 0){

            axios.get(`/DataCenter/RetrieveAndSend/${Data.MongoDBOrderId}`)
                .then((res:any) => {

                    
                    emailjs
                    .send(
                        "service_h86ldsp",
                        "template_6p0vh3t",
                        {
                            Name: res.data.Name,
                            Email: res.data.Email,
                            Phone: res.data.Phone 

                        },
                        "user_TpS9YP6Fwr4okNaN6XOOH"
                    )
                    .then(
                        (response) => {
                        console.log("SUCCESS!", response.status, response.text);
                        },
                        (err) => {
                        console.log("FAILED...", err);
                        }
                    );

                })
                .catch(err => console.error(err))
        }

    }, [Data.MongoDBOrderId])

    useEffect(() => {
        sendEmail()
    },[sendEmail])

    useEffect(() => {

        if (container && container.current){
            lottie.loadAnimation({
                container: container.current,
                renderer: "svg",
                loop: true,
                autoplay: true,
                animationData: require("./../resources/Working.json"),
            })
        }


    },[])


    return (
      <motion.div
        className="BuilderSuccessPage"
        initial={{ opacity: 0, x: "100vw" }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: "100vw" }}
      >
        <div className="TextSuccessBox">
          <h1>!Todo Listo!</h1>
          <p>
            Te acabamos de mandar un correo como comprobante de la fecha y del
            pago que acabas de realizar. Hemos recibido tu información y
            empezaremos a desarrollar tu sitio lo más pronto posible. Escucharas
            de nosotros en algunos días cuando hayamos terminado tu sitio.
            <br />
            <br />- El Equipo de Smort
          </p>
        </div>
        <div className="lottieContainer" ref={container}></div>
        <button className="HomeButton" onClick={() => History.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 12.148l-1.361 1.465-10.639-9.883-10.639 9.868-1.361-1.465 12-11.133 12 11.148zm-4 1.749l-2 10.103h-12l-2-10.103 8-7.444 8 7.444zm-7 6.103c0-.552-.448-1-1-1s-1 .448-1 1 .448 1 1 1 1-.448 1-1zm1-5c0-1.105-.896-2-2-2s-2 .895-2 2 .896 2 2 2 2-.895 2-2z" />
          </svg>
        </button>
      </motion.div>
    );
}
