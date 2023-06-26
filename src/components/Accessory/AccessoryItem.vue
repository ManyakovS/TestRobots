<template>
    <div class="item" :class="props.accessory?.type == 'Market' ? 'market__item' : 'stock__item'">
        <img v-if="props.accessory?.type == 'Market'" :src="link" alt="">

        <description-accessory class="description" :cost="props.accessory?.cost" :title="props.accessory?.title" />

        <p v-if="props.accessory?.type == 'Stock'" class="info-text">{{ props.accessory?.count }} шт</p>

        <w-button class="item-button" 
        :color="optionsButton?.color" 
        :type="optionsButton?.type" 
        :disabled="isDisabled"
        @click="clickButton"
        >
            {{ optionsButton?.text }}
        </w-button>
    </div>
</template>

<script setup lang="ts">
import { computed, PropType, ref, watch } from "vue";
import { useRobotStore } from "../../stores/robotStore"
import DescriptionAccessory from "./DescriptionAccessory.vue";
import {accessoryType} from '../stores/types/types'
import WButton from '../UI/Button.vue'

const props = defineProps({
    accessory: {
        type: Object as PropType<accessoryType>,
        required: true
    }
})
const robotStore = useRobotStore();

const optionsButton = computed(() => {
    if (props.accessory?.type === 'Market')
        return { color: 'orange', type: 'fill', text: 'Установить' }
    else if (props.accessory?.type === 'Stock')
        return { color: 'blue', type: 'stroke', text: 'Продать' }
})

const link = computed(() => {
    return `/src/assets/${props.accessory.name}.svg`
})

const clickButton = () => {
    if(props.accessory.type === 'Market')
        robotStore.buyAccessory(props.accessory.name)
    else if (props.accessory.type === 'Stock')
        robotStore.sellAccessory(props.accessory.name)
}

const disabledMarket = (coins: number, cost: number): boolean => {
    if (coins < cost)
        return true
    else
        return false;
};
const disabledStock = (count: number): boolean => {
    if (count < 1)
        return true
    else
        return false;
}
const disabled = (coin: number = robotStore.coin, count: number = robotStore.inventory.find(i => i.name == props.accessory.name)?.count!) => {
    if (props.accessory.type === 'Market')
        return disabledMarket(coin, props.accessory.cost);
    else if (props.accessory.type === 'Stock')
        return disabledStock(count);
}
let isDisabled = ref(disabled());

watch(() => robotStore.coin, (coin: number): void => {
    isDisabled.value = disabled(coin)!
})

watch(() => props.accessory.count, (count: number): void => {
    isDisabled.value = disabled(count)!
})



</script>

<style scoped lang="scss">

.item {
    width: 33%;
    display: flex;
    align-items: center;
    flex-direction: column;
}
.market__item {
    img {
        width: 50%;
        height: 80px;
        background-size: contain;
        background-repeat: no-repeat;

        filter: drop-shadow(0 0 2.5rem #FF7F22);
    }

    .description {
        margin-top: 5vh;
    }
}

.info-text {
    margin-top: 1vh;
}

.item-button {
    margin-top: 2vh;
}
@media screen and (max-width: 1024px) {
    .item  {
        min-width: 236px;
        margin: 25px 24px;
    }

  }

@media screen and (max-width: 1024px) {
    .item  {
        margin: 35px auto;
    }
}
</style>../../stores/robotStore../../stores/types/types