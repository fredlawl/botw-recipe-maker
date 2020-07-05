import React from 'react';
import {Link, Route, Switch} from 'react-router-dom';
import './App.scss';
import Main from "./pages/Main";
// import About from "./pages/About";

const App = () => {
	return (
		<div>
			<div className={"navigation"}>
				<Link to={"/"} title={"BOTW Meal Planner"}>BOTW Meal Planner</Link>
				<nav>
					{/*<Link to={"/about"} title={"About"}>About</Link>*/}
				</nav>
			</div>
			<div className={"app"}>
				<Switch>
					<Route path="/" component={Main} exact />
					{/*<Route path="/about" component={About} />*/}
				</Switch>
			</div>
		</div>
	);
}

export default App;
