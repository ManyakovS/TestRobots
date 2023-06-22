<template>
    <div>
        <input type="checkbox" v-model="value" :id="props.id" @change="updateModelValue">
        <label :for="props.id">
            <slot></slot>
        </label>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
    id: {
        required: true,
        type: String
    }
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = () => {
    emit("update:modelValue", value.value)
}

const value = ref(false);


</script>

<style scoped lang="scss">
input[type="checkbox"]:checked,
input[type="checkbox"]:not(:checked) {
    display: none;
}

input[type="checkbox"]:checked+label,
input[type="checkbox"]:not(:checked)+label {
    display: inline-block;
    position: relative;
    padding-left: 32px;
    line-height: 1.5rem;
    cursor: pointer;
}

input[type="checkbox"]:checked+label:before,
input[type="checkbox"]:not(:checked)+label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    background-color: transparent;
}

input[type="checkbox"]:not(:checked):hover+label:before {
    content: "";
    border: 2px solid #4C5865;
}

input[type="checkbox"]:checked+label:after,
input[type="checkbox"]:not(:checked)+label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

input[type="checkbox"]:checked+label:after,
input[type="checkbox"]:not(:checked)+label:after {
    left: 6px;
    top: 6px;
    width: 13px;
    height: 8px;
    border-left: 2px solid #FF7F22;
    border-bottom: 2px solid #FF7F22;
    -webkit-transform: rotate(-55deg);
    -moz-transform: rotate(-55deg);
    -o-transform: rotate(-55deg);
    -ms-transform: rotate(-55deg);
    transform: rotate(-55deg);
}

input[type="checkbox"]:not(:checked)+label:after {
    opacity: 0;
}

input[type="checkbox"]:checked+label:after {
    opacity: 1;
}
</style>