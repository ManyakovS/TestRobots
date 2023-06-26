<template>
    <button class="link"><slot></slot></button>
</template>

<style scoped lang="scss">
    .link {
        color: #FF7F22;
        border-bottom: 1px solid #FF7F22;
        transition: all .05s ease-in;
        max-width: fit-content;

        &:hover {
            color: #FF5722;
            border-bottom: 1px solid #FF5722;
        }

        &:active {
            color: #FF7F22;
            border-color:  transparent;
        }

        &:disabled {
            color: #4C5865;
            border-color:  transparent;
        }
    }
</style>