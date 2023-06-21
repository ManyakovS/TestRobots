<template>
    <div class="stock">

        <pagination :page="'03'"></pagination>

        <div class="content">
            <v-title>Склад</v-title>

            <div class="stock__items">

                <stock-item
                v-for="item in RobotStore.accessories" 
                :key="item.name" 
                :name="item.name"
                :title="item.title"
                :cost="RobotStore.inventory.find(i => i.name == item.name)?.costForSale"
                :count="RobotStore.inventory.find(i => i.name == item.name)?.count"
                >
                </stock-item>

            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { useRobotStore } from "../stores/RobotStore"

import VTitle from './UI/VTitle.vue';
import Pagination from './Pagination.vue';
import StockItem from './StockItem.vue';

export default defineComponent({
    components: {
        VTitle,
        Pagination,
        StockItem
    },
    setup() {

        const RobotStore = useRobotStore();

/*         const count = (name: string) => computed(() : number => {

            return RobotStore.inventory.find(i => i.name == name)?.count
        }) */

        return {
            RobotStore
        }
    }
})
</script>

<style scoped lang="scss">
.stock {
    margin-top: 10vh;
    display: flex;
    height: 50vh;

    &__items {
        display: flex;
        justify-content: space-between;
    }
}

</style>