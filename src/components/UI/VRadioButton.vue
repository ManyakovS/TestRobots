<template>
    <div>
        <input type="radio" name="rb" id="rb3"> <label for="rb3">Переключатель 3</label>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    setup() {


        return {}
    }
})
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