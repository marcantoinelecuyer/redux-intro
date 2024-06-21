import { addTask, completeTask, removeTask } from "./store/tasks/action";
import store from "./store/store";

const unsubscribe = store.subscribe(() => {
    console.log("Updated", store.getState());
})

addTask("Task 1")
addTask("Task 2")

completeTask(0)

unsubscribe()

removeTask(0)

