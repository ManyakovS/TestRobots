<template>
    <div class="description">
        <p class="info-text">{{ props.title }}</p>
    
        <p class="sub-text">Стоимость: {{ props.cost }} монет</p>
    </div>
</template>

<script setup lang="ts">
interface description {
    title: { type: String, required: true },
    cost: { type: Number, required: true },
}
const props = defineProps<description>()
</script>

<style scoped>

.description {
    text-align: center;
}
.sub-text {
    color: #A3B8CC;
}
</style>