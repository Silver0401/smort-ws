import React, { useContext, useEffect } from 'react'
import emailjs from "emailjs-com"
import { ChosenDataContext } from "./../components/ChosenData"
import axios from "axios";

export default function BuilderSuccess() {

    const [Data] = useContext(ChosenDataContext)

    const sendEmail = () => {

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

    }

    useEffect(() => {
        sendEmail()
    },[])


    return (
        <div className="BuilderSuccessPage">
            Success!
        </div>
    )
}
