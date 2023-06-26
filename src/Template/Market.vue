<template>
    <div class="market">

        <pagination :page="'03'"></pagination>

        <div class="content">
            <title>Рынок комплектующих</title>

            <div class="market__items">
                <accessory-item v-for="item in robotStore.accessories" :key="item.name" :accessory="getCurrentItem(item.name)"/>
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/robotStore"

import Title from '../components/UI/Title.vue';
import Pagination from '../components/Pagination.vue';
import AccessoryItem from '../components/Accessory/AccessoryItem.vue'
import {accessoryType} from '../stores/types/types'


const robotStore = useRobotStore();

const getCurrentItem = (name: string) => {
    let acc = robotStore.accessories.find(a => a.name == name)
    let accessory: accessoryType = {
        name: acc?.name,
        title: acc?.title,
        cost: acc?.cost,
        count: 0,
        type: 'Market'
    };
    return accessory

}

</script>

<style scoped lang="scss">
.market {
    margin-top: 10vh;
    display: flex;
}

.market__items {
    display: flex;
}


@media screen and (max-width: 1024px) {
    .market__items {
        flex-wrap: wrap;
        justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    .market {
        margin-top: 6.7vh;
    }
  }
</style>../stores/robotStore../stores/types/types