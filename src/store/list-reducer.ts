import { v1 } from "uuid"


let listState = [
    {
        id: '111',
        fullName: 'Maks Fesenko',
        number: '+375295307468',
        email: 'maks.fesenko.1995@gmail.com',
    },
    {
        id: '222',
        fullName: 'Leo Messi ',
        number: '+375295307468',
        email: 'leo.messi1995@gmail.com',
    }
]
export type itemType = {
    id: string
    fullName: string,
    number: string,
    email: string,
}
export type  listStateType = itemType[]

export const listReducer = (state: listStateType = listState, action: any) => {
    switch (action.type) {
        case 'REMOVE-ITEM' :
            return state.filter(item => item.id !== action.id)
        case 'ADD-ITEM' :
            return [{id: v1(), ...action.newItem}, ...state]
        case 'EDIT-ITEM' :
            return state.map((item, index) => item.id === action.model.id ? action.model : item)
        default: return state
    }
}

export const removeItemAC = (id: string) => ({type: 'REMOVE-ITEM', id} as const)
export const addItemAC = (newItem: any) => ({type: 'ADD-ITEM', newItem} as const)
export const editItemAC = (model: any) => ({type: 'EDIT_ITEM', model} as const)