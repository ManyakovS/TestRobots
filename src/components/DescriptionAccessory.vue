<template>
    <div class="description">
        <p class="info-text">{{ title }}</p>
    
        <p class="sub-text">Стоимость: {{ cost }} монет</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        title: {
            type: String
        },
        cost: {
            type: Number
        }
    }    
})
</script>

<style scoped>

.description {
    text-align: center;
}
.sub-text {
    color: #A3B8CC;
}
</style>