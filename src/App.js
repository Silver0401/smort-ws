import React from 'react';
import { Route, Switch } from "react-router-dom";
import "./style/css/index.css";

// Pages

import HomePage from "./pages/Home";
import BuilderPage from "./pages/Builder";



function App() {
  return (
	<div className="App">
		
		<Switch>

			<Route exact path="/" component={HomePage} />

			<Route exact path="/PageBuilder" component={BuilderPage} />

		</Switch>

	</div>
  );
}

export default App;
