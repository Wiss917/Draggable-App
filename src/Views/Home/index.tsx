/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:47:16
 * @LastEditTime: 2021-10-17 21:50:40
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Views\Home\index.tsx
 */
import Box from "Components/Box";
import React, { useReducer } from "react";
import HomeContext from "Contexts/homeContext";
import { dragReducer } from "Reducers/dragReducer";
import "./index.scss";
const Home: React.FC = () => {
	const [state, dispatch] = useReducer(dragReducer, {
		list: ["hello world"],
	});
	const content = [
		{
			backgroundColor: "#EEE0E5",
			isAdd: true,
			title: "Prepare to study",
		},
		{
			backgroundColor: "#9BCD9B",
			isAdd: false,
			title: "Learning...",
		},
		{
			backgroundColor: "#D3D3D3",
			isAdd: false,
			title: "Complete",
		},
	];
	return (
		<HomeContext.Provider value={{ state, dispatch }}>
			<div className="content">
				{content.map((item, index) => {
					return <Box {...item} key={index}></Box>;
				})}
			</div>
		</HomeContext.Provider>
	);
};

export default Home;
