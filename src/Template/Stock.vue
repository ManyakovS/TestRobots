<template>
    <div class="stock">

        <pagination :page="4"></pagination>

        <div class="content">
            <title>Склад</title>

            <div class="stock__items">

                <accessory-item v-for="item in robotStore.accessories" :key="item.title" :accessory="item" :type="'Stock'"/>

            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/robotStore"

import Title from '../components/UI/Title.vue';
import Pagination from '../components/Pagination.vue';
import AccessoryItem from '../components/Accessory/AccessoryItem.vue'

const robotStore = useRobotStore();

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