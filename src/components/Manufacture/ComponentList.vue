<template>
    <div class="list">
        <v-check-box-icon v-for="i in props.component.required" :key="i" :id="`${props.component.type}-checkbox-${i}`" :type="props.component.type"
            :isDisabled="status[i - 1]" 
            @toggle="toggleComponent"/>
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, PropType } from 'vue'
import { useRobotStore } from "../../stores/RobotStore"
import VCheckBoxIcon from '../UI/VCheckBoxIcon.vue';
import Components from '../../Types/Components'

const robotStore = useRobotStore();

const props = defineProps({
    component: Object as PropType<Components>
})

let complete = props.component.completed

let installed = computed(() => {return props.component.installed})
let available = computed(() => {return props.component.available})

let status = ref([true, true, true, true])

const enableItem = () => {

    if (available.value <= props.component.required) {
        console.log('3')
        if (available.value - installed.value > 0) {
            console.log('4')
            status.value[available.value - 1] = false
        }

    }
    return status;
}

const disableItem = () => {
    if (available.value <= props.component.required) {
        console.log('5')
        if (installed.value - available.value <= 0) {
            status.value[available.value] = true
        }
    }
    return status;
}

const toggleComponent = (id: string, status: boolean) => {
    let type: string = id.split('-')[0];
    if(status)
        robotStore.installComponent(type)
    else
        robotStore.putAwayComponent(type)
}

watch(
    () => available.value,
    (newValue, oldValue) => {
        if (newValue! > oldValue!) {
            status = enableItem()
        }
        else {
            console.log('new' + newValue)
            console.log('installed' + installed.value)
            console.log('old' + oldValue)
            if(newValue + installed.value !== oldValue){

                status = disableItem()
                console.log('1')

            }
        }
    },
    { deep: true }
)

watch(
    () => installed.value,
    () => {
        robotStore.setCompleted(props.component.type)
    },
    { deep: true }
)

watch(
    () => robotStore.accessoryCompleted.value,
    () => {
        for (let index = 0; index < status.value.length; index++) {
            status.value[index] = true;
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