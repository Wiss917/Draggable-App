/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 16:00:22
 * @LastEditTime: 2021-10-17 16:24:36
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Components\Box\index.tsx
 */
import "./index.scss";
const Box: React.FC<{
	backgroundColor: string;
	boxType: string;
	title: string;
}> = ({ backgroundColor, boxType, title }) => {
	return (
		<div className="box">
			<div className="box-title" style={{ backgroundColor }}>
				<span>{title}</span>
			</div>
			<div className="box-content" style={{ backgroundColor }}>
				hello
			</div>
		</div>
	);
};

export default Box;
