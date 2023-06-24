<template>
    <div class="coins-list"> 
        <span class="coins-list__coin" :style="{'z-index': getIndex(coin)}" v-for="coin in  props.count" :key="coin"></span>
    </div>
</template>

<script setup lang="ts">

const props = defineProps({
    count: {
            required: true,
            type: Number
        }
})

const getIndex = (index: number) : number => {
    return props.count - index
}

</script>

<style scoped lang="scss">
.coins-list {
    display: flex;
    flex-wrap: wrap;
    position: relative;

    &__coin {
        display: block;
        margin: 4px -8px 4px 0; 
        background-image: url(../../assets/coin.svg);
        width: 16px;
        height: 20px;

    }
}
</style>