<template>
    <header>
        <span class="logo"></span>

        <v-button :color="'orange'" :type="'stroke'" @click="scrollTo">{{ robotStore.headerTextButton }}</v-button>
    </header>
</template>

<script setup lang="ts">
import VButton from '../components/UI/VButton.vue'
import {useRobotStore} from "../stores/RobotStore"

const robotStore = useRobotStore();

const scrollTo = () => {
    window.scrollTo({
    top: 10000,
    behavior: 'smooth'
});
}

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

    @media screen and (max-width: 1024px) {
        header {
            width: 85.75%;
            margin-left: auto;
            margin-right: auto;
        }
      }

    @media screen and (max-width: 768px) {
        .logo {
            display: none;
        }
        header {
            justify-content: center;
        }
      }
</style>