import {combineReducers, legacy_createStore as createStore} from "redux";
import {TasksReducer} from "bll/reducers/tasksReducer";
import { ModalReducer } from 'bll/reducers/modalReducer';


const rootReducer=combineReducers({
    tasks:TasksReducer,
    modal:ModalReducer

})
let preloaderState;
const persistedTodoTask = localStorage.getItem('tasks')
if(persistedTodoTask){
    preloaderState = JSON.parse(persistedTodoTask)
}
export type StateType =ReturnType<typeof rootReducer>
export const store = createStore(rootReducer,preloaderState)


store.subscribe(()=>{
    localStorage.setItem('tasks',JSON.stringify(store.getState().tasks.tasks))
})



// @ts-ignore
window.store = store
