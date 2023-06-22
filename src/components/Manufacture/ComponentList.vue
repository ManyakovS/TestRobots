<template>
    <div class="list">
        <v-check-box-icon v-for="i in props.count" :key="i" :id="`${props.type}-checkbox-${i}`" :type="props.type"
            :isDisabled="status[i - 1]" />
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRobotStore } from "../../stores/RobotStore"
import VCheckBoxIcon from '../UI/VCheckBoxIcon.vue';

const robotStore = useRobotStore();

const props = defineProps({
    count: {
        type: Number,
        required: true
    },
    type: {
        required: true,
        type: String,
        validator(value: string) {
            return ['microchip', 'soul', 'biohand'].includes(value)
        }
    }
})

let complete = ref<number>(0)
const item = robotStore.inventory.find(i => i.name == props.type)
let status = ref([true, true, true, true])

const enableItem = () => {

    if (complete.value < props.count) {

        if (item?.count! - complete.value > 0) {

            status.value[complete.value] = false
            complete.value++
        }
    }
    else
        complete.value++


    return status;
}

const disableItem = () => {

    if (complete.value > props.count) {
        complete.value--
    }
    else {
        if (complete.value - item?.count! >= 0) {
            console.log(complete.value)

            status.value[complete.value - 1] = true
            complete.value--
        }
    }

    return status;
}

watch(
    () => item?.count,
    (newValue, oldValue) => {
        if (newValue! > oldValue!) {
            status = enableItem()
        }
        else {
            status = disableItem()
        }
    },
    { deep: true }
)

</script>

<style scoped lang="scss">
.list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2vh;
}
</style>