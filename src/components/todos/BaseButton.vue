<template>
    <button type="submit">Add to the list</button>
</template>

<script setup>
</script>

<style lang="scss" scoped>
    button {
        color: #EDEDED;
        border: 1px solid #EDEDED;
        background: #171717;
        transition: all 0.3s ease;
        width: 100%;
        max-width: 500px;
        display: flex;
        justify-content: center;
        padding: 15px;
        margin: 15px auto 0;
        border-radius: 5px;
        &:hover {
            background: #444444;
            color: #EDEDED;
            border: #171717 1px solid;
            cursor: pointer;
        }
    }
</style>