/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:18:24
 * @LastEditTime: 2021-10-17 15:45:07
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\index.tsx
 */
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
