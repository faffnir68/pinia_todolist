<template>
    <form action="" @submit.prevent="todos.addTodo(todoTitle)">
        <fieldset>
            <legend>Add a todo</legend>
            <label for="todo-input">{{ label }}</label>    
            <input type="text" v-model="todoTitle" name="" id="" :placeholder="label" :aria-label="label">
        </fieldset>
        <BaseButton />
    </form>
</template>

<script setup>
import BaseButton from './BaseButton.vue';
import { useTodoListStore } from '../../stores/todoList.js';

const todos = useTodoListStore()

    defineProps({
        label: {
            type: String,
            default: ""
        }
    })
</script>

<style lang="scss" scoped>
    input {
        color: #EDEDED;
        border: 2px solid #444444;
        background: #171717;
        border-radius: 5px;
        outline: #444444;
        width: 100%;
        max-width: 500px;
        height: 48px;
        margin: 15px auto 15px;
        padding: 15px;
        font-size: 16px;
    }
    legend {
        margin-left: 15px;
        padding: 0 5px;
        font-size: 20px;
    }
    fieldset {
        outline: none;
        border: 1px solid #444444;
        display: flex;
        padding: 15px;
        flex-direction: column;
    }
    label {
        font-size: 14px;
        width: 100%;
        max-width: 500px;
        margin: auto;
        text-align: center;
    }
</style>