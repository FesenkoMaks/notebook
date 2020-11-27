import { combineReducers, createStore} from 'redux';
import {listReducer} from "./list-reducer";


const rootReducer = combineReducers({
    list: listReducer
})

export const store = createStore(rootReducer);
export type AppRootStateType = ReturnType<typeof rootReducer>