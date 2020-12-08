import React from 'react';
import { Route, Switch, useHistory } from "react-router-dom";
import "./style/css/index.css";
import {ChosenDataProvider} from "./components/ChosenData";

// Pages

import HomePage from "./pages/Home";
import BuilderInit from "./pages/BuilderInit";
import BuilderRoot from "./pages/BuilderRoot";



function App() {

	let Chosen = "none"
	let history = useHistory()

	const saveChosen = (chosen: string) => {
		Chosen = chosen

		if (Chosen !== "none") {
			setTimeout(() => {
				history.push("Root")
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
