/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:45:53
 * @LastEditTime: 2021-10-17 14:58:40
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Router\index.tsx
 */
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "Views/Landing";
import Home from "Views/Home";

export default function IRouter() {
	return (
		<BrowserRouter>
			<Switch>
				<Route path="/Landing" component={Landing}></Route>
				<Route path="/home" component={Home}></Route>
			</Switch>
		</BrowserRouter>
	);
}
