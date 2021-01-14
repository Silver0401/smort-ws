// Libraries

import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import "./style/css/index.css";
import anime from "animejs";
import {AnimatePresence} from "framer-motion";


// Pages

import HomePage from "./pages/Home";
import BuilderInit from "./pages/BuilderInit";
import BuilderRoot from "./pages/BuilderRoot";
import DataCenter from "./pages/DataCenter";
import BuilderFinal from "./pages/BuilderFinal";
import BuilderSuccess from "./pages/BuilderSuccess"


function App() {


	useEffect(() => {

		function MoveLoader() {
            const Loader = anime.timeline({
              easing: "easeInOutSine",
            });

            Loader.add({
              delay: 500,
              targets: ".MovingBox",
              duration: 2200,
              translateY: ["120%", "-120%"],
            });

            Loader.add(
              {
                targets: ".Loader",
                duration: 750,
                height: "0px",
              },
              "-=1700"
            );

            Loader.add(
              {
                targets: ".LeftBoxHome",
                duration: 500,
                easing: "spring(1,80,10,0)",
                opacity: [0, 1],
                translateX: ["-100%", "0%"],
              },
              "-=1000"
            );

            Loader.add(
              {
                targets: ".RightBoxHome",
                duration: 500,
                easing: "spring(1,80,10,0)",
                opacity: [0, 1],
                translateX: ["100%", "0%"],
              },
              "-=1100"
            );

            Loader.add(
              {
                targets: ".NavBar",
                duration: 2500,
                easing: "easeInOutElastic",
                opacity: [0, 1],
                translateY: ["-100px", "0px"],
              },
              "-=2500"
            );
		}

		function HomeAnimations() {
		const AnimTLletters = anime.timeline({
			easing: "easeInOutQuad",
			duration: 1000,
			delay: 400
		});

		AnimTLletters.add({
			targets: ".text1",
			translateY: ["300px", "0px"],
			opacity: [0, 1],
		});
		AnimTLletters.add({
			targets: ".text2",
			translateY: ["300px", "0px"],
			opacity: [0, 1],
		});
		AnimTLletters.add({
			targets: ".text3",
			translateY: ["300px", "0px"],
			opacity: [0, 1],
		});


		anime({
			targets: ".line",
			width: ["10%", "80%"],
			duration: 2200,
			direction: "alternate",
			loop: true,
		});
		}

		function CheckBrowser() {

			var isChrome =
			!!(window as any).chrome &&
			(!!(window as any).chrome.webstore ||
			!!(window as any).chrome.runtime);

			isChrome ? console.log("In chrome") : console.log("Not chrome");
		}


		window.onload = () => {

			MoveLoader()

			CheckBrowser()

			setTimeout(() => {
				HomeAnimations()
			}, 2000)

		}

	},[])

	return (
		<div className="App">

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

			<Switch>
				
				<AnimatePresence>

					<Route key="Home" exact path="/" component={HomePage} />
							
					<Route key="DataCenter" exact path="/DataCenter" component={DataCenter} />

					<Route key="BuilderInit" exact path="/PageBuilder/Init" component={BuilderInit} />

					<Route key="BuilderRoot" exact path="/PageBuilder/Root" component={BuilderRoot} />

					<Route key="BuilderFinal" exact path="/PageBuilder/Final" component={BuilderFinal} />
					
					<Route key="BuilderSuccess" exact path="/PageBuilder/Success" component={BuilderSuccess} />

				</AnimatePresence>

			</Switch>
		</div>
	);
}

export default App;
