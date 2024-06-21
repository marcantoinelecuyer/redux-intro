import actionsTypes from "./actionTypes";

let id = 0
const reducer = (state = [], action) => {

    switch (action.type) {
        case actionsTypes.ADD_TASK:
            return [...state, {
                id: id++,
                task: action.payload.task,
                completed: false
            }]
        case actionsTypes.REMOVE_TASK:
            return state.filter(task => task.id !== action.payload.id)

        case actionsTypes.COMPLETE_TASK:
            return state.map(task => {
                if (task.id === action.payload.id) task.completed = true
                return task
            })
        default:
            return state;
    }
}

export default reducer