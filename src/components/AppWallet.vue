<template>
    <div class="wallet_page">
        <div class="pagination">
            <p class="pagination__page">02</p>
        </div>

        <v-title>Кошелёк криптовалют</v-title>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import VTitle from './UI/VTitle.vue'

export default defineComponent({
  components: { VTitle },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .wallet_page {
        margin-top: 11.5vh;
        display: flex;
    }
</style>