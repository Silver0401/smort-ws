import React, { useEffect, useCallback } from "react";
import SmortLogo from "./../../resources/SmortLogo.svg";
import anime from "animejs";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Block3 = (props:any) => {

    const History = useHistory()
    const { t } = useTranslation()
    var tl = anime.timeline({
      delay: 0,
      loop: true,
    });


    const InstructionsAnimation =  useCallback(() => {
      // Choose you style

      tl.add({
        targets: "#B3Arrow",
        duration: 4000,
        translateY: ["-6.25em", "0em", "6.25em", "0em"],
        opacity: 1,
      });

      tl.add(
        {
          targets: "#li1",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#33A2CB",
        },
        "-=6000"
      );

      tl.add(
        {
          targets: "#li4",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#ffffff",
        },
        "-=6000"
      );

      tl.add(
        {
          targets: ["#B3Arrow", "#svg1", "#svg3"],
          duration: 1000,
          easing: "easeInOutSine",
          opacity: [1, 0],
        },
        "+=50"
      );

      // 2) Write down the especifics

      tl.add(
        {
          targets: "#svg2",
          duration: 1000,
          scale: [1, 1.5],
          translateX: ["0em", "-3.75em"],
          easing: "easeInOutSine",
          translateY: ["0em", "1.8em"],
        },
        "+=50"
      );

      tl.add(
        {
          targets: "#li2",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#33A2CB",
        },
        "-=1050"
      );

      tl.add(
        {
          targets: "#li1",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#ffffff",
        },
        "-=1050"
      );

      tl.add(
        {
          targets: ".LinesBox",
          duration: 500,
          opacity: 1,
        },
        "-=50"
      );

      tl.add(
        {
          targets: "#Line1",
          easing: "easeInOutQuad",
          duration: 500,
          width: ["0%", "80%"],
        },
        "+=50"
      );

      tl.add(
        {
          targets: "#Line2",
          easing: "easeInOutQuad",
          duration: 500,
          width: ["0%", "50%"],
        },
        "+=10"
      );

      tl.add(
        {
          targets: "#Line3",
          easing: "easeInOutQuad",
          duration: 500,
          width: ["0%", "65%"],
        },
        "+=10"
      );

      tl.add(
        {
          targets: [".LinesBox", "#svg2"],
          duration: 500,
          opacity: [1, 0],
          easing: "easeInOutSine",
        },
        "+=500"
      );

      // 3) Wait for a couple of days

      tl.add(
        {
          targets: ".DayNightBox",
          duration: 500,
          opacity: [0, 1],
          easing: "easeInOutSine",
        },
        "+=200"
      );

      tl.add(
        {
          targets: "#li3",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#33A2CB",
        },
        "-=700"
      );

      tl.add(
        {
          targets: "#li2",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#ffffff",
        },
        "-=700"
      );

      tl.add(
        {
          targets: "#Sun",
          duration: 800,
          opacity: [0, 1],
          translateX: ["-12.5em", "0em"],
        },
        "+=200"
      );

      tl.add(
        {
          targets: "#Sun",
          duration: 800,
          opacity: [1, 0],
          translateX: ["0em", "12.5em"],
        },
        "+=100"
      );

      tl.add(
        {
          targets: "#Moon",
          duration: 800,
          opacity: [0, 1],
          translateX: ["-12.5em", "0em"],
        },
        "-=500"
      );

      tl.add(
        {
          targets: "#Moon",
          duration: 800,
          opacity: [1, 0],
          translateX: ["0em", "12.5em"],
        },
        "+=100"
      );


      tl.add(
        {
          targets: "#Sun",
          duration: 800,
          opacity: [0, 1],
          translateX: ["-12.5em", "0em"],
        },
        "-=500"
      );

      tl.add(
        {
          targets: ".DayNightBox",
          duration: 500,
          opacity: [1, 0],
          easing: "easeInOutSine",
        },
        "+=100"
      );

      // 4) Enjoy you website in every device

      // From Computer to Phone

      tl.add(
        {
          targets: "#svg2",
          duration: 50,
          scale: [1, 1.7],
          translateX: "0em",
          translateY: "1.75em",
        },
        "+=10"
      );

      tl.add(
        {
          targets: "#li4",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#33A2CB",
        },
        "-=60"
      );

      tl.add(
        {
          targets: "#li3",
          easing: "easeInOutQuad",
          duration: 500,
          color: "#ffffff",
        },
        "-=60"
      );

      tl.add(
        {
          targets: "#svg2",
          duration: 500,
          opacity: [0, 1],
          easing: "easeInOutSine",
        },
        "+=10"
      );

      tl.add(
        {
          targets: ".Screen",
          duration: 2000,
          rotateZ: "-90deg",
          translateX: "-3.1em",
        },
        "+=500"
      );

      tl.add(
        {
          targets: "#svg2",
          duration: 2000,
          rotateZ: "90deg",
          // translateY: "0em"
        },
        "-=2000"
      );

      tl.add(
        {
          targets: ".keyboard",
          duration: 1000,
          width: "0em",
          opacity: [1, 0],
          easing: "easeInOutQuad",
        },
        "-=2000"
      );

      tl.add(
        {
          targets: ".PhoneLine",
          duration: 1000,
          easing: "easeInOutSine",
          opacity: [0, 1],
        },
        "-=2000"
      );

      // From Phone to Monitor

      tl.add(
        {
          targets: ".Screen",
          duration: 1000,
          easing: "easeInOutSine",
          rotateZ: "-360deg",
          translateX: "0em",
        },
        "+=1000"
      );

      tl.add(
        {
          targets: "#svg2",
          duration: 1000,
          easing: "easeInOutSine",
          rotateZ: "-0deg",
        },
        "-=1000"
      );

      tl.add(
        {
          targets: ".RandomRectangle",
          duration: 500,
          easing: "easeInOutSine",
          opacity: [0, 1],
        },
        "-=1000"
      );

      tl.add(
        {
          targets: ".PhoneLine",
          duration: 500,
          easing: "easeInOutSine",
          opacity: [1, 0],
        },
        "-=1500"
      );

      // From Monitor to Computer

      tl.add(
        {
          targets: ".RandomRectangle",
          duration: 500,
          easing: "easeInOutSine",
          opacity: [1, 0],
        },
        "+=1000"
      );

      tl.add(
        {
          targets: ".keyboard",
          duration: 1000,
          width: "21.8em",
          opacity: [0, 1],
          easing: "easeInOutQuad",
        },
        "-=500"
      );

      tl.add(
        {
          targets: "#svg2",
          duration: 1000,
          easing: "easeInOutQuad",
          scale: 1,
          translateY: "0em",
        },
        "-=500"
      );

      // 23,350

      tl.add({
        targets: ["#svg1", "#svg3", "B3Arrow"],
        duration: 1000,
        easing: "easeInOutQuad",
        opacity: [0, 1],
      });
    
    }, [])

    useEffect(() => {
      if (props.animInit) {
        InstructionsAnimation();
        console.log("on block 3, buffering animation");
      }
    }, [props.animInit, InstructionsAnimation]);



    return (
      <section className="Block3" id="Build" ref={props.refData}>
        <span className="B3Title">
          <h1>{t("Block3.title")}</h1>
        </span>

        <div className="Instructions">
          <span className="B3TextSection">
            <ol>
              <li id="li1">
                <h1>1. {t("Block3.line1")}</h1>
              </li>
              <li id="li2">
                <h1>2. {t("Block3.line2")}</h1>
              </li>
              <li id="li3">
                <h1>3. {t("Block3.line3")}</h1>
              </li>
              <li id="li4">
                <h1>4. {t("Block3.line4")}</h1>
              </li>
            </ol>
          </span>
          <div className="B3AnimSection">
            <div className="B3AnimationBox">
              <div className="Screen">
                <span className="LogoContainer">
                  <img id="svg1" alt="coso" src={SmortLogo}></img>
                  <img id="svg2" alt="coso" src={SmortLogo}></img>
                  <img id="svg3" alt="coso" src={SmortLogo}></img>
                </span>

                <span className="ArrowContainer">
                  <svg
                    id="B3Arrow"
                    width="24"
                    height="24"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z" />
                  </svg>
                </span>

                <div className="LinesBox">
                  <div id="Line1"></div>
                  <div id="Line2"></div>
                  <div id="Line3"></div>
                </div>

                <div className="DayNightBox">
                  <svg
                    id="Sun"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.069 13h-4.069v-2h4.069c-.041.328-.069.661-.069 1s.028.672.069 1zm3.034-7.312l-2.881-2.881-1.414 1.414 2.881 2.881c.411-.529.885-1.003 1.414-1.414zm11.209 1.414l2.881-2.881-1.414-1.414-2.881 2.881c.528.411 1.002.886 1.414 1.414zm-6.312-3.102c.339 0 .672.028 1 .069v-4.069h-2v4.069c.328-.041.661-.069 1-.069zm0 16c-.339 0-.672-.028-1-.069v4.069h2v-4.069c-.328.041-.661.069-1 .069zm7.931-9c.041.328.069.661.069 1s-.028.672-.069 1h4.069v-2h-4.069zm-3.033 7.312l2.88 2.88 1.415-1.414-2.88-2.88c-.412.528-.886 1.002-1.415 1.414zm-11.21-1.415l-2.88 2.88 1.414 1.414 2.88-2.88c-.528-.411-1.003-.885-1.414-1.414zm2.312-4.897c0 2.206 1.794 4 4 4s4-1.794 4-4-1.794-4-4-4-4 1.794-4 4zm10 0c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z" />
                  </svg>
                  <svg
                    id="Moon"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 10.999c1.437.438 2.562 1.564 2.999 3.001.44-1.437 1.565-2.562 3.001-3-1.436-.439-2.561-1.563-3.001-3-.437 1.436-1.562 2.561-2.999 2.999zm8.001.001c.958.293 1.707 1.042 2 2.001.291-.959 1.042-1.709 1.999-2.001-.957-.292-1.707-1.042-2-2-.293.958-1.042 1.708-1.999 2zm-1-9c-.437 1.437-1.563 2.562-2.998 3.001 1.438.44 2.561 1.564 3.001 3.002.437-1.438 1.563-2.563 2.996-3.002-1.433-.437-2.559-1.564-2.999-3.001zm-7.001 22c-6.617 0-12-5.383-12-12s5.383-12 12-12c1.894 0 3.63.497 5.37 1.179-2.948.504-9.37 3.266-9.37 10.821 0 7.454 5.917 10.208 9.37 10.821-1.5.846-3.476 1.179-5.37 1.179z" />
                  </svg>
                </div>

                <div className="PhoneLine"></div>
              </div>

              <div className="keyboard"></div>

              <div className="RandomRectangle"></div>
            </div>

            <div className="CreateButtonBox">
              <button
                onClick={() => History.push("/PageBuilder/Init")}
                className="CreateButton"
              >
                <p>{t("Begin.button")}</p>
                <span className="liquid"></span>
              </button>
            </div>
          </div>
        </div>
      </section>
    );
}

export default Block3