<template>
    <div class="stock__item">
        <description-accessory :cost="cost" :title="title" />

        <p class="info-text">{{ count }} шт</p>

        <v-button class="stock__item__button" 
        :disabled="isDisabled" 
        :type="'stroke'" 
        :color="'blue'"
        @click="RobotStore.sellAccessory(name)"
        >
            Продать
        </v-button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'
import { useRobotStore } from "../stores/RobotStore"
import VButton from './UI/VButton.vue'
import DescriptionAccessory from './DescriptionAccessory.vue';

export default defineComponent({

    components: {
        VButton,
        DescriptionAccessory
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
            type: Number,
            default: 1,
        },
        count: {
            required: true,
            type: Number,
            default: 0,
        }
    },

    setup(props) {

        const RobotStore = useRobotStore();

        const disabled = (count: number): boolean => {
            if (count < 1)
                return true
            else
                return false;
        }

        let isDisabled = ref(disabled(props.count));

        watch(() => props.count, (count: number): void => {
            isDisabled.value = disabled(count)

        })

        return { RobotStore, isDisabled }
    }
})
</script>

<style scoped lang="scss">
.stock__item {
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &__button {
        margin-top: 3.2vh;
    }
}

.info-text {
    margin-top: 1vh;
}
</style>