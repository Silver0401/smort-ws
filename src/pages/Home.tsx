import React, { useRef, useState } from "react";
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

  const B3ref = useRef <HTMLTableSectionElement | null>(null)
  const [onBlock3, setOnBlock3] = useState <boolean>(false)

  const ScrollStuff = (e:any) => {

    const userPosition = e.target.scrollTop;
    const block3Position = B3ref.current?.offsetTop;

    if (block3Position) {
      if (userPosition > block3Position - 100) {
        setOnBlock3(true)
      }
    }
  }

  return (
    <motion.div
      className="HomePage"
      style={{ overflowY: "scroll" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onScroll={(e) => ScrollStuff(e)}
    >
      <NavBar />

      <section className="HomeInit" id="Home">

        <LeftBox />
        <RightBox />
        
      </section>

      <Block1 />

      <Block2 />

      <Block3 refData={B3ref} animInit={onBlock3} />

      <Footer />
    </motion.div>
  );
}

export default HomePage



