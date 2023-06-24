<template>
    <h3 class="title">
        <slot></slot>
    </h3>
</template>

<style scoped lang="scss">
    .title {
        margin-bottom: 5.5vh;
        font-size: 1.5rem;
        line-height: 2rem;
    }

    @media screen and (max-width: 767px) {
        .title {
            margin-bottom: 2.5vh;
            text-align: center;
        }
    }
</style>