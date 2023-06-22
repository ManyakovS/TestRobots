<template>
    <header>
        <span class="logo"></span>

        <v-button :color="'orange'" :type="'stroke'">{{ robotStore.headerTextButton }}</v-button>
    </header>
</template>

<script setup lang="ts">
import VButton from '../components/UI/VButton.vue'
import {useRobotStore} from "../stores/RobotStore"

const robotStore = useRobotStore();

</script>

<style scoped lang="scss">
    header {
        margin-top: 5.15vh;
        display: flex;
        justify-content: space-between;

        .logo {
            background-image: url(../assets//Logo.svg);
            height: 48px;
            width: 78px;
        }
    }

    @media screen and (max-width: 768px) {
        .logo {
            display: none;
        }
      }
</style>