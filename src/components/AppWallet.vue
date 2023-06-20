<template>
    <div class="wallet_page">
        <div class="pagination">
            <p class="pagination__page">02</p>
        </div>

        <div class="content">
            <v-title>Кошелёк криптовалют</v-title>

            <p>{{ RobotStore.coin }}</p>
            <v-button @click="RobotStore.earnСoins()">Добывать</v-button>

            <v-button @click="RobotStore.buyAccessory('biohand')">Купить</v-button>

            <v-button @click="RobotStore.sellAccessory('biohand')">Продать</v-button>

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VTitle from './UI/VTitle.vue'
import { useRobotStore } from "../stores/RobotStore"
import VButton from './UI/VButton.vue'

export default defineComponent({
  components: { VTitle, VButton },
    setup () {
        
        const RobotStore = useRobotStore();

        return { RobotStore }
    }
})
</script>

<style scoped>
    .wallet_page {
        margin-top: 11.5vh;
        display: flex;
    }
</style>