import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid';

export const useTodoListStore = defineStore('todoList', {
    state: () => {
        return {
            title: "",
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
            isEdited: null,
            
        }
    },
    getters: {
        remaining(state) {
            return state.todos.filter(todo => !todo.isFinished).length
        },
        filteredTodos(state) {
            if(state.showTodos === "All") {
                return state.todos.filter(todo => todo)
            }
            if(state.showTodos === "Done") {
                return state.todos.filter(todo => todo.isFinished)
            }
            if(state.showTodos === "Undone") {
                return state.todos.filter(todo => !todo.isFinished)
            }
        }
    },
    actions: {
        addTodo(item) {
            if(item.length === 0) return
            this.todos.push({
                id: uuidv4(),
                title: item,
                isFinished: false
            })
            this.title = ""
        },
        removeTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        toggleFinished(id) {
            let item = this.todos.find(todo => todo.id === id)
            item.isFinished === false ? item.isFinished = true : item.isFinished = false
        },
        showTodosAction(param) {
            this.showTodos = param
        },
        removeTodo(todo) {
            const index = this.todos.indexOf(todo)
            this.todos.splice(index, 1)
        },
        doneEdit(todo) {
            if(!this.isEdited) {
                return
            }
            this.isEdited = null
            todo.title = todo.title.trim()
            if(!todo.title) {
                this.removeTodo(todo)
            }
        },
        isEditing(id) {   
            let item = this.todos.find(todo => todo.id === id)
            this.beforeEditCache = item.title
            this.isEdited = item 
        }
    }
})