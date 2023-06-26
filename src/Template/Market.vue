<template>
    <div class="market">

        <pagination :page="3"></pagination>

        <div class="content">
            <title>Рынок комплектующих</title>

            <div class="market__items">
                <accessory-item v-for="item in robotStore.accessories" :key="item.title" :accessory="item" :type="'Market'"/>
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
</style>