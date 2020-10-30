import React from "react";
import Rosa from "react-on-scroll-animation";
import "react-on-scroll-animation/build/index.css";

const Block2 = () => {


    return(
        <div className="Block2">

            <Rosa animation="slide-right" duration={1000} className="LeftBox">coso1</Rosa>

            <Rosa animation="fade-left" duration={1000} className="RightBox">coso2</Rosa>

        </div>
    )
}

export default Block2