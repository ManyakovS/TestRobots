<template>
    <div class="stock">

        <pagination :page="'04'"></pagination>

        <div class="content">
            <v-title>Склад</v-title>

            <div class="stock__items">

                <accessory-item v-for="item in robotStore.accessories" :key="item.name" :accessory="getCurrentItem(item.name)"/>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore"

import VTitle from '../components/UI/VTitle.vue';
import Pagination from '../components/Pagination.vue';
import AccessoryItem from '../components/Accessory/AccessoryItem.vue'
import Accessory from '../Types/Accessory'

const robotStore = useRobotStore();

const getCurrentItem = (name: string) => {
    let inv = robotStore.inventory.find(i => i.name == name)
    let accessory: Accessory = {
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

</style>