<template>
    <div class="home">

        <pagination :page="'01'" :show-arrow="true"></pagination>

        <div class="content">
            <div class="home__description">
                <h1 class="home_page__title">{{ RobotStore.homePage_text }}</h1>
                <h3>класса «монитор-кресло»</h3>
            </div>

            <span class="home__img"></span>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRobotStore } from "../stores/RobotStore"
import Pagination from './Pagination.vue';
import VButton from './UI/VButton.vue'


export default defineComponent({
    components: { VButton, Pagination, },
    setup() {
        const RobotStore = useRobotStore();

        return { RobotStore }
    }
})
</script>

<style scoped lang="scss">
.home {
    display: flex;
    margin-top: 10vh;
    height: 30vh;

    .content {
        display: flex;
        align-items: center;
    }

    &__description {
        width: 61.1%;

        h3 {
            margin-top: 1vh;
            color: #A3B8CC;
        }
    }

    &__img {
        position: relative;
        height: 17vw;
        width: 19.1vw;
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(../assets/HomeRobots.svg);
    }


    /*
        &__img {
            position: relative;
            border-radius: 50%;
            background-color: #1E2936;
            width: 14.33vw;
            height: 14.33vw;
            background-repeat: no-repeat;
            background-size: cover;

            span {
                position: absolute;
                display: block;
                background-repeat: no-repeat;
                background-size: cover;

            }
            .front {
                background-image: url(../assets/FrontMale.svg);
                width: 176px;
                height: 310px;
                left: -55px;
                background-position-y: top;
            }

            .designer {
                background-image: url(../assets/DesignerMale.svg);
                width: 138.5px;
                height: 196px;
                transform: rotateY(180deg);
                bottom: 0;
                left: 155px;
                top: 40%
            }
        }
        */
}
</style>