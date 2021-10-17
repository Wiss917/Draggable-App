/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 14:24:54
 * @LastEditTime: 2021-10-17 15:36:27
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Views\Landing\index.tsx
 */
import { useHistory } from "react-router-dom";
import "./index.scss";
const Landing: React.FC = () => {
	const history = useHistory();
	return (
		<div className="landing">
			<button
				onClick={() => {
					history.push("/home");
				}}
			>
				Start App
			</button>
		</div>
	);
};

export default Landing;
