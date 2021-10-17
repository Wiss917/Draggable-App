/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:47:16
 * @LastEditTime: 2021-10-17 16:40:29
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Views\Home\index.tsx
 */
import Box from "Components/Box";
import "./index.scss";
const Home: React.FC = () => {
	const content = [
		{
			backgroundColor: "#EEE0E5",
			boxType: "add",
			title: "Prepare to study",
		},
		{
			backgroundColor: "#9BCD9B",
			boxType: "delete",
			title: "Learning...",
		},
		{
			backgroundColor: "#D3D3D3",
			boxType: "delete",
			title: "Complete",
		},
	];
	return (
		<div className="content">
			{content.map((item, index) => {
				return <Box {...item} key={index}></Box>;
			})}
		</div>
	);
};

export default Home;
