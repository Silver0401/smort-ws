import React, {useEffect, useState} from "react";
import anime from "animejs";
import "react-on-scroll-animation/build/index.css";
import SmortLogo from "./../resources/SmortLogo.svg";
// import Rosa from "react-on-scroll-animation";


// Components

import Block1 from "./../components/Home/Block1";
import Block2 from "./../components/Home/Block2";
import Block3 from "./../components/Home/Block3";
import Footer from "./../components/Home/Footer";


const HomePage = () => {

  const [showPage, setShowPage] = useState(false)

  function HomeAnimations(){
      
      const AnimTleyes = anime.timeline({
        easing: "easeOutElastic(1, .8)",
        targets: ["#eye", "#eye_2"],
        duration: 1000,
        loop: true
      });

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
  
      AnimTleyes.add({
          translateX: -20,
      })
      AnimTleyes.add({
          translateY: -10,
      })
      AnimTleyes.add({
          translateX: 5,
          translateY: 5,
      })
      AnimTleyes.add({
          translateX: -20,
      })
      AnimTleyes.add({
          translateX: 0,
          translateY: 0,
      })
  
      anime({
          targets:".line",
          width: ["10%", "80%"],
          duration: 2000,
          direction: "alternate",
          loop: true
      })
  }
  
  useEffect(() => {

    // Aos.init({duration:2000})

    window.onload = () => {

      let DelayTime = 1000

      // const LoadingTimeline = anime.timeline({
      //   easing: "easeInOutQuad",
      // })

      anime({
        targets: ".MovingBox",
        easing: "easeInOutSine",
        delay: DelayTime,
        duration: 2200,
        translateY: ["120%", "-120%"]
      })

      anime({
        targets: ".Loader",
        easing: "easeInOutSine",
        delay: DelayTime + 500,
        duration: 750,
        height: "0px"
        // translateY: "-100%"
      })

      setTimeout(() => {
        setShowPage(true)
      },DelayTime + 1000)

      anime({
        targets:".LeftBox",
        delay: DelayTime + 1000,
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["-100%","0%"]
      })

      anime({
        targets:".RightBox",
        delay: DelayTime + 1000,
        duration: 1000,
        easing:"easeInOutQuad",
        opacity: [0,1],
        translateX: ["100%","0%"]
      })

    }

    HomeAnimations()

  },[])


  return (
    <div style={showPage ? {overflow:"visible"} : {overflow:"hidden"}} className="HomePage">

      {/* <section className="HomeBox"> */}
      <div style={{position:"absolute", top:"10px", left:"10px", width:"50px", height:"50px", background:"transparent",display:"flex", justifyContent:"center", alignItems:"center" }} id="SmortLogo">
        <img style={{width:"100%"}} alt="SmortLogo" src={SmortLogo}></img>
      </div>

      <div className="LeftBox">
        <h1>Smort</h1>

        <br></br>
        <p>Sitios desde</p>
        <br></br>
        <div className="price">
          <p className="p">500$mxn</p>
          <div className="line"></div>
        </div>

        <div className="BrainBox">
          {/* <img src={ChipLogo}></img> */}
          <svg
            width="264"
            height="256"
            viewBox="0 0 264 256"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="artificial-intelligence 1">
              <path
                id="Vector"
                d="M247.733 39.8225H16.2669C9.41892 39.8225 3.86719 45.206 3.86719 51.847V188.121C3.86719 194.762 9.41892 200.145 16.2669 200.145H247.733C254.581 200.145 260.132 194.762 260.132 188.121V51.847C260.133 45.206 254.581 39.8225 247.733 39.8225Z"
                fill="#99E7FF"
              />
              <path
                id="Vector_2"
                d="M231.2 59.863H165.067C160.501 59.863 156.8 63.452 156.8 67.879V79.903L138.956 97.2065C137.914 98.2165 138.652 99.9435 140.125 99.9435H156.8V107.96C156.8 112.387 160.501 115.976 165.067 115.976H231.2C235.765 115.976 239.466 112.387 239.466 107.96V67.879C239.466 63.452 235.765 59.863 231.2 59.863Z"
                fill="white"
              />
              <path
                id="Vector_3"
                d="M94.8002 107.96H61.7337C48.0372 107.96 36.9337 97.193 36.9337 83.9115C36.9337 70.63 48.0372 59.863 61.7337 59.863H94.8002C108.497 59.863 119.6 70.63 119.6 83.9115C119.6 97.193 108.497 107.96 94.8002 107.96Z"
                fill="#59D8FF"
              />
              <path
                id="Vector_4"
                d="M111.334 136.015H45.1997V184.11H111.334V136.015Z"
                fill="#DBD9DC"
              />
              <path
                id="Vector_5"
                d="M111.333 136.016H45.2002V151.385L58.9617 155.197C61.9395 162.723 69.4702 168.081 78.2667 168.081C87.0633 168.081 94.5935 162.723 97.5717 155.197L111.333 151.385V136.016V136.016Z"
                fill="#C9C6CA"
              />
              <path
                id="Vector_6"
                d="M119.6 123.992H36.9337C32.3678 123.992 28.6672 127.581 28.6672 132.008V134.298L78.2672 148.04L127.867 134.298V132.008C127.867 127.581 124.165 123.992 119.6 123.992Z"
                fill="#EDEBED"
              />
              <path
                id="Vector_7"
                d="M78.2667 156.055C82.8316 156.055 86.5322 152.467 86.5322 148.04C86.5322 143.613 82.8316 140.025 78.2667 140.025C73.7018 140.025 70.0012 143.613 70.0012 148.04C70.0012 152.467 73.7018 156.055 78.2667 156.055Z"
                fill="#99E9DF"
              />
              <path
                id="Vector_8"
                d="M94.8002 95.9355H61.7337C54.8852 95.9355 49.334 90.552 49.334 83.9115C49.334 77.2705 54.8857 71.8875 61.7337 71.8875H94.8002C101.649 71.8875 107.2 77.271 107.2 83.9115C107.2 90.5525 101.648 95.9355 94.8002 95.9355Z"
                fill="#99E7FF"
              />
              <path
                id="Vector_9"
                d="M247.733 36.0725H16.2669C7.29713 36.0725 0 43.1485 0 51.8465V188.121C0 196.819 7.29713 203.895 16.2669 203.895H49.5995V212.427H41.067C38.9312 212.427 37.1998 214.106 37.1998 216.177C37.1998 218.248 38.9312 219.927 41.067 219.927H222.933C225.069 219.927 226.8 218.248 226.8 216.177C226.8 214.106 225.069 212.427 222.933 212.427H214.4V203.895H247.733C256.703 203.895 264 196.819 264 188.121V51.8465C264 43.1485 256.703 36.0725 247.733 36.0725ZM256.266 188.121C256.266 192.684 252.438 196.395 247.733 196.395H202.266C200.131 196.395 198.399 198.074 198.399 200.145C198.399 202.216 200.131 203.895 202.266 203.895H206.666V212.428H57.3339V203.895H185.734C187.87 203.895 189.602 202.216 189.602 200.145C189.602 198.074 187.87 196.395 185.734 196.395H16.2669C11.5619 196.395 7.73438 192.684 7.73438 188.121V51.8465C7.73438 47.284 11.5619 43.5725 16.2669 43.5725H247.733C252.438 43.5725 256.265 47.2845 256.265 51.8465L256.266 188.121Z"
                fill="black"
              />
              <path
                id="Vector_10"
                d="M136.133 180.363H131.734V132.008C131.734 125.52 126.29 120.242 119.6 120.242H82.1344V111.71H94.8002C109.295 111.71 121.304 101.222 123.199 87.662H123.733C125.869 87.662 127.601 85.983 127.601 83.912C127.601 81.841 125.869 80.162 123.733 80.162H123.199C121.304 66.602 109.295 56.1135 94.8002 56.1135H61.7337C47.2385 56.1135 35.2301 66.602 33.3346 80.162H32.8005C30.6647 80.162 28.9333 81.841 28.9333 83.912C28.9333 85.983 30.6647 87.662 32.8005 87.662H33.3346C35.2296 101.222 47.2385 111.71 61.7337 111.71H74.4V120.242H69.9992C67.8635 120.242 66.132 121.921 66.132 123.992C66.132 126.063 67.8635 127.742 69.9992 127.742H119.6C122.026 127.742 124 129.656 124 132.008V133.227L89.3692 143.301C87.4851 139.168 83.2193 136.275 78.2672 136.275C73.3152 136.275 69.0494 139.168 67.1653 143.301L32.5344 133.227V132.008C32.5344 129.655 34.5082 127.742 36.9337 127.742H53.4662C55.6019 127.742 57.3334 126.063 57.3334 123.992C57.3334 121.921 55.6019 120.242 53.4662 120.242H36.9337C30.243 120.242 24.8 125.52 24.8 132.008V180.363H20.4007C18.265 180.363 16.5335 182.042 16.5335 184.113C16.5335 186.184 18.265 187.863 20.4007 187.863H136.134C138.269 187.863 140.001 186.184 140.001 184.113C140.001 182.042 138.269 180.363 136.133 180.363ZM40.8009 83.9115C40.8009 72.719 50.1909 63.613 61.7337 63.613H94.8002C106.342 63.613 115.733 72.719 115.733 83.9115C115.733 95.104 106.343 104.21 94.8002 104.21H61.7337C50.1909 104.209 40.8009 95.104 40.8009 83.9115ZM124 180.363H115.201V144.033C115.201 143.894 115.192 143.758 115.177 143.624L124 141.057V180.363ZM78.2672 159.807C83.9267 159.807 88.6927 156.029 90.0276 150.939L107.467 145.866V180.363H49.0674V145.866L66.5069 150.939C67.8418 156.029 72.6077 159.807 78.2672 159.807ZM78.2672 143.774C80.6933 143.774 82.6665 145.688 82.6665 148.04C82.6665 150.392 80.6927 152.306 78.2672 152.306C75.8417 152.306 73.8679 150.392 73.8679 148.04C73.8679 145.688 75.8412 143.774 78.2672 143.774ZM32.5344 141.056L41.3573 143.622C41.3423 143.757 41.333 143.893 41.333 144.031V180.363H32.5344V141.056Z"
                fill="black"
              />
              <g id="eye">
                <path
                  id="Vector_11"
                  d="M79.6 76.1535C77.4642 76.1535 75.7328 77.8325 75.7328 79.9035V87.9195C75.7328 89.9905 77.4642 91.6695 79.6 91.6695C81.7357 91.6695 83.4671 89.9905 83.4671 87.9195V79.9035C83.4671 77.8325 81.7362 76.1535 79.6 76.1535Z"
                  fill="black"
                />
              </g>
              <g id="eye_2">
                <path
                  id="Vector_12"
                  d="M98.9335 91.6695C101.069 91.6695 102.801 89.9905 102.801 87.9195V79.9035C102.801 77.8325 101.069 76.1535 98.9335 76.1535C96.7978 76.1535 95.0663 77.8325 95.0663 79.9035V87.9195C95.0663 89.9905 96.7978 91.6695 98.9335 91.6695Z"
                  fill="black"
                />
              </g>
              <path
                id="Vector_13"
                d="M231.2 56.113H165.067C158.376 56.113 152.933 61.3915 152.933 67.8795V78.35L133.399 97.292C132.293 98.3645 131.962 99.9775 132.56 101.379C133.159 102.78 134.569 103.694 136.133 103.694H152.933V107.96C152.933 114.448 158.376 119.726 165.067 119.726H231.2C237.89 119.726 243.333 114.447 243.333 107.96V67.879C243.333 61.391 237.89 56.113 231.2 56.113ZM235.599 107.96C235.599 110.312 233.625 112.226 231.2 112.226H165.067C162.64 112.226 160.667 110.312 160.667 107.96V99.9435C160.667 97.8725 158.936 96.1935 156.8 96.1935H145.47L159.534 82.555C160.26 81.852 160.667 80.898 160.667 79.9035V67.8795C160.667 65.527 162.641 63.613 165.067 63.613H231.2C233.626 63.613 235.599 65.527 235.599 67.8795V107.96V107.96Z"
                fill="black"
              />
              <g id="line">
                <path
                  id="Vector_14"
                  d="M218.8 76.1535H177.466C175.331 76.1535 173.599 77.8325 173.599 79.9035C173.599 81.9745 175.331 83.6535 177.466 83.6535H218.8C220.936 83.6535 222.667 81.9745 222.667 79.9035C222.667 77.8325 220.936 76.1535 218.8 76.1535Z"
                  fill="black"
                />
              </g>
              <path
                id="Vector_15"
                d="M227.066 136.274H169.2C167.064 136.274 165.333 137.953 165.333 140.024C165.333 142.095 167.064 143.774 169.2 143.774H227.066C229.202 143.774 230.933 142.095 230.933 140.024C230.933 137.953 229.202 136.274 227.066 136.274Z"
                fill="black"
              />
              <path
                id="Vector_16"
                d="M227.066 152.307H194C191.864 152.307 190.133 153.986 190.133 156.057C190.133 158.128 191.864 159.807 194 159.807H227.066C229.202 159.807 230.933 158.128 230.933 156.057C230.933 153.986 229.202 152.307 227.066 152.307Z"
                fill="black"
              />
              <path
                id="Vector_17"
                d="M177.466 152.307H169.2C167.064 152.307 165.333 153.986 165.333 156.057C165.333 158.128 167.064 159.807 169.2 159.807H177.466C179.602 159.807 181.333 158.128 181.333 156.057C181.333 153.986 179.602 152.307 177.466 152.307Z"
                fill="black"
              />
              <path
                id="Vector_18"
                d="M218.8 168.339H194C191.864 168.339 190.133 170.018 190.133 172.089C190.133 174.16 191.864 175.839 194 175.839H218.8C220.936 175.839 222.667 174.16 222.667 172.089C222.667 170.018 220.936 168.339 218.8 168.339Z"
                fill="black"
              />
              <path
                id="Vector_19"
                d="M177.466 168.339H169.2C167.064 168.339 165.333 170.018 165.333 172.089C165.333 174.16 167.064 175.839 169.2 175.839H177.466C179.602 175.839 181.333 174.16 181.333 172.089C181.333 170.018 179.602 168.339 177.466 168.339Z"
                fill="black"
              />
              <g id="line_2">
                <path
                  id="Vector_20"
                  d="M218.8 93.1855H177.466C175.331 93.1855 173.599 94.8645 173.599 96.9355C173.599 99.0065 175.331 100.686 177.466 100.686H218.8C220.936 100.686 222.667 99.0065 222.667 96.9355C222.667 94.8645 220.936 93.1855 218.8 93.1855Z"
                  fill="black"
                />
              </g>
            </g>
          </svg>
        </div>
      
        <span className="Arrow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 12c0-6.627-5.373-12-12-12s-12 5.373-12 12 5.373 12 12 12 12-5.373 12-12zm-18.005-1.568l1.415-1.414 4.59 4.574 4.579-4.574 1.416 1.414-5.995 5.988-6.005-5.988z"/></svg>
        </span> 

      </div>

      <div className="RightBox">
        <div className="LettersBox">
          <div className="sent1">
            <h1 className="text1">¿Buscas un Sitio Web </h1><h1 className=" text1 ProWord" >Profesional?</h1>
          </div>
          <div className="sent2">
            <h1 className="text2">Dejáselo a los </h1><h1 className=" text2 ProWord" >Profesionales</h1>
          </div>
          <div className="sent3">
            <h1 className="text3">!Consigue el tuyo ya!</h1>
          </div>
        </div>
        <button onClick={() => window.location = "/PageBuilder/Init"} className="CreateButton">Conseguir mi sitio</button>
      </div>
    
      <span className="Loader">
        <span className="box">
          <div className="AnimBox">
            <div className="CenterBall Ball"></div>
            <div className="MiddleBall Ball"></div>
            <div className="OuterBall Ball"></div>
            <div className="ExtraOuterBall Ball"></div>
          </div>
          <h1>Loading...</h1>
        </span>

        <div className="MovingBox"></div>

      </span>
    
      {/* </section> */}

      <Block1/>

      <Block2/>

      <Block3/>
  
      <Footer/>

    </div>
  );
}

export default HomePage



