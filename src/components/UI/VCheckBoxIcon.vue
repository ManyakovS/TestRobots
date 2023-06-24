<template>
    <div>
        <input type="checkbox" v-model="value" :id="props.id" @change="updateModelValue" :disabled="isDisabled">
        <label :class="{ 'disabled': isDisabled }" :for="props.id">
            <slot></slot>
            <microchip v-if="props.type === 'microchip'" class="icon" :class="{ 'icon__disabled': isDisabled }">
            </microchip>
            <soul v-else-if="props.type === 'soul'" class="icon" :class="{ 'icon__disabled': isDisabled }"></soul>
            <biohand v-else-if="props.type === 'biohand'" class="icon" :class="{ 'icon__disabled': isDisabled }">
            </biohand>

        </label>
    </div>
</template>

<script setup lang="ts">
import { watch, ref, computed } from 'vue'
import Microchip from '../SVG/Microchip.vue'
import Soul from '../SVG/Soul.vue'
import Biohand from '../SVG/Biohand.vue'

const props = defineProps({
    id: {
        required: true,
        type: String
    },
    type: {
        required: true,
        type: String,
        validator(value: string) {
            return ['microchip', 'soul', 'biohand'].includes(value)
        }
    },
    isDisabled: {
        required: true,
        type: String,
        validator(value: string) {
            return ['disabled', 'available', 'installed'].includes(value)
        }
    }
})

const emit = defineEmits(['toggle'])

const updateModelValue = () => {
    let status;
    value.value == true ? status = 'installed' : status = 'available';
    emit("toggle", props.id, status)

}

const value = ref(false);

const input = document.querySelector(`#${props.id}`)

watch(
    () => props.isDisabled,
    (newValue) => {
        if (newValue) {
            let input = document.querySelector(`#${props.id}`)
            input.checked = false
        }
    },
    { deep: true }
)

const isDisabled = computed(() => {
    if(props.isDisabled == 'disabled')
        return true
    else if(props.isDisabled == 'installed') {
        let input = document.querySelector(`#${props.id}`)
        input.checked = true
    }
    else
        return false
})


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
    display: block;
    position: relative;
    margin-top: 3px;
    margin-left: -32px;
    width: 48px;
    height: 48px;
    background-color: #333940;
    border-radius: 4px;
    cursor: pointer;
}

.icon {
    fill: #FFF;
    position: absolute;
    width: 30px;
    height: 100%;
    min-height: 28px;
    max-height: 34px;
    top: 10px;
    left: 9px;
    cursor: pointer;

    &__disabled {
        fill: #4C5865;
        cursor: default;
    }
}

.disabled::before {
    cursor: default !important;
}


input[type="checkbox"]:checked+label>.icon,
input[type="checkbox"]:checked+label:before,
.icon {
    -webkit-transition: all 0.4s ease;
    -moz-transition: all 0.4s ease;
    -o-transition: all 0.4s ease;
    transition: all 0.4s ease;
}

input[type="checkbox"]:checked+label:before {
    border: 2px solid #FF7F22;
}

input[type="checkbox"]:checked+label>.icon {
    fill: #FF7F22;
}</style>