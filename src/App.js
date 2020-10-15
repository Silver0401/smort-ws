import React from 'react';
import { Route, Switch } from "react-router-dom";
import "./style/css/index.css";

// Pages

import HomePage from "./pages/Home";
import BuilderInit from "./pages/BuilderInit";
import BuilderRoot from "./pages/BuilderRoot";



function App() {

	let Chosen = "none"
	// const [thingy, setThingy] = useState("none")

	const saveChosen = (chosen) => {
		Chosen = chosen

		if (Chosen !== "none") {
			setTimeout(() => {
				window.location = "/PageBuilder/Root"
			},1500) 
		}
	}


  return (
	<div className="App">
		
		<Switch>

			<Route exact path="/" component={HomePage} />

			<Route exact path="/PageBuilder/Init" component={() => <BuilderInit Chosen={(page) => saveChosen(page)} />} />

			<Route exact path="/PageBuilder/Root">
				<BuilderRoot Chosen={Chosen}/>
			</Route>

		</Switch>

	</div>
  );
}

export default App;
