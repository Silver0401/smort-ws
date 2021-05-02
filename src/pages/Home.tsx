import React, { useRef, useState } from "react";
import "react-on-scroll-animation/build/index.css";
import { motion } from "framer-motion";
// import anime from "animejs";

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
  const [onBlock1, setOnBlock1] = useState <boolean>(false)
  const [onFooter, setOnFooter] = useState <boolean>(false)
  const [animCounter, setAnimCounter] = useState <number>(0)
  // const [navColor, toggleNavColor] = useState <boolean>(false)

  const HomePageRef = useRef<HTMLTableSectionElement | null>(null);
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


  // const AnimateArrow = (direction: string) => {

  //   if (direction === "out"){

  //     anime({
  //       targets: ".Arrow",
  //       left: "5%",
  //       bottom: "5%",
  //       rotateZ: "180deg",
  //       duration: 1000,
  //       easing: "linear",
  //       background: "rgb(51, 162, 203)",
  //     });

  //   } else {

  //     anime({
  //       targets: ".Arrow",
  //       left: "45%",
  //       bottom: "10%",
  //       rotateZ: "0deg",
  //       duration: 1000,
  //       easing: "easeInOutQuad",
  //       background: "rgb(31, 28, 28)",
  //     });

  //   }
  // };

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
    const block1Position = Block1Ref.current?.offsetTop;
    const footerPosition = FooterRef.current?.offsetTop;
    // const HomePosition = HomePageRef.current?.offsetTop;

    // if (userPosition === 0){
    //   AnimateArrow("in");
    // } else if (userPosition !== 0) {
    //   AnimateArrow("out")
    // }


    if (block3Position) {
      if (userPosition > block3Position - 100) {

        setTimeout(() => {
          setOnBlock3(true)
        }, 500)
      }

    }

    if (block2Position) {
      if (userPosition > block2Position - 100) {

        // setTimeout(() => {
        setOnBlock2(true)
        // }, 2000)
      }
    }

    if (block1Position) {
      if (userPosition > block1Position - 100){
        
        setOnBlock1(true)
      }
    }

    if (footerPosition) {
      if (userPosition > footerPosition - 400){
        
        setOnFooter(true)
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

      <div
        className="HomeContainer"
        onScroll={(e) => ScrollStuff(e)}
      >
        <span className="Arrow">
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            viewBox="0 0 24 24"
          >
            <path d="M23.245 4l-11.245 14.374-11.219-14.374-.781.619 12 15.381 12-15.391-.755-.609z" />
          </svg>
        </span>

        <section className="HomeInit" id="Home" ref={HomePageRef}>
          <LeftBox />
          <RightBox />
        </section>

        <Block1 refData={Block1Ref} animInit={onBlock1} />

        <Block2
          refData={Block2Ref}
          animInit={onBlock2}
          animCounter={animCounter}
          setAnimCounter={(num: number) => setAnimCounter(num)}
        />

        <Block3 refData={Block3Ref} animInit={onBlock3} />

        <Footer refData={FooterRef} animInit={onFooter} />
      </div>
    </motion.div>
  );
}

export default HomePage



