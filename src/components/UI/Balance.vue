<template>
    <h3 class="balance"><span>{{ props.coins }}</span> biorobo монет</h3>
</template>

<script setup lang="ts">

const props = defineProps({
    coins: {
            type: Number,
            required: true,
        }
})
</script>

<style scoped lang="scss">
.balance {
    margin-top: 2.2vh;
    color: #A3B8CC;
    font-weight: 500;

    span {
        font-weight: 700;
    }
}
</style>