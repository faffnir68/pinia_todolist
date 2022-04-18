<template>
    <li>
        <span>{{ todo.name }}</span>
        <button>Remove</button>
    </li>
</template>

<script setup>
    defineProps({
        todo: {
            type: Object,
        }
    })
</script>

<style lang="scss" scoped>
    li {
        list-style-type: none;
        border: 1px solid #EDEDED;
        border-radius: 5px;
        padding: 15px;
        color: #EDEDED;
        margin-top: 15px;   
        position: relative;
    }
    button {
        background: #171717;
        color: #DA0037;
        border: 1px solid #DA0037;
        border-radius: 4px;
        padding: 3px 6px;
        font-size: 10px;
        position: absolute;
        right: 10px;
        left: auto;
        top: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        font-weight: 400;
        &:hover {
            cursor: pointer;
            background: #DA0037;
            color: #171717;
            font-weight: 700;
        }
    }
</style>