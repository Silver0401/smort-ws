import React, { useEffect } from "react";
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

    window.onload = () => {

      CheckBrowser()
      
      setTimeout(()=> {
        HomeAnimations()
      }, 1900)

    }

  },[])


  return (
    <div className="HomePage" style={{overflowY:"scroll"}}>

      <NavBar/>
    
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



