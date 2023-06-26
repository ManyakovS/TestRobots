<template>
    <div class="radio-group__container">
        <p>
            <slot></slot>
        </p>

        <div class="radio-group">
            <radio-button v-for="user in props.list" :value="user.name" :key="user.name">{{ user.name }}</radio-button>
        </div>

    </div>
</template>

<script setup lang="ts">
import { provide, computed} from 'vue'
import RadioButton from './UI/RadioButton.vue';

const props = defineProps({
    'modelValue':{
        type: String
    },
    list:{
        required: true,
        type: Array<{name: string}>
    }
})
const emit = defineEmits(['update:modelValue'])

provide('radioGroupValue', computed({
    get: () => props.modelValue,
    set: v => emit('update:modelValue', v),
}))





</script>

<style scoped lang="scss">
.radio-group__container {
    width: 100%;
}

p {
    margin: 2.9vh 0 1.6vh 0;
}

.radio-group {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
}

</style>