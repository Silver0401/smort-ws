import React from "react";
// import anime from "animejs";
import "react-on-scroll-animation/build/index.css";
import { motion } from "framer-motion";

// Components
import LeftBox from "./../components/Home/HomeLeftB";
import RightBox from "./../components/Home/HomeRightB";
import NavBar from "./../components/Home/NavBar";

import Block1 from "./../components/Home/Block1";
import Block2 from "./../components/Home/Block2";
import Block3 from "./../components/Home/Block3";
import Footer from "./../components/Home/Footer";


const HomePage = () => {


  // useEffect(() => {

  //   window.onload = () => {

  //     // CheckBrowser()
      
  //     // setTimeout(()=> {
  //     //   HomeAnimations()
  //     // }, 1900)

  //     console.log("coso")

  //   }

  // },[])


  return (
    <motion.div
      className="HomePage"
      style={{ overflowY: "scroll" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar />

      <section className="HomeInit" id="Home">
        <LeftBox />

        <RightBox />
      </section>

      <Block1 />

      <Block2 />

      <Block3 />

      <Footer />
    </motion.div>
  );
}

export default HomePage



