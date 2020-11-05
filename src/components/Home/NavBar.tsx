import React, { useState } from "react";

const NavBar = () => {

    const [NavBarOpened, setNavBar] = useState(false)

    return(
        <nav className="NavBar">
            <div className={NavBarOpened ? "NavOn" : "Burger"} onClick={() => {setNavBar(prevstate => !prevstate); console.log(NavBarOpened)}}>
                <span id="l1"></span>
                <span id="l2"></span>
                <span id="l3"></span>
            </div>

            <ul>
                <li>
                    <a onClick={() => setNavBar(false)} href="#Home">Home</a>
                </li>
                <li>
                    <a onClick={() => setNavBar(false)} href="#About">Acerca de</a>
                </li>
                <li>
                    <a onClick={() => setNavBar(false)} href="#Build">Comenzar</a>
                </li>
                <li>
                    <a onClick={() => setNavBar(false)} href="#Contacts">Contáctanos</a>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar