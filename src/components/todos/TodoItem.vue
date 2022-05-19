<template>
    <li @dblclick="todosStore.toggleFinished(todo.id)">
        <input type="text" class="edit" :class="{ isEditing: todosStore.isEdited }" v-model="todo.title" @keyup.enter="todosStore.doneEdit(todo)" name="" id="">
        <span :class="{ done: todo.isFinished }">{{ todo.title }}</span>
        <div class="btn-group">
            <button @click.prevent="todosStore.isEditing(todo.id)">Edit</button>
            <button @click.prevent="todosStore.removeTodo(todo.id)">Remove</button>
        </div>
    </li>
</template>

<script setup>
import { useTodoListStore } from '../../stores/todoList.js'
const todosStore = useTodoListStore()
    defineProps({
        todo: {
            type: Object,
        }
    })
</script>

<style lang="scss" scoped>
    input.edit {
        display: none;
    }
    input.edit.isEditing {
        display: block;
    }
    li span {

    }
    li {
        list-style-type: none;
        border: 1px solid #EDEDED;
        border-radius: 5px;
        padding: 15px;
        color: #EDEDED;
        margin-top: 15px;   
        // position: relative;
        display: flex;
        align-items: center;
    }
    .btn-group {
        margin-left: auto;
    }
    button {
        background: #171717;
        color: #DA0037;
        border: 1px solid #DA0037;
        border-radius: 4px;
        padding: 3px 6px;
        font-size: 10px;
        // position: absolute;
        transition: all 0.3s ease;
        font-weight: 400;
        margin-left: 10px;
        &:hover {
            cursor: pointer;
            background: #DA0037;
            color: #171717;
            font-weight: 700;
        }
    }
    span.done {
        text-decoration: line-through;
    }
</style>