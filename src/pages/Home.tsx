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

  const [onBlock3, setOnBlock3] = useState <boolean>(false)
  const [onBlock2, setOnBlock2] = useState <boolean>(false)
  const [animCounter, setAnimCounter] = useState <number>(0)
  // const [navColor, toggleNavColor] = useState <boolean>(false)

  const HomePageRef = useRef <HTMLDivElement> (null)

  const Block1Ref = useRef <HTMLTableSectionElement> (null)
  const Block2Ref = useRef <HTMLTableSectionElement> (null)
  const Block3Ref = useRef <HTMLTableSectionElement | null>(null)
  const FooterRef = useRef <HTMLTableSectionElement | null>(null)

  const HomeBlockRefs = {
    Home: HomePageRef,
    About: Block1Ref,
    Begin: Block3Ref,
    Contacts: FooterRef,

  }

  const ScrollTo = (sectionRef:any) => {
  
    sectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  }

  const ScrollStuff = (e:any) => {

    const userPosition = e.target.scrollTop;
    const block3Position = Block3Ref.current?.offsetTop;
    const block2Position = Block2Ref.current?.offsetTop;

    if (block3Position) {
      if (userPosition > block3Position - 100) {
        setOnBlock3(true)
      }

    }

    if (block2Position) {
      if (userPosition > block2Position - 100) {

        setTimeout(() => {
          setOnBlock2(true)
        }, 2000)
      }
    }
  }


  return (
    <motion.div
      className="HomePage"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <NavBar scrollTo={(loc: any) => ScrollTo(loc)} refs={HomeBlockRefs} />

      <div className="HomeContainer" onScroll={(e) => ScrollStuff(e)}>
        <section className="HomeInit" id="Home" ref={HomePageRef}>
          <LeftBox />
          <RightBox />
        </section>

        <Block1 refData={Block1Ref} />

        <Block2
          refData={Block2Ref}
          animInit={onBlock2}
          animCounter={animCounter}
          setAnimCounter={(num: number) => setAnimCounter(num)}
        />

        <Block3 refData={Block3Ref} animInit={onBlock3} />

        <Footer refData={FooterRef} />
      </div>
    </motion.div>
  );
}

export default HomePage



