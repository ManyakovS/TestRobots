<template>
    <div class="wallet">
        <pagination :page="'02'"></pagination>

        <div class="content">
            <v-title>Кошелёк криптовалют</v-title>

            <coin-list :count="RobotStore.coin"></coin-list>

            <v-balance :coins="RobotStore.coin"></v-balance>

            <div class="earn_coins">
                <v-link @click="RobotStore.earnСoins()">Нацыганить</v-link>

                <v-check-box v-model="RobotStore.coin_bust_status" :id="'coin-bust'">
                    Цыганить по 5 монет
                </v-check-box>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRobotStore } from "../stores/RobotStore"

import VTitle from './UI/VTitle.vue'
import VButton from './UI/VButton.vue'
import CoinList from './CoinList.vue'
import VBalance from './UI/VBalance.vue'
import VLink from './UI/VLink.vue'
import VCheckBox from './UI/VCheckBox.vue'
import Pagination from './Pagination.vue';

export default defineComponent({
  components: { VTitle, VButton, CoinList, VBalance, VLink, VCheckBox, Pagination },
    setup()
    {
        
        const RobotStore = useRobotStore();

        return {
            RobotStore, 
        }
    }
})
</script>

<style scoped lang="scss">
    .wallet {
        margin-top: 11.5vh;
        display: flex;
    }

    .earn_coins {
        margin-top: 4vh;
        width: 18vw;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
 
</style>