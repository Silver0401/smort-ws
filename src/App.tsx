import React, { useState } from 'react';
import { Route, Switch } from "react-router-dom";
import "./style/css/index.css";
import {ChosenDataProvider} from "./components/ChosenData";

// Pages

import HomePage from "./pages/Home";
import BuilderInit from "./pages/BuilderInit";
import BuilderRoot from "./pages/BuilderRoot";



function App() {

	let Chosen = "none"
	// const [thingy, setThingy] = useState("none")

	const saveChosen = (chosen: string) => {
		Chosen = chosen

		if (Chosen !== "none") {
			setTimeout(() => {
				window.location.href = "/PageBuilder/Root"
			},1000) 
		}
	}


  return (
	<div className="App">
		
		<Switch>

			<Route exact path="/" component={HomePage} />

			<ChosenDataProvider>

				<Route exact path="/PageBuilder/Init" component={() => <BuilderInit Chosen={(page:string) => saveChosen(page)} />} />

				<Route exact path="/PageBuilder/Root">
					<BuilderRoot/>
				</Route>

			</ChosenDataProvider>

		</Switch>

	</div>
  );
}

export default App;
