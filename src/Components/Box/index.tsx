/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 16:00:22
 * @LastEditTime: 2021-10-17 22:17:52
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Components\Box\index.tsx
 */
import { PlusCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import { useState, useCallback, useContext } from "react";
import HomeContext from "Contexts/homeContext";
import "./index.scss";
const Box: React.FC<{
	backgroundColor: string;
	isAdd: boolean;
	title: string;
}> = ({ backgroundColor, isAdd, title }) => {
	const {
		state: { list },
		dispatch,
	} = useContext(HomeContext);
	const [items, setItems] = useState<Array<string>>([]);
	const [contentClassName, setContentClassName] = useState("box-content");

	const isMax = isAdd ? list.length > 4 : items.length > 4;

	// 添加事件
	const handleClick = useCallback(() => {
		if (isMax) {
			alert("待办项已满");
			return;
		}
		dispatch({
			action: "addItem",
			value: {
				item: "",
			},
		});
	}, [isMax, dispatch]);

	// 添加按钮
	const AddButton = isAdd ? (
		<button onClick={handleClick}>
			<PlusCircleOutlined />
		</button>
	) : null;

	const itemList = (isAdd ? list : items).map((item, index) => {
		return isAdd ? (
			<input
				type="text"
				value={item}
				key={index}
				draggable={true}
				onDragStart={(e) => {
					e.dataTransfer.setData("value", index.toString());
				}}
				onDragEnd={(e) => {}}
				onChange={(e) => {
					dispatch({
						action: "changeItem",
						value: {
							index,
							item: e.target.value,
						},
					});
				}}
			/>
		) : (
			<div className="item" key={index}>
				{item}
				<CloseCircleOutlined
					className="close-icon"
					onClick={() => {
						setItems((items) => items.filter((_, i) => i !== index));
					}}
				/>
			</div>
		);
	});

	return (
		<div className="box">
			<div className="box-title" style={{ backgroundColor }}>
				<span>{title}</span>
			</div>
			<div
				className={contentClassName}
				onDragOver={
					!isAdd
						? (e) => {
								e.preventDefault();
						  }
						: undefined
				}
				onDragEnter={
					!isAdd
						? (e) => {
								const dragEnterClassName = "box-content drag-enter";
								if (contentClassName !== dragEnterClassName)
									setContentClassName(dragEnterClassName);
						  }
						: undefined
				}
				onDrop={
					!isAdd
						? (e) => {
								e.preventDefault();
								const index = +e.dataTransfer.getData("value");
								setItems((items) => [
									...items,
									list.find((_, i) => i === index) || "",
								]);
								dispatch({
									action: "onDrop",
									value: {
										index,
									},
								});
						  }
						: undefined
				}
				style={{ backgroundColor }}
			>
				{itemList}
				{AddButton}
			</div>
		</div>
	);
};

export default Box;
