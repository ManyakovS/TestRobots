<template>
    <div class="manufacture">

        <pagination :page="'04'"></pagination>

        <div class="content">
            <v-title>Производство</v-title>

            <div class="manufacture__group">

                <div class="radio-groups">
                    <v-radio-group :list="robotStore.types" v-model="robotStore.accessoryInDeveloping.type">Тип биоробота</v-radio-group>
    
                    <v-radio-group :list="robotStore.stabilizers" v-model="robotStore.accessoryInDeveloping.stabilizer">Стабилизатор</v-radio-group>
                </div>

                <div class="group__components">
                    <components-list v-for="component in robotStore.accessoryInDeveloping.components" :key="component.type" :component="component"></components-list>
                </div>

                <div class="robot">
                    <img :src="link" alt="robot">
                </div>

                <div class="complete-button"> 
                    <v-button :type="'stroke'" :color="'orange'" :disabled="!robotStore.AccessoryCanCompleted" @click="robotStore.produceRobot()">Произвести за 10 монет</v-button>
                </div>

                <div class="text-help">
                    <p>Для производства биоробота не хватает 2 биоруки,
                        3 микрочипа и 1 души</p>
                </div>

            </div>

            
        </div>
        
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import VTitle from '../components/UI/VTitle.vue'
import Pagination from '../components/Pagination.vue'
import VRadioGroup from '../components/VRadioGroup.vue'
import VCheckBoxIcon from '../components/UI/VCheckBoxIcon.vue'
import VButton from '../components/UI/VButton.vue'
import { useRobotStore } from '../stores/RobotStore'

import ComponentsList from '../components/Manufacture/ComponentList.vue'

const robotStore = useRobotStore();

const components = robotStore.accessoryInDeveloping.components

const link = computed(() => {
    if(robotStore.accessoryCompleted)
        return `src/assets/Robots/Completed/FrontMale.png`

    if(!robotStore.AccessoryCanCompleted)
        return `src/assets/Robots/CanNotProduced/FrontMale.png`

    if(robotStore.AccessoryCanCompleted)
        return `src/assets/Robots/CanProduced/FrontMale.png`
        
})





</script>

<style scoped lang="scss">
    .manufacture {
        display: flex;
        margin-top: 9vh;
        height: 70vh;
    }

    .manufacture__group {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
        gap: 30px;

        >div {
            width: 100%;
        }

        .radio-groups {
            grid-row: span 2 / span 2;
        }

        .group__components {
            grid-row: span 2 / span 2;
        }

        .robot {
            grid-row: span 3 / span 3;
            position: relative;

            img {
                position: absolute;
                bottom: -30px;
                width: 100%;
                object-fit: contain;
            }
        }

        .complete-button {
            grid-row: 3/4;
            display: flex;
            align-items: flex-end;

        }
        
        .text-help {
            grid-column: 2/3;
            grid-row: 3/4;
            display: flex;
            align-items: flex-end;
        }
    }
</style>