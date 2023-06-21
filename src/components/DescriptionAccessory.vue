<template>
    <p class="info-text">{{ title }}</p>

    <p class="sub-text">Стоимость: {{ cost }} монет</p>
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
.info-text {
    margin-top: 5vh;
}

.sub-text {
    color: #A3B8CC;
}
</style>