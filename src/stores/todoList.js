import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => {
        return {
            todos: [
                {
                    id: 1,
                    name: "Appointment to the doctor",
                    isFinished: false
                },
                {
                    id: 2,
                    name: "Starting lunch break",
                    isFinished: false
                },
                {
                    id: 3,
                    name: "Going to Japan",
                    isFinished: true
                }
            ]
        }
    },
    getters: {
        filteredTodos(state) {
            return this.todos
        }
    },
    actions: {

    }
})