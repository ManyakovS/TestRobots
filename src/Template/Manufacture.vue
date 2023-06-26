<template>
    <div class="manufacture">

        <pagination :page="'05'"></pagination>

        <div class="content">
            <v-title>Производство</v-title>

            <div class="manufacture__group">

                <div class="radio-groups">
                    <v-radio-group :list="robotStore.types" v-model="robotStore.accessoryInDeveloping.type">Тип
                        биоробота</v-radio-group>

                    <v-radio-group :list="robotStore.stabilizers"
                        v-model="robotStore.accessoryInDeveloping.stabilizer">Стабилизатор</v-radio-group>
                </div>

                <div class="group__components">
                    <components-list v-for="component in robotStore.accessoryInDeveloping.components" :key="component.type"
                        :component="component"></components-list>
                </div>

                <div class="robot">
                    <img :src="link" alt="robot">
                </div>

                <div class="complete-button">
                    <v-button :type="'stroke'" :color="'orange'" :disabled="!robotStore.AccessoryCanCompleted"
                        @click="robotStore.produceRobot()">Произвести за {{ getNoun(robotStore.accessoryCost, "монета",
                            "монеты", "монет") }}</v-button>
                </div>

                <div class="text-help" v-if="!(getMissingComponent == '')">
                    <p>Для производства биоробота не хватает {{ getMissingComponent }}</p>
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
import { getNounForName, getPunctuation, getNoun } from '../DeclensionOfNouns/declension'

import ComponentsList from '../components/Manufacture/ComponentList.vue'

const robotStore = useRobotStore();

const components = robotStore.accessoryInDeveloping.components

const link = computed(() => {
    let status;
    let stabilizer = robotStore.accessoryInDeveloping.stabilizer
    let type = robotStore.accessoryInDeveloping.type

    if (!robotStore.AccessoryCanCompleted)
        status = 'CanNotProduced'

    if (robotStore.AccessoryCanCompleted)
        status = 'CanProduced'

    if (robotStore.accessoryCompleted)
        status = 'Completed'

    return `src/assets/Robots/${status}/${type}${stabilizer}.png`

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

</style>