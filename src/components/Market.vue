<template>
    <div class="market">
        
        <pagination :page="'03'"></pagination>

        <div class="content">
            <v-title>Рынок комплектующих</v-title>

        </div>
    </div>
</template>

<script lang="ts">
import VTitle from './UI/VTitle.vue';
import { defineComponent } from 'vue'
import Pagination from './Pagination.vue';

export default defineComponent({
    components: {
        VTitle,
        Pagination,
    },
    setup () {
        

        return {}
    }
})
</script>

<style scoped>
    .market {
        margin-top: 10vh;
        display: flex;
    }
</style>