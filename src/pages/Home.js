import React, {useEffect, useState} from "react";
import anime from "animejs";
import "react-on-scroll-animation/build/index.css";
import Rosa from "react-on-scroll-animation";

// Components
import LeftBox from "./../components/Home/HomeLeftB.js";
import RightBox from "./../components/Home/HomeRightB.js";

import Block1 from "./../components/Home/Block1";
import Block2 from "./../components/Home/Block2";
import Block3 from "./../components/Home/Block3";
import Footer from "./../components/Home/Footer";


const HomePage = () => {

  const [showPage, setShowPage] = useState(false)

  function HomeAnimations(){
      
      const AnimTleyes = anime.timeline({
        easing: "easeOutElastic(1, .8)",
        targets: ["#eye", "#eye_2"],
        duration: 1000,
        loop: true
      });

      const AnimTLletters = anime.timeline({
          easing: "easeInOutQuad",
          duration: 1000,
          delay: 400,
          loop: true
      })

      AnimTLletters.add({
          targets: ".text1",
          translateY: ["300px", "0px"],
          opacity: [0,1]
          
      })
      AnimTLletters.add({
          targets: ".text2",
          translateY: ["300px","0px"],
          opacity: [0,1]
      })
      AnimTLletters.add({
          targets: ".text3",
          translateY: ["300px","0px"],
          opacity: [0,1]
      })
      AnimTLletters.add({
          targets: [".text1", ".text2", ".text3"],
          translateY: ["0px","-300px"],
          delay: 2000
      })
  
      AnimTleyes.add({
          translateX: -20,
      })
      AnimTleyes.add({
          translateY: -10,
      })
      AnimTleyes.add({
          translateX: 5,
          translateY: 5,
      })
      AnimTleyes.add({
          translateX: -20,
      })
      AnimTleyes.add({
          translateX: 0,
          translateY: 0,
      })
  
      anime({
          targets:".line",
          width: ["10%", "80%"],
          duration: 2000,
          direction: "alternate",
          loop: true
      })
  }
  
  useEffect(() => {

    // Aos.init({duration:2000})

    window.onload = () => {

      let DelayTime = 1000

      // const LoadingTimeline = anime.timeline({
      //   easing: "easeInOutQuad",
      // })

      anime({
        targets: ".MovingBox",
        easing: "easeInOutSine",
        delay: DelayTime,
        duration: 2200,
        translateY: ["120%", "-120%"]
      })

      anime({
        targets: ".Loader",
        easing: "easeInOutSine",
        delay: DelayTime + 500,
        duration: 750,
        height: "0px"
        // translateY: "-100%"
      })

      setTimeout(() => {
        setShowPage(true)
      },DelayTime + 1000)

      anime({
        targets:".LeftBox",
        delay: DelayTime + 1000,
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["-100%","0%"]
      })

      anime({
        targets:".RightBox",
        delay: DelayTime + 1000,
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["100%","0%"]
      })

    }

    HomeAnimations()

  },[])


  return (
    <div style={showPage ? {overflow:"visible"} : {overflow:"hidden"}} className="HomePage">

      <span className="Loader">
        <span className="box">
          <div className="AnimBox">
            <div className="CenterBall Ball"></div>
            <div className="MiddleBall Ball"></div>
            <div className="OuterBall Ball"></div>
            <div className="ExtraOuterBall Ball"></div>
          </div>
          <h1>Loading...</h1>
        </span>

        <div className="MovingBox"></div>

      </span>
    
      <LeftBox/>

      <RightBox/>

      <Block1/>

      <Block2/>

      <Block3/>
  
      <Footer/>

    </div>
  );
}

export default HomePage



