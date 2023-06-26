<template>
    <div class="stock">

        <pagination :page="'04'"></pagination>

        <div class="content">
            <title>Склад</title>

            <div class="stock__items">

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
    let inv = robotStore.inventory.find(i => i.name == name)
    let accessory: accessoryType = {
        name: inv?.name,
        title: inv?.title,
        cost: inv?.cost,
        count: inv?.count,
        type: 'Stock'
    };
    return accessory

}
</script>

<style scoped lang="scss">
.stock {
    margin-top: 10vh;
    display: flex;

    &__items {
        display: flex;
        justify-content: space-between;
    }
}

@media screen and (max-width: 1024px) {
    .stock__items {
        flex-wrap: wrap;
        justify-content: center;
    }
  }

  @media screen and (max-width: 768px) {
    .stock {
        margin-top: 6.7vh;
    }
  }

</style>../stores/robotStore../stores/types/types