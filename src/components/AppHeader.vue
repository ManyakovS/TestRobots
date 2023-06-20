<template>
    <header>
        <span class="logo"></span>

        <v-button :color="'orange'" :type="'stroke'">{{ RobotStore.header_text_button }}</v-button>
    </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VButton from './UI/VButton.vue'

import {useRobotStore} from "../stores/RobotStore"

export default defineComponent({
  components: { VButton },
    setup () {
        

        const RobotStore = useRobotStore();

        return {RobotStore}
    }
})
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