<template>
    <div class="wallet_page">
        <div class="pagination">
            <p class="pagination__page">02</p>
        </div>

        <div class="content">
            <v-title>Кошелёк криптовалют</v-title>

            <coin-list :count="RobotStore.coin"></coin-list>

            <v-balance :coins="RobotStore.coin"></v-balance>

            <div class="earn_coins">
                <v-link @click="RobotStore.earnСoins()">Нацыганить</v-link>

                <!-- <input type="checkbox" v-model="RobotStore.coin_bust_status"> -->
                <v-check-box v-model="RobotStore.coin_bust_status" :id="'coin-bust'">
                    Цыганить по 5 монет
                </v-check-box>
            </div>

<!--             <p>{{ RobotStore.coin }}</p>
            <v-button @click="RobotStore.earnСoins()">Добывать</v-button>

            <v-button @click="RobotStore.buyAccessory('biohand')">Купить</v-button>

            <v-button @click="RobotStore.sellAccessory('biohand')">Продать</v-button> -->

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VTitle from './UI/VTitle.vue'
import { useRobotStore } from "../stores/RobotStore"
import VButton from './UI/VButton.vue'
import CoinList from './CoinList.vue'
import VBalance from './UI/VBalance.vue'
import VLink from './UI/VLink.vue'
import VCheckBox from './UI/VCheckBox.vue'

export default defineComponent({
  components: { VTitle, VButton, CoinList, VBalance, VLink, VCheckBox },
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
    .wallet_page {
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