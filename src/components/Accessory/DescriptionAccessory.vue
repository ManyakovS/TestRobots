<template>
    <div class="description">
        <p class="info-text">{{ props.title }}</p>
    
        <p class="sub-text">Стоимость: {{ getNoun(props.cost, "монету", "монеты", "монет") }}</p>
    </div>
</template>

<script setup lang="ts">
import { getNoun }  from '../../functions/grammaticalFunctions'
interface description {
    title: { type: String, required: true },
    cost: { type: Number, required: true},
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