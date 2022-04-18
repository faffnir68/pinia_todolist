import { defineStore } from 'pinia'

export const useTodoListStore = defineStore('todoList', {
    state: () => {
        return {
            todos: [
                {
                    id: 1,
                    title: "Appointment to the doctor",
                    isFinished: false
                },
                {
                    id: 2,
                    title: "Starting lunch break",
                    isFinished: false
                },
                {
                    id: 3,
                    title: "Going to Japan",
                    isFinished: true
                }
            ],
            showTodos: 'All',


        }
    },
    getters: {
        isFinished(state) {
            return this.todos.filter(todo => todo.isFinished)
        },
        isNotFinished(state) {
            return this.todos.filter(todo => !todo.isFinished)
        },
        filteredTodos(state) {
            if(this.showTodos === "Finished") {
                return this.isFinished
            }
            else if (this.showTodos === "Not finished") {
                return this.isNotFinished
            }
            else {
                return this.todos
            }
        }
    },
    actions: {
        addTodo(title) {
            this.todos.push({
                id: 8,
                title,
                isFinished: false
            })
        }
    }
})