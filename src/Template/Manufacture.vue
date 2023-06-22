<template>
    <div class="manufacture">

        <pagination :page="'04'"></pagination>

        <div class="content">
            <v-title>Производство</v-title>

            <v-radio-button v-model="value" :value="value" :id="'FrontEnd'">FrontEnd</v-radio-button>

            <v-radio-button v-model="value" :value="value" :id="'Design'">FrontEnd</v-radio-button>
            
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import VTitle from '../components/UI/VTitle.vue'
import Pagination from '../components/Pagination.vue'
import VRadioButton from '../components/UI/VRadioButton.vue'

let value = ref('');
</script>

<style scoped lang="scss">
    .manufacture {
        display: flex;
        margin-top: 9vh;
        height: 50vh;
    }
</style>