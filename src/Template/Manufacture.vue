<template>
    <div class="manufacture">

        <pagination :page="'04'"></pagination>

        <div class="content">
            <v-title>Производство</v-title>

            <div class="manufacture__group">

                <div>
                    <v-radio-group :list="types" v-model="type">Тип биоробота</v-radio-group>
    
                    <v-radio-group :list="balancers" v-model="balancer">Стабилизатор</v-radio-group>
                </div>

                <div class="group__components">
                    <components-list :count="4" :type="'biohand'"></components-list>

                    <components-list :count="4" :type="'microchip'"></components-list>
                    
                    <components-list :count="1" :type="'soul'"></components-list>

                </div>

                <div>

                </div>

            </div>

            
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import VTitle from '../components/UI/VTitle.vue'
import Pagination from '../components/Pagination.vue'
import VRadioGroup from '../components/VRadioGroup.vue'
import VCheckBoxIcon from '../components/UI/VCheckBoxIcon.vue'

import ComponentsList from '../components/Manufacture/ComponentList.vue'

const types = [{name: 'FrontEnd'}, {name: 'Designer'}]

let type = ref(types[0].name);

const balancers = [{name: 'Male'}, {name: 'Famale'}]

let balancer = ref(balancers[0].name);



</script>

<style scoped lang="scss">
    .manufacture {
        display: flex;
        margin-top: 9vh;
        height: 50vh;
    }

    .manufacture__group {
        display: flex;
        justify-content: space-between;

        >div {
            width: 28%;
        }

        .group__components {
            
        }
    }
</style>