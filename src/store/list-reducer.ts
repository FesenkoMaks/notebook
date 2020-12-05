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
export type formType = {
    fullName: string,
    number: string,
    email: string,
}


export type  listStateType = itemType[]

export const listReducer = (state: listStateType = listState, action: ActionType) => {
    debugger
    switch (action.type) {
        case 'REMOVE-ITEM' :
            return state.filter(item => item.id !== action.id)
        case 'ADD-ITEM' :
            return [{id: v1(), ...action.newItem}, ...state]
        case 'EDIT_ITEM' :
            return state.map(item => item.id === action.id ? action.model : item)
        default: return state
    }
}

export const removeItemAC = (id: string) => ({type: 'REMOVE-ITEM', id} as const)
export const addItemAC = (newItem: formType) => ({type: 'ADD-ITEM', newItem} as const)
export const editItemAC = (model: formType, id: string) => ({type: 'EDIT_ITEM', model ,id} as const)

type ActionType = removeItemACType | addItemACType | editItemACType

export type removeItemACType = ReturnType<typeof removeItemAC>
export type addItemACType = ReturnType<typeof addItemAC>
export type editItemACType = ReturnType<typeof editItemAC>