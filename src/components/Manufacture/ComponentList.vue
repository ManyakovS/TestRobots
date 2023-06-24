<template>
    <div class="list" v-if="isLoading">
        <v-check-box-icon v-for="i in props.component.required" :key="i" :id="`${props.component.type}-checkbox-${i}`"
            :type="props.component.type" :isDisabled="status[i - 1]" @toggle="toggleComponent" />
    </div>
</template>

<script setup lang="ts">
import { ref, watch, computed, PropType, onMounted } from 'vue'
import { useRobotStore } from "../../stores/RobotStore"
import VCheckBoxIcon from '../UI/VCheckBoxIcon.vue';
import Components from '../../Types/Components'

const robotStore = useRobotStore();

const props = defineProps({
    component: Object as PropType<Components>
})

const isLoading = ref(false)

let complete = props.component.completed

const installed = computed(() => { return props.component.installed })
const available = computed(() => { return props.component.available })

const status: any = ref([]);

const enableItem = ():void => {
    let index = status.value.findIndex(s => s == 'disabled')
    status.value[index] = 'available'


}

const disableItem = ():void => {
    let index = status.value.findLastIndex(s => s == 'available')
    status.value[index] = 'disabled'

}

const toggleComponent = (id: string, state: string) => {
    let type: string = id.split('-')[0];

    const index = Number.parseInt(id.split('-')[2]) - 1
    status.value[index] = state

    if (state == 'installed')
        robotStore.installComponent(type)
    else
        robotStore.putAwayComponent(type)
}

watch(() =>
    ([available.value, installed.value]),
    (newValues, prevValues) => {
        if(newValues[0] > prevValues[0]){
            if(newValues[0] + newValues[1] != prevValues[0] + prevValues[1]){
                enableItem()
            }
        }
        else if(newValues[1] <= prevValues[1] && newValues[0] + newValues[1] < props.component.required)
            disableItem()
    },
    { deep: true }
)

/* Проверк, что все компоненты установлены */
watch(
    () => installed.value,
    () => {
        robotStore.setCompleted(props.component.type)
    },
    { deep: true }
)

onMounted(() => {
    for (let index = 0; index < props.component.required; index++) {
        status.value.push('disabled');
    }
    isLoading.value = true;
})

</script>

<style scoped lang="scss">
.list {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.2vh;
}
</style>