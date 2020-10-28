import React, {useEffect, useRef, useState} from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import anime from "animejs";

const Block2 = () => {

    // const BigBoxData = useRef()

    const [BGColor, setBGColor] = useState(["none", "none"])


    useEffect(() => {
        Aos.init({duration:2000})
    },[])

    const changeBGColor = (type) => {

        console.log(type)

        switch (type){
            case "Neumorphic":
                setBGColor(["#ffffff", "#ffffff"])
                break
            case "Animated":
                setBGColor(["#000000", "#ffffff"])
                break
            case "Minimalist":
                setBGColor(["#000000", "#ffffff"])
                break
            case "Parallax":
                setBGColor(["#000000", "#ffffff"])
                break
            case "3D-Style":
                setBGColor(["#000000", "#ffffff"])
                break
            default:
                setBGColor(["black", "blue"])
                break
        }

        console.log(BGColor)
        // thingy = `linear-gradient(to right, ${desiredColors[0]}, ${desiredColors[1]})`
    }

    return(
        <div className="Block2">
            <span className="QuestionsBox">
                <div className="Box1">
                    <h2>Diseños</h2>
                </div>
                <div className="Box2">
                    <h3>¿No te gusto ninguno? ¿Tienes un diseño en mente? Contáctanos</h3>
                    <span className="ThinkingBox"></span>
                </div>
            </span>
            <span style={{background: `linear-gradient(to left, ${BGColor[0]}, ${BGColor[1]})`}} className="DesignsBox">
                <div className="Types">
                    <h1 onClick={() => changeBGColor("Neumorphic")} >Neumorphic</h1>
                    <h1 onClick={() => changeBGColor("Animated")} >Animated</h1>
                    <h1 onClick={() => changeBGColor("Minimalist")} >Minimalist</h1>
                    <h1 onClick={() => changeBGColor("Parallax")} >Parallax</h1>
                    <h1 onClick={() => changeBGColor("3D-Style")} >3D-Style</h1>
                </div>
                <div className="TypeDisplayed"></div>
            </span>
        </div>
    )
}

export default Block2