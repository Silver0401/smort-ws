import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const NavBar = () => {

    const [NavBarOpened, setNavBar] = useState(false)
    const { t } = useTranslation()

    return (
      <nav className="NavBar">
        <div
          className={NavBarOpened ? "NavOn" : "Burger"}
          onClick={() => {
            setNavBar((prevstate) => !prevstate);
          }}
        >
          <span id="l1"></span>
          <span id="l2"></span>
          <span id="l3"></span>
        </div>

        <ul>
          <li>
            <a onClick={() => setNavBar(false)} href="#Home">
              {t("NavBar.Home")}
            </a>
          </li>
          <li>
            <a onClick={() => setNavBar(false)} href="#About">
              {t("NavBar.About")}
            </a>
          </li>
          <li>
            <a onClick={() => setNavBar(false)} href="#Build">
              {t("NavBar.Begin")}
            </a>
          </li>
          <li>
            <a onClick={() => setNavBar(false)} href="#Contacts">
              {t("NavBar.ContactUs")}
            </a>
          </li>
        </ul>
      </nav>
    );
}

export default NavBar