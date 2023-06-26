<template>
    <div class="manufacture">

        <pagination :page="5"></pagination>

        <div class="content">
            <title>Производство</title>

            <div class="manufacture__group">

                <div class="radio-groups">
                    <radio-group :list="robotStore.types" v-model="robotStore.accessoryInDeveloping.type">Тип
                        биоробота</radio-group>

                    <radio-group :list="robotStore.stabilizers"
                        v-model="robotStore.accessoryInDeveloping.stabilizer">Стабилизатор</radio-group>
                </div>

                <div class="group__components">
                    <components-list v-for="component in robotStore.accessoryInDeveloping.components" :key="component.type"
                        :component="component"></components-list>
                </div>

                <div class="robot">
                    <img :src="link" alt="robot">
                </div>

                <div class="complete-button">
                    <w-button :type="'stroke'" :color="'orange'" :disabled="!robotStore.AccessoryCanCompleted"
                        @click="robotStore.produceRobot()">Произвести за {{ getNoun(robotStore.accessoryCost, "монета",
                            "монеты", "монет") }}</w-button>
                </div>

                <div class="text-help" v-if="!(getMissingComponent == '')">
                    <p>Для производства биоробота не хватает {{ getMissingComponent }}</p>
                </div>

            </div>


        </div>

    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Title from '../components/UI/Title.vue'
import Pagination from '../components/Pagination.vue'
import RadioGroup from '../components/RadioGroup.vue'
import WButton from '../components/UI/Button.vue'
import { useRobotStore } from '../stores/RobotStore'
import { getNounForName, getPunctuation, getNoun } from '../functions/grammaticalFunctions'

import ComponentsList from '../components/Manufacture/ComponentList.vue'

const robotStore = useRobotStore();

const link = computed(() => {
    let status;
    let stabilizer = robotStore.accessoryInDeveloping.stabilizer
    let type = robotStore.accessoryInDeveloping.type

    if (!robotStore.AccessoryCanCompleted)
        status = 'canNotProduced'

    if (robotStore.AccessoryCanCompleted)
        status = 'canProduced'

    if (robotStore.accessoryCompleted)
        status = 'completed'

    return `src/assets/robots/${status}/${type}${stabilizer}.png`

})

const getCount = (type: string): number => {
    let component = robotStore.accessoryInDeveloping.components.find(c => c.type == type);
    let returnedCount = component?.available! + component?.installed! - component?.required!
    returnedCount < 0 ? returnedCount =  0 - returnedCount : returnedCount
    
    return returnedCount != undefined ? returnedCount : 0
};

const getMissingComponent = computed(() => {
    let returnedStr = ''
    const components = robotStore.accessoryInDeveloping.components.filter(c => c.available + c.installed < c.required)
    let length = components.length

    for (let index = 0; index < length; index++) {
        const type = components[index].type

        returnedStr = returnedStr + `${getPunctuation(index, length)} ${getNounForName(getCount(type), type)}`
    }
    if(robotStore.coin < robotStore.accessoryCost) {
        returnedStr = returnedStr.replace(/ и /gm, ', ') 
        let and = "";
        length == 0 ? and = '' : and = " и "
        returnedStr = returnedStr + and + 'денег'
    }
    return returnedStr
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

    >div {
        width: 100%;
    }

    .robot {
        position: relative;
        max-height: 320px;
        width: 236px;

        img {
            position: absolute;
            width: 100%;
            object-fit: contain;
        }
    }

    .complete-button {
        display: flex;

    }

    .text-help {
        height: fit-content;
        display: flex;
    }
}

@media screen and (min-width: 1025px) {
    .manufacture {
        height: 70vh;
    }
    .manufacture__group {
        gap: 30px;
        grid-template-columns: repeat(3, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
    .radio-groups {
        grid-row: span 2 / span 2;
    }

    .group__components {
        grid-row: span 2 / span 2;
    }

    .robot {
        grid-row: span 3 / span 3;
        img {
            bottom: -30px;
        }
    }

    .complete-button {
        grid-row: 3/4;
        align-items: flex-end;
    }

    .text-help {
        grid-column: 2/3;
        grid-row: 3/4;
        align-items: flex-end;
    }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
    .manufacture {
        height: 80vh;
    }
    .manufacture__group {
        gap: 3px 60px;
        grid-template-columns: 2fr 3fr;
        grid-template-rows: 3fr 3fr 1fr 1fr;
    }

    .radio-groups {
        grid-row: 1 / 2
    }

    .group__components {
        grid-row: 2
    }

    .robot {
        grid-row: span 3 / span 3;
        left: calc(50% - 118px);
    }

    .complete-button {
        grid-column: 1;
        grid-row: 4;
        align-items: flex-end;
    }

    .text-help {
        grid-column: 1;
        grid-row: 3;
    }
}
@media screen and (max-width: 767px) {
    .manufacture {
        margin-top: 6.7vh;
        height: auto;
        margin-bottom: 10vh;
    }
    .manufacture__group {
        gap: 3px 60px;
        grid-template-rows: 4.5fr 3fr 3fr 1fr 1fr;
    }

    .radio-groups {
        grid-row: 2;
    }

    .group__components {
        grid-row: 3;
    }

    .robot {
        grid-row: 1;
        left: calc(50% - 118px);
        img {
            bottom: -10px;
        }
    }

    .complete-button {
        grid-column: 1;
        grid-row: 5;
        align-items: flex-end;
        justify-content: center;
    }

    .text-help {
        grid-column: 1;
        grid-row: 4;
    }
}

</style>../functions/grammaticalFunctions