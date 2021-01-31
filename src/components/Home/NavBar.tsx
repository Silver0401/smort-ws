import React, { useState } from "react";
import { useTranslation } from "react-i18next";

import EngLogo from "./../../resources/us.svg";
import SpanLogo from "./../../resources/mex.svg";

const NavBar = (props:any) => {

    const [NavBarOpened, setNavBar] = useState(false)

    const [t, i18n] = useTranslation();
    const [chosenLang, setChosenLang] = useState("sp");

    const ChangeLang = (chosen: string) => {
      setChosenLang(chosen);
      i18n.changeLanguage(chosen);
    };

    return (
      <nav
        className="NavBar"
      >

        <div
          className={NavBarOpened ? "NavOn" : "Burger"}
          onClick={() =>  {
            setNavBar((prevstate) => !prevstate);
          }}
        >
          <span id="l1"></span>
          <span id="l2"></span>
          <span id="l3"></span>
        </div>

        <div className="LogoBox" onClick={() => {props.scrollTo(props.refs.Home); setNavBar(true)} }>
          <div className="MainLogoBox">
            <svg
              viewBox="0 0 199 237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse cx="99.5" cy="122" rx="93.5" ry="92" fill="#C4C4C4" />
              <g filter="url(#filter0_d)">
                <path
                  d="M47.232 173.528C42.048 173.528 37.152 172.568 32.544 170.648C27.936 168.824 24.192 165.992 21.312 162.152C18.528 158.312 17.136 153.512 17.136 147.752C17.136 142.76 18.096 138.872 20.016 136.088C22.032 133.304 24.48 131.336 27.36 130.184C30.24 129.032 32.976 128.456 35.568 128.456C32.976 131.24 31.008 134.312 29.664 137.672C28.32 141.032 27.648 144.392 27.648 147.752C27.648 151.304 28.416 154.616 29.952 157.688C31.584 160.76 34.032 163.208 37.296 165.032C40.56 166.952 44.688 167.912 49.68 167.912C54 167.912 58.224 167.096 62.352 165.464C66.48 163.928 69.84 161.624 72.432 158.552C75.12 155.384 76.464 151.496 76.464 146.888C76.464 142.76 75.408 139.208 73.296 136.232C71.184 133.256 68.448 130.616 65.088 128.312C61.824 126.008 58.32 123.8 54.576 121.688C50.832 119.576 47.28 117.368 43.92 115.064C40.656 112.664 37.968 109.928 35.856 106.856C33.744 103.784 32.688 100.088 32.688 95.768C32.688 91.736 33.648 87.512 35.568 83.096C37.488 78.68 40.224 74.504 43.776 70.568C47.424 66.632 51.744 63.464 56.736 61.064C61.824 58.568 67.488 57.32 73.728 57.32C79.392 57.32 83.328 58.712 85.536 61.496C87.744 64.184 88.848 67.592 88.848 71.72C88.848 75.176 88.224 78.92 86.976 82.952C85.824 86.888 84.384 90.68 82.656 94.328C80.928 97.88 79.296 100.904 77.76 103.4C76.032 103.016 74.784 102.296 74.016 101.24C73.344 100.088 73.008 98.744 73.008 97.208C73.008 95.192 73.44 92.888 74.304 90.296C75.168 87.704 76.128 85.016 77.184 82.232C78.336 79.448 79.344 76.76 80.208 74.168C81.072 71.48 81.504 69.08 81.504 66.968C81.504 65.048 80.928 63.56 79.776 62.504C78.624 61.352 76.512 60.776 73.44 60.776C68.928 60.776 64.752 61.832 60.912 63.944C57.072 66.056 53.712 68.792 50.832 72.152C47.952 75.416 45.696 78.872 44.064 82.52C42.528 86.168 41.76 89.48 41.76 92.456C41.76 96.008 42.768 99.08 44.784 101.672C46.896 104.168 49.584 106.472 52.848 108.584C56.112 110.6 59.568 112.664 63.216 114.776C66.96 116.792 70.464 119.048 73.728 121.544C76.992 124.04 79.632 127.016 81.648 130.472C83.76 133.832 84.816 137.96 84.816 142.856C84.816 147.848 83.712 152.264 81.504 156.104C79.296 159.848 76.32 163.016 72.576 165.608C68.928 168.2 64.896 170.168 60.48 171.512C56.064 172.856 51.648 173.528 47.232 173.528Z"
                  fill="black"
                />
              </g>
              <g filter="url(#filter1_d)">
                <path
                  d="M139.016 110.999C136.006 110.999 133.813 110.053 132.437 108.161C131.061 106.355 130.373 104.162 130.373 101.582C130.373 99.432 130.674 97.282 131.276 95.132C131.964 92.982 132.609 90.875 133.211 88.811C133.899 86.747 134.243 84.898 134.243 83.264C134.243 81.544 133.856 80.34 133.082 79.652C132.308 78.964 131.448 78.62 130.502 78.62C128.352 78.62 125.987 80.297 123.407 83.651C120.913 87.005 117.645 91.735 113.603 97.841C112.227 99.905 111.066 102.012 110.12 104.162C109.174 106.226 108.271 108.118 107.411 109.838C106.723 109.838 105.863 109.752 104.831 109.58C103.799 109.408 102.853 109.107 101.993 108.677C101.219 108.333 100.832 107.86 100.832 107.258C100.832 106.656 101.219 105.237 101.993 103.001C102.853 100.679 103.799 98.013 104.831 95.003C105.949 91.907 106.895 88.811 107.669 85.715C108.529 82.533 108.959 79.824 108.959 77.588C108.959 76.126 108.701 74.965 108.185 74.105C107.755 73.159 106.938 72.686 105.734 72.686C103.842 72.686 101.563 73.847 98.897 76.169C96.231 78.405 93.479 81.372 90.641 85.07C87.803 88.768 85.094 92.853 82.514 97.325C80.02 101.711 77.999 106.097 76.451 110.483C75.247 110.483 73.785 110.182 72.065 109.58C70.345 108.978 69.485 108.376 69.485 107.774C69.485 107.258 69.958 105.753 70.904 103.259C71.764 100.679 72.796 97.626 74 94.1C75.118 90.488 76.107 86.833 76.967 83.135C77.913 79.437 78.386 76.169 78.386 73.331C78.902 72.729 79.719 72.127 80.837 71.525C81.955 70.923 83.116 70.622 84.32 70.622C86.642 70.622 87.803 71.74 87.803 73.976C87.803 75.094 87.459 77.029 86.771 79.781C86.169 82.447 85.395 85.414 84.449 88.682C86.169 85.93 88.104 83.135 90.254 80.297C92.49 77.373 94.812 74.707 97.22 72.299C99.628 69.891 102.036 67.956 104.444 66.494C106.938 64.946 109.346 64.172 111.668 64.172C114.334 64.172 116.14 65.161 117.086 67.139C118.118 69.031 118.634 71.31 118.634 73.976C118.634 76.126 118.376 78.405 117.86 80.813C117.43 83.135 116.914 85.328 116.312 87.392C115.71 89.37 115.151 90.961 114.635 92.165C116.441 88.897 118.419 85.758 120.569 82.748C122.805 79.652 125.213 77.158 127.793 75.266C130.373 73.288 133.125 72.299 136.049 72.299C138.801 72.299 140.693 73.116 141.725 74.75C142.843 76.384 143.402 78.319 143.402 80.555C143.402 82.791 143.015 85.242 142.241 87.908C141.467 90.574 140.65 93.154 139.79 95.648C139.016 98.142 138.629 100.292 138.629 102.098C138.629 103.216 138.887 104.248 139.403 105.194C140.005 106.054 141.037 106.484 142.499 106.484C144.907 106.484 147.143 105.409 149.207 103.259C151.357 101.023 153.335 98.357 155.141 95.261C156.947 92.079 158.495 89.026 159.785 86.102L161.333 87.908C159.957 91.52 158.194 95.132 156.044 98.744C153.894 102.27 151.357 105.194 148.433 107.516C145.595 109.838 142.456 110.999 139.016 110.999Z"
                  fill="black"
                />
              </g>
              <g filter="url(#filter2_d)">
                <path
                  d="M146.965 163.934C139.311 163.934 135.484 159.677 135.484 151.163C135.484 147.379 136.172 142.735 137.548 137.231C139.01 131.641 140.816 125.922 142.966 120.074C142.106 119.902 141.289 119.773 140.515 119.687C139.741 119.515 139.01 119.3 138.322 119.042V116.72C139.01 116.806 139.827 116.892 140.773 116.978C141.719 117.064 142.794 117.15 143.998 117.236C145.804 112.592 147.739 108.12 149.803 103.82C151.867 99.434 153.888 95.564 155.866 92.21C157.93 88.77 159.865 86.061 161.671 84.083C163.563 82.019 165.154 80.987 166.444 80.987C167.132 80.987 167.734 81.245 168.25 81.761C168.852 82.191 169.153 82.879 169.153 83.825C169.153 85.287 168.25 87.695 166.444 91.049C164.638 94.317 162.402 98.23 159.736 102.788C157.07 107.346 154.49 112.291 151.996 117.623H156.769C159.607 117.623 162.574 117.58 165.67 117.494C168.852 117.408 172.034 117.193 175.216 116.849V119.171C165.842 120.203 158.274 120.719 152.512 120.719H150.577C148.599 125.277 146.922 129.964 145.546 134.78C144.17 139.596 143.482 144.283 143.482 148.841C143.482 152.539 144.041 155.205 145.159 156.839C146.277 158.387 148.126 159.161 150.706 159.161C155.178 159.161 159.564 157.183 163.864 153.227C168.164 149.271 171.948 143.896 175.216 137.102L176.893 138.392C174.829 143.208 172.206 147.551 169.024 151.421C165.928 155.291 162.488 158.344 158.704 160.58C154.92 162.816 151.007 163.934 146.965 163.934Z"
                  fill="black"
                />
              </g>
              <ellipse
                cx="94.3041"
                cy="97.6561"
                rx="4"
                ry="11"
                transform="rotate(25.2087 94.3041 97.6561)"
                fill="black"
              />
              <path
                d="M124.804 104.111C122.217 109.608 118.499 113.301 116.5 112.36C114.501 111.419 114.979 106.2 117.566 100.704C120.154 95.2071 123.871 91.514 125.87 92.455C127.869 93.3959 127.392 98.6145 124.804 104.111Z"
                fill="black"
              />
              <circle cx="94" cy="95" r="13" stroke="white" strokeWidth="2" />
              <circle cx="122" cy="102" r="13" stroke="white" strokeWidth="2" />
              <rect
                x="106.49"
                y="98"
                width="3.75906"
                height="1.3689"
                transform="rotate(20.9571 106.49 98)"
                fill="#C4C4C4"
              />
              <rect x="86" y="123" width="37" height="2" fill="black" />
              <rect x="86" y="129" width="46" height="2" fill="#225C93" />
              <rect x="87" y="157" width="43" height="2" fill="black" />
              <rect x="118" y="137" width="14" height="2" fill="black" />
              <rect x="116" y="144" width="14" height="2" fill="#225C93" />
              <rect x="118" y="151" width="14" height="2" fill="black" />
              <rect x="88" y="137" width="25" height="16" fill="white" />
              <rect x="91" y="140" width="5" height="11" fill="black" />
              <rect x="99" y="140" width="12" height="11" fill="black" />
              <defs>
                <filter
                  id="filter0_d"
                  x="13.136"
                  y="57.32"
                  width="79.712"
                  height="124.208"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0.131771 0 0 0 0 0.36225 0 0 0 0 0.575 0 0 0 0.18 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter1_d"
                  x="65.485"
                  y="64.172"
                  width="99.848"
                  height="54.827"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
                <filter
                  id="filter2_d"
                  x="131.484"
                  y="80.987"
                  width="49.409"
                  height="90.947"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  />
                  <feOffset dy="4" />
                  <feGaussianBlur stdDeviation="2" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
          <h1>Smort</h1>
        </div>

        <ul className={NavBarOpened ? "toggled" : "notToggled"}>
          <li onClick={() => {props.scrollTo(props.refs.About); setNavBar(true)} }>
            <div className="SvgContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2.033 16.01c.564-1.789 1.632-3.932 1.821-4.474.273-.787-.211-1.136-1.74.209l-.34-.64c1.744-1.897 5.335-2.326 4.113.613-.763 1.835-1.309 3.074-1.621 4.03-.455 1.393.694.828 1.819-.211.153.25.203.331.356.619-2.498 2.378-5.271 2.588-4.408-.146zm4.742-8.169c-.532.453-1.32.443-1.761-.022-.441-.465-.367-1.208.164-1.661.532-.453 1.32-.442 1.761.022.439.466.367 1.209-.164 1.661z" />
              </svg>
            </div>
            <p>
              {t("NavBar.About")}
            </p>
          </li>
          <li onClick={() => {props.scrollTo(props.refs.Begin); setNavBar(true)} }>
            <div className="SvgContainer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M23.944 2.038c-.369-.026-.729-.038-1.083-.038-7.671 0-12.038 5.848-13.627 10.554l4.216 4.215c4.842-1.734 10.55-5.939 10.55-13.528 0-.392-.024-.793-.056-1.203zm-10.058 12.645l-2.571-2.571c1.089-2.55 4.185-7.978 10.88-8.312-.224 5.149-3.604 8.856-8.309 10.883zm4.88 1.371c-.488.333-.973.633-1.452.901-.167.794-.591 1.643-1.205 2.366-.001-.514-.145-1.032-.396-1.55-.441.2-.86.373-1.261.524.589 1.524-.011 2.649-.816 3.705 1.156-.087 2.369-.653 3.324-1.609 1.032-1.031 1.755-2.518 1.806-4.337zm-10.542-5.77c-.517-.249-1.032-.39-1.545-.392.716-.607 1.556-1.029 2.343-1.2.28-.493.595-.979.926-1.457-1.819.049-3.307.774-4.34 1.805-.955.955-1.52 2.169-1.608 3.324 1.056-.806 2.183-1.406 3.706-.815.155-.42.326-.842.518-1.265zm6.901.591c-.35-.348-.35-.913 0-1.261.348-.348.912-.348 1.261 0 .349.349.349.914 0 1.262-.349.349-.913.349-1.261-.001zm4.414-4.414c-.696-.696-1.826-.696-2.522 0-.697.696-.697 1.827 0 2.523.696.697 1.826.697 2.523 0 .695-.696.695-1.827-.001-2.523zm-1.703 1.703c-.243-.244-.243-.64 0-.883.242-.244.64-.244.885 0 .242.243.241.639 0 .883-.245.243-.642.243-.885 0zm-6.492 9.024c-1.734 1.844-3.656 2.787-5.72 2.787-3.2 0-5.624-2.354-5.624-5.311 0-1.485.611-3.122 2.043-4.689-3.201 5.137 1.126 10.128 6.694 4.607l.765.765c-.91 1.061-1.661 1.977-2.971 2.638 1.344.057 2.87-.745 4.017-1.593l.796.796z" />
              </svg>
            </div>
            <p>
              {t("NavBar.Begin")}
            </p>
          </li>
          <li onClick={() => {props.scrollTo(props.refs.Contacts); setNavBar(true)} }>
            <div className="SvgContainer">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                viewBox="0 0 24 24"
              >
                <path d="M2.59 1.322l2.844-1.322 4.041 7.889-2.724 1.342c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-.598.273-1.215.399-1.842.397-5.649-.019-12.086-10.43-12.133-17.33-.016-2.407.745-4.387 2.59-5.348zm1.93 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.972-.474-2.271-4.383-1.026.501c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.498-2.252-4.398zm15.48 14.404h-1v-13h1v13zm-2-2h-1v-9h1v9zm4-1h-1v-7h1v7zm-6-1h-1v-5h1v5zm-2-1h-1v-3h1v3zm10 0h-1v-3h1v3zm-12-1h-1v-1h1v1z" />
              </svg>
            </div>
            <p>
              {t("NavBar.ContactUs")}
            </p>
          </li>
          <li>
            <div className="LangText">
              <select
                defaultValue={chosenLang}
                onChange={(e) => ChangeLang(e.target.value)}
              >
                <option value="en">{t("Lang.en")}</option>
                <option value="sp">{t("Lang.sp")}</option>
              </select>
            </div>
            <div className="LangSvg">
              <img
                style={chosenLang === "en" ? { opacity: 1 } : { opacity: 0 }}
                alt="Sp-svg"
                src={EngLogo}
              />
              <img
                style={chosenLang === "sp" ? { opacity: 1 } : { opacity: 0 }}
                alt="En-svg"
                src={SpanLogo}
              />
            </div>
          </li>
        </ul>
      
      </nav>
    );
}

export default NavBar