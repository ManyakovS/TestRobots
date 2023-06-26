<template>
    <div>
        <input type="radio" :value="props.value" v-model="radioGroupValue" :id="props.value"/>
        <label :for="props.value">
            <slot></slot>
        </label>
    </div>
</template>

<script setup lang="ts">
import { inject } from 'vue'


const props = defineProps(['value'])

const radioGroupValue = inject('radioGroupValue')

</script>

<style scoped lang="scss">
input[type="radio"]:checked,
input[type="radio"]:not(:checked) {
    position: absolute;
    left: -9999px;
}

input[type="radio"]:checked+label,
input[type="radio"]:not(:checked)+label {
    display: inline-block;
    position: relative;
    padding-left: 32px;
    line-height: 24px;
    cursor: pointer;
}

input[type="radio"]:checked+label:before,
input[type="radio"]:not(:checked)+label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 24px;
    height: 24px;
    border: 2px solid #A3B8CC;
    background-color: transparent;
}

input[type="radio"]:checked+label:before,
input[type="radio"]:not(:checked)+label:before {
    border-radius: 100%;
}

input[type="radio"]:checked+label:after,
input[type="radio"]:not(:checked)+label:after {
    content: "";
    position: absolute;
    -webkit-transition: all 0.2s ease;
    -moz-transition: all 0.2s ease;
    -o-transition: all 0.2s ease;
    transition: all 0.2s ease;
}

input[type="radio"]:checked+label:after,
input[type="radio"]:not(:checked)+label:after {
    left: 4px;
    top: 4px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    background-color: #FF7F22;
}

input[type="radio"]:not(:checked)+label:after {
    opacity: 0;
}

input[type="radio"]:checked+label:after {
    opacity: 1;
}
</style>