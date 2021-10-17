/*
 * @Author: Wisszeix
 * @Date: 2021-10-17 21:34:45
 * @LastEditTime: 2021-10-17 21:49:31
 * @LastEditors: Wisszeix
 * @Description: 
 * @FilePath: \Draggable-App\src\Contexts\HomeContext.ts
 */
import {DragReducerProps} from 'Reducers/dragReducer'
import {createContext} from 'react'
const homeContext = createContext<DragReducerProps>({ state: {
    list: []
}, dispatch: (): void=> {}});

export default homeContext
