import actionsTypes from "./actionTypes";
import store from "../store";

export const addTask = (task) => {
    store.dispatch({ type: actionsTypes.ADD_TASK, payload: { task } })
}

export const removeTask = (id) => {
    store.dispatch({ type: actionsTypes.REMOVE_TASK, payload: { id } })
}

export const completeTask = (id) => {
    store.dispatch({ type: actionsTypes.COMPLETE_TASK, payload: { id } })
}