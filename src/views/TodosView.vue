<template>
    <div class="container">
        <h1>ToDoList</h1>
        <BaseInput label="Add a task to the todo list" />
        <h3>Tasks to do</h3>
        <ul>
            <TodoItem v-for="todo in todoStore.filteredTodos" :key="todo.id" :todo="todo" />
        </ul>
    </div>
</template>

<script setup>
import BaseInput from '../components/todos/BaseInput.vue';
import TodoItem from '../components/todos/TodoItem.vue';
import { useTodoListStore } from '../stores/todoList.js';

const todoStore = useTodoListStore()

</script>

<style lang="scss" scoped>
    .container {
        max-width: 1280px;
        padding: 0 40px 0;
        width: 100%;
        margin: auto;
    }
    h1 {
        padding: 15px 0;
        display: flex;
        justify-content: center;
    }
    h3 {
        border-bottom: 1px solid #EDEDED;
        padding-bottom: 5px;
        margin: 15px 0;
    }
    button {
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: center;
        padding: 15px;
        border-radius: 5px;
    }
</style>