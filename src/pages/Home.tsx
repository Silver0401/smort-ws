import React, {useEffect, useState} from "react";
import anime from "animejs";
import "react-on-scroll-animation/build/index.css";
// import Rosa from "react-on-scroll-animation";

// Components
import LeftBox from "./../components/Home/HomeLeftB";
import RightBox from "./../components/Home/HomeRightB";
import NavBar from "./../components/Home/NavBar";

import Block1 from "./../components/Home/Block1";
import Block2 from "./../components/Home/Block2";
import Block3 from "./../components/Home/Block3";
import Footer from "./../components/Home/Footer";


const HomePage = () => {

  const [showPage, setShowPage] = useState(false)

  useEffect(() => {

    function HomeAnimations(){
      
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

      anime({
          targets:".line",
          width: ["10%", "80%"],
          duration: 2000,
          direction: "alternate",
          loop: true
      })
    }
        
    function CheckBrowser(){
      // Opera 8.0+
      // var isOpera = (!!(window as any).opr && !!opr.addons) || !!(window as any).opera || navigator.userAgent.indexOf(' OPR/') >= 0;

      // Firefox 1.0+
      // var isFirefox = typeof InstallTrigger !== 'undefined';

      // Safari 3.0+ "[object HTMLElementConstructor]" 
      // var isSafari = /constructor/i.test((window as any).HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!(window as any)['safari'] || (typeof safari !== 'undefined' && safari.pushNotification));

      // Internet Explorer 6-11
      // var isIE = /*@cc_on!@*/false || !!document.documentMode;

      // Edge 20+
      // var isEdge = !isIE && !!(window as any).StyleMedia;

      // Chrome 1 - 79
      var isChrome = !!(window as any).chrome && (!!(window as any).chrome.webstore || !!(window as any).chrome.runtime);

      // Edge (based on chromium) detection
      // var isEdgeChromium = isChrome && (navigator.userAgent.indexOf("Edg") != -1);

      // Blink engine detection
      // var isBlink = (isChrome || isOpera) && !!(window as any).CSS;

      isChrome ? console.log("In chrome") : console.log("Not chrome")
      // var output = 'Detecting browsers by ducktyping:<hr>';
      // output += 'isFirefox: ' + isFirefox + '<br>';
      // output += 'isChrome: ' + isChrome + '<br>';
      // output += 'isSafari: ' + isSafari + '<br>';
      // output += 'isOpera: ' + isOpera + '<br>';
      // output += 'isIE: ' + isIE + '<br>';
      // output += 'isEdge: ' + isEdge + '<br>';
      // output += 'isEdgeChromium: ' + isEdgeChromium + '<br>';
      // output += 'isBlink: ' + isBlink + '<br>';
      // document.body.innerHTML = output;
    }

    function MoveLoader(){
      const Loader =  anime.timeline({
        easing: "easeInOutSine",
      })

      
      Loader.add({
        delay: 500,
        targets: ".MovingBox",
        duration: 2200,
        translateY: ["120%", "-120%"]
      })
      
      Loader.add({
        targets: ".Loader",
        duration: 750,
        height: "0px"
      }, "-=1700")

      Loader.add({
        targets:".LeftBox",
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["-100%","0%"]        
      },"-=1000")

      Loader.add({
        targets:".RightBox",
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["100%","0%"]
      },"-=1000")

      Loader.add({
        targets:".NavBar",
        duration: 2500,
        easing:"easeInOutElastic",
        opacity: [0,1],
        translateY: ["-100px","0px"]
      },"-=1500")

    }

    window.onload = () => {

      CheckBrowser()

      MoveLoader()
      
      setTimeout(()=> {
        setShowPage(true)
      },1000)

      setTimeout(()=> {
        HomeAnimations()
      }, 1900)

    }

  },[])


  return (
    <div className="HomePage" style={showPage ? {overflowY:"scroll"} : {overflowY:"hidden"}}>

      <NavBar/>

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
    
      <section className="HomeInit" id="Home">

        <LeftBox/>

        <RightBox/>

      </section>


      <Block1/>

      <Block2/>

      <Block3/>
  
      <Footer/>

    </div>
  );
}

export default HomePage



