// Libraries

import React, { useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import "./style/css/index.css";
import {ChosenDataProvider} from "./components/ChosenData";
import anime from "animejs";

// Pages

import HomePage from "./pages/Home";
import BuilderInit from "./pages/BuilderInit";
import BuilderRoot from "./pages/BuilderRoot";
import DataCenter from "./pages/DataCenter";
import BuilderFinal from "./pages/BuilderFinal";



function App() {

	useEffect(() => {

		window.onload = () => {

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
			duration: 1000,
			easing: "easeInOutQuad",
			opacity: [0, 1],
			translateX: ["-100%", "0%"],
			},
			"-=1000"
		);

		Loader.add(
			{
			targets: ".RightBoxHome",
			duration: 1000,
			easing: "easeInOutQuad",
			opacity: [0, 1],
			translateX: ["100%", "0%"],
			},
			"-=1000"
		);

		Loader.add(
			{
			targets: ".NavBar",
			duration: 2500,
			easing: "easeInOutElastic",
			opacity: [0, 1],
			translateY: ["-100px", "0px"],
			},
			"-=1500"
		);
			}

			MoveLoader()
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
        <Route exact path="/" component={HomePage} />

        <ChosenDataProvider>
          <Route exact path="/PageBuilder/Init" component={BuilderInit} />

          <Route exact path="/PageBuilder/Root" component={BuilderRoot} />

          <Route exact path="/PageBuilder/Final" component={BuilderFinal} />

		  <Route exact path="/DataCenter" component={DataCenter} />
        </ChosenDataProvider>
		
      </Switch>
    </div>
  );
}

export default App;
