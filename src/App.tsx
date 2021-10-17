/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:18:24
 * @LastEditTime: 2021-10-17 18:17:15
 * @LastEditors: Wisszeix
 * @Description: root element
 * @FilePath: \Draggable-App\src\App.tsx
 */
import { Switch, BrowserRouter, Route, Redirect } from "react-router-dom";
import Landing from "Views/Landing";
import Home from "Views/Home";
import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<Redirect to="/landing"></Redirect>
					</Route>
					<Route path="/landing" component={Landing} />
					<Route path="/home" component={Home} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
