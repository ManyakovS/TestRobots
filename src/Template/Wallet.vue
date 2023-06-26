<template>
    <div class="wallet">
        <pagination :page="'02'"></pagination>

        <div class="content">
            <title>Кошелёк криптовалют</title>

            <coin-list :count="robotStore.coin"></coin-list>

            <balance :coins="robotStore.coin"></balance>

            <div class="earn_coins">
                <w-link @click="robotStore.earnСoins()">Нацыганить</w-link>

                <check-box v-model="robotStore.coinBustStatus" :id="'coin-bust'">
                    Цыганить по {{ getNoun(robotStore.coinBusted, "монете", "монеты", "монет") }}
                </check-box>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore"
import { getNoun }  from '../DeclensionOfNouns/declension'

import Title from '../components/UI/Title.vue'
import CoinList from '../components/Wallet/CoinList.vue'
import Balance from '../components/UI/Balance.vue'
import WLink from '../components/UI/Link.vue'
import CheckBox from '../components/UI/CheckBox.vue'
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
        max-width: 350px;
        display: flex;
        justify-content: space-between;
    }

    @media screen and (max-width: 768px) {
        .wallet {
            margin-top: 6.7vh;
        }
        .earn_coins {
            flex-direction: column;
            min-height: 72px;
        }
      }
 
</style>../stores/robotStore