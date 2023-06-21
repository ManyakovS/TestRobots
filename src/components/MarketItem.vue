<template>
    <div class="market__item">
        <img :src="link" alt="">

        <description-accessory :cost="cost" :title="title"/>

        <v-button class="button" :disabled="isDisabled" @click="RobotStore.buyAccessory(name)">
            Установить
        </v-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue'
import { useRobotStore } from "../stores/RobotStore"
import DescriptionAccessory from './DescriptionAccessory.vue';

import VButton from './UI/VButton.vue'

export default defineComponent({
    components: {
        VButton,
        DescriptionAccessory,
    },

    props: {
        name: {
            required: true,
            type: String
        },
        title: {
            required: true,
            type: String
        },
        cost: {
            required: true,
            type: Number
        }
    },

    setup({ name, cost }) {

        const RobotStore = useRobotStore();

        const link = computed(() => {
            return `/src/assets/${name}.svg`
        })

        const disabled = (coins: number, cost: number): boolean => {
            if (coins < cost)
                return true
            else
                return false;
        }
        let isDisabled = ref(disabled(RobotStore.coin, cost));

        watch(() => RobotStore.coin, (coin: number): void => {
            isDisabled.value = disabled(coin, cost)

            /* console.log(disabled(coin, cost)) */
        })

        return { RobotStore, link, isDisabled }
    }
})
</script>

<style scoped lang="scss">
.market__item {
    width: 33%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    img {
        width: 50%;
        height: 80px;
        background-size: contain;
        background-repeat: no-repeat;

        filter: drop-shadow(0 0 2.5rem #FF7F22);
    }

    .button {
        margin-top: 2vh;
    }
}
</style>