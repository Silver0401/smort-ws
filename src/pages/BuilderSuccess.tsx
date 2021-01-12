import React, { useContext, useEffect, useCallback, useRef } from 'react'
import emailjs from "emailjs-com"
import { ChosenDataContext } from "./../components/ChosenData"
import axios from "axios";
import lottie from "lottie-web";

export default function BuilderSuccess() {

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
      <div className="BuilderSuccessPage">
        <div className="TextSuccessBox">
          <h1>!Todo Listo!</h1>
          <p>
            Te acabamos de mandar un correo como comprobante de la fecha y del
            pago que acabas de realizar. Hemos recibido tu información y empezaremos
            a desarrollar tu sitio lo más pronto posible.

            Escucharas de nosotros en algunos días cuando hayamos terminado tu sitio.

            <br/>
            <br/>

            - El Equipo de Smort
          </p>
        </div>
        <div className="lottieContainer" ref={container}></div>
      </div>
    );
}
