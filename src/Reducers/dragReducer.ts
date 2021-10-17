import { Dispatch } from "react";

/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 21:35:37
 * @LastEditTime: 2021-10-17 22:14:24
 * @LastEditors: Wisszeix
 * @Description:
 * @FilePath: \Draggable-App\src\Reducers\DragReducer.ts
 */
interface DragState {
	list: Array<string>;
}

interface DragAction {
	action: string;
	value: Partial<{
		index: number;
		item: string;
	}>;
}

const dragReducer: React.Reducer<DragState, DragAction> = (
	{ list },
	{ action, value: { index, item } }
) => {
	switch (action) {
		case "onDrop": {
			return {
				list: list.filter((_, i) => i !== index),
			};
		}
		case "addItem": {
			return {
				list: [...list, ""],
			};
		}
		case "changeItem": {
			if ((!index && typeof index !== "number") || !item) {
				throw new Error("请检查入参");
			}
			list[index] = item;
			return {
				list: [...list],
			};
		}
		default:
			return {
				list: [...list],
			};
	}
};

export { dragReducer };
export interface DragReducerProps {
	state: DragState;
	dispatch: Dispatch<DragAction>;
}
