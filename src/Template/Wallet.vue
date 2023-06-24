<template>
    <div class="wallet">
        <pagination :page="'02'"></pagination>

        <div class="content">
            <v-title>Кошелёк криптовалют</v-title>

            <coin-list :count="robotStore.coin"></coin-list>

            <v-balance :coins="robotStore.coin"></v-balance>

            <div class="earn_coins">
                <v-link @click="robotStore.earnСoins()">Нацыганить</v-link>

                <v-check-box v-model="robotStore.coinBustStatus" :id="'coin-bust'">
                    Цыганить по {{ getNoun(robotStore.coinBusted, "монете", "монеты", "монет") }}
                </v-check-box>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore"
import { getNoun }  from '../DeclensionOfNouns/declension'

import VTitle from '../components/UI/VTitle.vue'
import VButton from '../components/UI/VButton.vue'
import CoinList from '../components/Wallet/CoinList.vue'
import VBalance from '../components/UI/VBalance.vue'
import VLink from '../components/UI/VLink.vue'
import VCheckBox from '../components/UI/VCheckBox.vue'
import Pagination from '../components/Pagination.vue';

const robotStore = useRobotStore();
</script>

<style scoped lang="scss">
    .wallet {
        margin-top: 11.5vh;
        display: flex;
    }

    .earn_coins {
        margin-top: 4vh;
        width: 25vw;
        max-width: 350px;
        display: grid;
        grid-template-columns: 1fr 2.5fr;
        gap: 20px
    }
 
</style>