import React, { useCallback, useEffect, useRef, Suspense } from "react";
import anime from "animejs";
import { Canvas } from "react-three-fiber";
import { useGLTF } from "@react-three/drei/useGLTF";
import { OrbitControls } from "@react-three/drei";


// Images
import Image1 from "./../../resources/HomeLS1.jpg";
import Image3 from "./../../resources/HomeLS3.jpg";
import Person1 from "./../../resources/person1.jpg";
import Sales1 from "./../../resources/sales1.jpg";

function Model(props:any) {

  const group = useRef();
  const { nodes, materials } = useGLTF("/3DModels/BotModel/bot2.gltf");


  return (
    <group ref={group} {...props} dispose={null} castShadow>
      <group
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, -200, 0]}
      >
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[0, 0, 0]}
            rotation={[-0.92, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.BackRockets}
              geometry={nodes.BackRocket_BackRockets_0.geometry}
            />
          </group>
          <group
            position={[0, 91.71, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.Body}
              geometry={nodes.Body_Body_0.geometry}
              castShadow
            />
          </group>
          <group
            position={[0, 302.92, 0]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.Head2}
              geometry={nodes.Head_Head2_0.geometry}
              castShadow
            />
          </group>
          <group
            position={[0, 318.11, -20.27]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.Ears}
              geometry={nodes.Ear_Ears_0.geometry}
              castShadow
            />
          </group>
          <group
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.Arms}
              geometry={nodes.Arms_Arms_0.geometry}
              castShadow
            />
          </group>
          <group
            position={[0, 0, 0]}
            rotation={[-Math.PI / 2, 0, 0]}
            scale={[100, 100, 100]}
          >
            <mesh
              material={materials.Hands}
              geometry={nodes.Hands_Hands_0.geometry}
              castShadow
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/3DModels/BotModel/bot2.gltf");



const RightBox = () => {

  const HomeWebsiteAnimation = useCallback(() => {

    const ImageChanger = anime.timeline({
      duration: 1000,
      easing: "easeInOutQuad",
      loop: true,
    })

    ImageChanger.add({
      targets: "#Person1",
      opacity: 1
    }, "+=1000")
    ImageChanger.add({
      targets: "#Sales1",
      opacity: 1
    }, "+=1000")
    ImageChanger.add({
      targets: "#Image3",
      opacity: 1
    }, "+=1000")
    ImageChanger.add({
      targets: ["#Image3", "#Person1", "#Sales1"],
      opacity: 0
    }, "+=1000")

    const tl = anime.timeline({
      easing: "linear",
      duration: 1000,
      // loop: true,
    })

    tl.add({
      targets:"#SmortSvgLogo",
      duration: 2000,
      rotateZ: "720deg",
    })
    tl.add({
      targets:"#SmortSvgLogo",
      duration: 1000,
      opacity: 0
    },"-=1000")
    tl.add({
      targets:"#ShapeShifter",
      duration: 1000,
      opacity: 1
    },"-=1000")
    tl.add(
      {
        targets: "#ShapeShifterPath",
        easing: "easeInOutElastic(1, .6)",
        d: [
          {
            value: [
              "M195.821 92C112.821 104.5 153.96 184 102.321 184C126.821 115 -39.3818 108.068 8.82097 92C109.321 58.5 50.6824 0 102.321 0C94.8209 72.5 278.82 79.5 195.821 92Z",
            ],
            duration: 800,
          },
          {
            value: [
              "M202 99.9999C239 168.5 160.139 192 108.5 192C56.8613 192 -35 151 14.9999 99.9999C54.904 59.2977 45.5 -26.0001 108.5 7.99991C272 2.5 202 49.1897 202 99.9999Z",
            ],
            duration: 800,
          },
          {
            value: [
              "M171 121.5C171 253 183 242 85.9999 242C-11 242 0.999924 254 0.999924 121.5C0.999924 -11 -7.50003 0.999986 85.9999 0.999986C179.5 0.999986 171 -10 171 121.5Z",
            ],
            duration: 1000,
          },
        ],
      },
      "+=50"
    );
    tl.add(
      {
        targets: [".PhoneContainer", ".Polymorph"],
        translateX: "-150px",
        translateY: "-100px",
        easing: "easeOutElastic(1, 1)",
      },
      "-=1000"
    );
    tl.add(
      {
        targets: ".PhoneContainer",
        opacity: 1,
        duration: 500
      },
      "-=500"
    );
    tl.add(
      {
        targets: ".Polymorph",
        translateX: "-50px",
        translateY: "170px",
        easing: "easeOutElastic(1, 1)",
      },
      "+=100"
    );

    tl.add(
      {
        targets: "#ShapeShifterPath",
        easing: "easeInOutElastic(1, .6)",
        d: [
          {
            value:
              "M78 92C78 142.81 241.5 -51.5 137.5 191.5C85.8614 191.5 0 142.81 0 92C0 35 41.8614 0 93.5 0C279.5 98 78 41.1898 78 92Z",
            duration: 800,
          },
          {
            value:
              "M175.5 88C125.22 127.063 336.967 140.497 130.5 184C-19.0001 215.5 171.646 141.326 74 99C-57.5 42 3.99996 18.5 130.5 0C182.138 0 240.5 37.5 175.5 88Z",
            duration: 800,
          },
          {
            value:
              "M269 84C269 183 284 166 135 166C-18 166 1.0002 186 1.00019 84C1.00019 -18 -20 2.00003 135 2C290 1.99996 269 -15 269 84Z",
            duration: 1000,
          },
        ],
      },
      "-=1200"
    );

    tl.add(
      {
        targets: ".MonitorContainer",
        opacity: 1,
      },
      "-=100"
    );

    tl.add(
      {
        targets: "#ShapeShifterPath",
        d: [
          {
            value:
              "M187 92C187 142.81 145.139 184 93.5 184C41.8614 184 0 142.81 0 92C0 35 41.8614 0 93.5 0C145.139 0 187 41.1898 187 92Z",
          },
        ],
      },
      "+=100"
    );
    
    tl.add(
      {
        targets: ".Polymorph",
        width: "25em",
        height: "25em",
        translateX: "5em",
        translateY: "-5em",
        easing: "easeOutElastic(1, .6)",
        duration: 2000
      },
      "-=1000"
    );

    tl.add(
      {
        targets: ".Polymorph",
        rotateY: "360deg",
        duration: 1000,
        easing: "easeOutElastic(1, .6)",
      },
      "-=500"
    );

    tl.add(
      {
        targets: "#SmortSvgLogo",
        opacity: .2,
        duration: 500
      },
      "-=500"
    );

    tl.add(
      {
        targets: "#ShapeShifter",
        opacity: 0,
        duration: 500
      },
      "-=1000"
    );

  }, [])

  useEffect(() => {

    setTimeout(() => {
      HomeWebsiteAnimation()

    }, 3000)

  },[])

    return (
      <div className="RightBoxHome">
        <div className="SiteAnimationBox">
          <div className="Polymorph">
            <svg
              width="199"
              height="237"
              viewBox="0 0 199 237"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="SmortSvgLogo"
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
                  d="M146.965 163.934C143.267 163.934 140.429 162.859 138.451 160.709C136.473 158.559 135.484 155.377 135.484 151.163C135.484 147.379 136.172 142.735 137.548 137.231C139.01 131.641 140.816 125.922 142.966 120.074C142.106 119.902 141.289 119.773 140.515 119.687C139.741 119.515 139.01 119.3 138.322 119.042V116.72C139.01 116.806 139.827 116.892 140.773 116.978C141.719 117.064 142.794 117.15 143.998 117.236C145.804 112.592 147.739 108.12 149.803 103.82C151.867 99.434 153.888 95.564 155.866 92.21C157.93 88.77 159.865 86.061 161.671 84.083C163.563 82.019 165.154 80.987 166.444 80.987C167.132 80.987 167.734 81.245 168.25 81.761C168.852 82.191 169.153 82.879 169.153 83.825C169.153 85.287 168.25 87.695 166.444 91.049C164.638 94.317 162.402 98.23 159.736 102.788C157.07 107.346 154.49 112.291 151.996 117.623C152.77 117.623 153.544 117.623 154.318 117.623C155.178 117.623 155.995 117.623 156.769 117.623C159.607 117.623 162.574 117.58 165.67 117.494C168.852 117.408 172.034 117.193 175.216 116.849V119.171C170.486 119.687 166.229 120.074 162.445 120.332C158.747 120.59 155.436 120.719 152.512 120.719C152.168 120.719 151.824 120.719 151.48 120.719C151.222 120.719 150.921 120.719 150.577 120.719C148.599 125.277 146.922 129.964 145.546 134.78C144.17 139.596 143.482 144.283 143.482 148.841C143.482 152.539 144.041 155.205 145.159 156.839C146.277 158.387 148.126 159.161 150.706 159.161C155.178 159.161 159.564 157.183 163.864 153.227C168.164 149.271 171.948 143.896 175.216 137.102L176.893 138.392C174.829 143.208 172.206 147.551 169.024 151.421C165.928 155.291 162.488 158.344 158.704 160.58C154.92 162.816 151.007 163.934 146.965 163.934Z"
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

            <svg
              width="187"
              height="184"
              viewBox="0 0 187 184"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              id="ShapeShifter"
            >
              <path
                id="ShapeShifterPath"
                d="M187 92C187 142.81 145.139 184 93.5 184C41.8614 184 0 142.81 0 92C0 35 41.8614 0 93.5 0C145.139 0 187 41.1898 187 92Z"
                fill="#33A2CB"
              />
            </svg>
          </div>

          <div className="InitBox">
            <div className="PhoneContainer">
              <div className="BrowserBar">
                <div className="CirclesContainer">
                  <span className="c1"></span>
                  <span className="c2"></span>
                  <span className="c3"></span>
                </div>

                <div className="UrlBox"></div>
              </div>
              <div className="SiteContainer">
                <Canvas
                  colorManagement
                  shadowMap
                  camera={{ position: [0, 0, 400], fov: 100 }}
                >
                  <ambientLight intensity={0.5} />
                  <pointLight position={[300, 500, 0]} intensity={2} />
                  <directionalLight
                    castShadow
                    position={[300, 500, 0]}
                    shadow-camera-far={50}
                  />
                  <Suspense fallback={null}>
                    <Model />
                  </Suspense>
                  <OrbitControls />
                </Canvas>
              </div>
            </div>

            <div className="MonitorContainer">
              <div className="BrowserBar">
                <div className="CirclesContainer">
                  <span className="c1"></span>
                  <span className="c2"></span>
                  <span className="c3"></span>
                </div>

                <div className="UrlBox"></div>
              </div>
              <div className="SiteContainer">
                <div className="BackgroundImgs">
                  <img alt="Bg1" src={Image1} id="Image1" />
                  <img alt="P1" src={Person1} id="Person1" />
                  <img alt="S1" src={Sales1} id="Sales1" />
                  <img alt="Bg3" src={Image3} id="Image3" />
                </div>

                <div className="MiniTitle">
                  <h1 id="title1">Travel Blog</h1>
                  <h1 id="title2">My Portafolio</h1>
                  <h1 id="title3">Online Shop</h1>
                  <h1 id="title4">Team Website</h1>
                </div>
                <div className="MiniSubTitle">
                  <h1 id="subTitle1">Around the world website</h1>
                  <h1 id="subTitle2">Everything about me</h1>
                  <h1 id="subTitle3">My products out in the world</h1>
                  <h1 id="subTitle4">This is our team</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="SecondBox">
            <span className="StylesBox">
              <div className="Roulette">
                <div className="animated">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 2.004c5.046.504 9 4.783 9 9.97 0 1.467-.324 2.856-.892 4.113l1.738 1.005c.732-1.553 1.154-3.284 1.154-5.117 0-6.304-4.842-11.464-11-11.975v2.004zm-10.109 14.083c-.568-1.257-.891-2.646-.891-4.112 0-5.188 3.954-9.466 9-9.97v-2.005c-6.158.511-11 5.671-11 11.975 0 1.833.421 3.563 1.153 5.118l1.738-1.006zm17.213 1.734c-1.817 2.523-4.769 4.174-8.104 4.174s-6.288-1.651-8.105-4.175l-1.746 1.01c2.167 3.123 5.768 5.17 9.851 5.17 4.082 0 7.683-2.047 9.851-5.168l-1.747-1.011zm-8.104-13.863c-4.419 0-8 3.589-8 8.017s3.581 8.017 8 8.017 8-3.589 8-8.017-3.581-8.017-8-8.017zm-2 11.023v-6.013l6 3.152-6 2.861z" />
                  </svg>
                </div>
                <div className="minimalist">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 16h-3v2h3v-2zm14.554-.317c-.902-.456-1.536-.104-2.432-.542l-.308-.15.281-.136c.896-.436 1.528-.083 2.433-.536.904-.455 1.451-1.329 1.451-2.208 0-1.168-.963-2.111-2.248-2.111-.377 0-.768.084-1.141.263-1.08.52-1.645 1.663-1.394 2.693.142.588-.166.667-.64.895l-.547.263-.011-.005v-3.494c.002-2.392-6.646-9.615-9.809-9.615h-8.189v22h18v-6.058l-2-.942h-3v2h3v3h-14v-18h5.362c4.156 0 2.638 6 2.638 6s6-1.65 6 2.457v1.683l-3.329-1.609c-1.026-.496-1.971.798-1.971.798l7.882 3.814c.472.229.781.309.637.896-.252 1.029.309 2.173 1.388 2.696.372.18.765.265 1.146.265 1.282 0 2.247-.94 2.247-2.111 0-.877-.545-1.75-1.446-2.206zm-1.487-4.423c.676-.325 1.447-.127 1.719.442.271.568-.059 1.294-.733 1.619-.677.325-1.447.127-1.719-.441-.272-.568.058-1.295.733-1.62zm-3.173 4.051c-.229 0-.417-.187-.417-.417 0-.23.188-.417.417-.417s.416.187.416.417c0 .23-.187.417-.416.417zm4.91 2.99c-.272.568-1.043.764-1.719.437-.675-.326-1.002-1.054-.73-1.622.273-.567 1.045-.763 1.721-.437.674.327 1 1.054.728 1.622zm-13.804-2.301h3v2h-3v-2z" />
                  </svg>
                </div>
                <div className="technological">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 4c0-1.104-.896-2-2-2h-15c-1.104 0-2 .896-2 2v15c0 1.104.896 2 2 2h15c1.104 0 2-.896 2-2v-15zm-2 14.25c0 .414-.336.75-.75.75h-13.5c-.414 0-.75-.336-.75-.75v-13.5c0-.414.336-.75.75-.75h13.5c.414 0 .75.336.75.75v13.5zm-9 3.75v1h-1v-1h1zm2 0v1h-1v-1h1zm-4 0v1h-1v-1h1zm6 0v1h-1v-1h1zm2 0v1h-1v-1h1zm-6-22v1h-1v-1h1zm2 0v1h-1v-1h1zm-4 0v1h-1v-1h1zm6 0v1h-1v-1h1zm2 0v1h-1v-1h1zm6 13h1v1h-1v-1zm0-4h1v1h-1v-1zm0-2h1v1h-1v-1zm0 4h1v1h-1v-1zm0 4h1v1h-1v-1zm-22-2h1v1h-1v-1zm0-4h1v1h-1v-1zm0-2h1v1h-1v-1zm0 4h1v1h-1v-1zm0 4h1v1h-1v-1zm11-4h-5v-5h5v5zm6 0h-5v-5h5v5zm-6 6h-5v-5h5v5zm6 0h-5v-5h5v5z" />
                  </svg>
                </div>
                <div className="3D">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0l-11 6v12.131l11 5.869 11-5.869v-12.066l-11-6.065zm8.063 6.73l-2.267 1.165-5.796-3.098-5.705 3.018-2.245-1.2 7.945-4.333 8.068 4.448zm-13.063 3.73l4 2.139v3.807l-4-2.052v-3.894zm5.01.411l-3.588-1.918 3.573-1.891 3.64 1.945-3.625 1.864zm4.99-.317v3.8l-4 2.052v-3.796l4-2.056zm-14-2.233l2 1.07v6.185l6 3.077v2.547l-8-4.268v-8.611zm10 12.879v-2.546l6-3.077v-6.052l2-1.028v8.435l-8 4.268z" />
                  </svg>
                </div>
                <div className="modern">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M18.513 7.119c.958-1.143 1.487-2.577 1.487-4.036v-3.083h-16v3.083c0 1.459.528 2.892 1.487 4.035l3.087 3.68c.566.677.57 1.625.009 2.306l-3.13 3.794c-.937 1.136-1.453 2.555-1.453 3.995v3.107h16v-3.107c0-1.44-.517-2.858-1.453-3.994l-3.13-3.794c-.562-.681-.558-1.629.009-2.306l3.087-3.68zm-.513-4.12c0 1.101-.363 2.05-1.02 2.834l-.978 1.167h-8.004l-.978-1.167c-.66-.785-1.02-1.736-1.02-2.834h12zm-.996 15.172c.652.791.996 1.725.996 2.829h-1.061c-1.939-2-4.939-2-4.939-2s-3 0-4.939 2h-1.061c0-1.104.344-2.039.996-2.829l3.129-3.793c.342-.415.571-.886.711-1.377h.164v1h2v-1h.163c.141.491.369.962.711 1.376l3.13 3.794zm-6.004-1.171h2v1h-2v-1zm0-2h2v1h-2v-1z" />
                  </svg>
                </div>
                <div className="retro-pixel">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M13 7h-2v6h2v-6zm2-7v3h-6v-3h-7v24h7v-7h6v7h7v-24h-7zm-11 22v-2h3v2h-3zm3-7v3h-3v-16h3v3h10v-3h3v16h-3v-3h-10zm10 7v-2h3v2h-3z" />
                  </svg>
                </div>
              </div>
            </span>
            <span className="StyleTitle">
              <h1>¿Cuál es tu estilo favorito?</h1>
            </span>
          </div>
        </div>
      </div>
    );
}

export default RightBox