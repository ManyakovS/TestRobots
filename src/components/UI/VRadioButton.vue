<template>
    <div>
        <input type="radio" v-model="props.value" :id="props.id" @change="updateModelValue">
        <label :for="props.id">
            <slot></slot>
        </label>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    id: {
        required: true,
        type: String
    },
    value: {
        required: true,
        type: String,
    }
})

const emit = defineEmits(['update:modelValue'])

const updateModelValue = () => {
    emit("update:modelValue", props.value)
}

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
    padding-left: 28px;
    line-height: 20px;
    cursor: pointer;
}

input[type="radio"]:checked+label:before,
input[type="radio"]:not(:checked)+label:before {
    content: "";
    position: absolute;
    left: 0px;
    top: 0px;
    width: 18px;
    height: 18px;
    border: 1px solid #dddddd;
    background-color: #ffffff;
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
    left: 5px;
    top: 5px;
    width: 10px;
    height: 10px;
    border-radius: 100%;
    background-color: #e145a3;
}

input[type="radio"]:not(:checked)+label:after {
    opacity: 0;
}

input[type="radio"]:checked+label:after {
    opacity: 1;
}
</style>