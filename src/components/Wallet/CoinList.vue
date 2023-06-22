<template>
    <div class="coins-list"> 
        <span class="coins-list__coin" :style="{'z-index': getIndex(coin)}" v-for="coin in count" :key="coin"></span>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        count: {
            required: true,
            type: Number
        }
    },
    setup ({count}) {
        const getIndex = (index: number) : number => {
            return count - index
        }
        return {getIndex}
    }
})
</script>

<style scoped lang="scss">
.coins-list {
    display: flex;
    position: relative;

    &__coin {
        display: block;
        margin-right: -8px;
        background-image: url(../assets/coin.svg);
        width: 16px;
        height: 20px;

    }
}
</style>