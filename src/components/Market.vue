<template>
    <div class="market">

        <pagination :page="'03'"></pagination>

        <div class="content">
            <v-title>Рынок комплектующих</v-title>

            <div class="market__items">
                <market-item 
                v-for="item in RobotStore.accessories" 
                :key="item.name" 
                :name="item.name"
                :title="item.title"
                :cost="item.cost"
                >

                    
                </market-item>
            </div>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRobotStore } from "../stores/RobotStore"

import VTitle from './UI/VTitle.vue';
import Pagination from './Pagination.vue';
import MarketItem from './MarketItem.vue';

export default defineComponent({
    components: {
        VTitle,
        Pagination,
        MarketItem,
    },
    setup() {

        const RobotStore = useRobotStore();

        return {
            RobotStore,
        }
    }
})
</script>

<style scoped lang="scss">
.market {
    margin-top: 10vh;
    display: flex;
    height: 50vh;
}

.market__items {
    display: flex;
}
</style>