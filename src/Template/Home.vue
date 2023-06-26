<template>
    <div class="home">

        <pagination :page="'01'" :show-arrow="true"></pagination>

        <div class="content">
            <div class="home__description">
                <h1 class="home_page__title">{{ robotStore.homePageText }}</h1>
                <h3>класса «монитор-кресло»</h3>
            </div>

            <span class="home__img"></span>
        </div>

    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore"
import Pagination from '../components/Pagination.vue';

const robotStore = useRobotStore();
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
        height: clamp(206px, 17vw, 320px);
        width: clamp(236px, 19.1vw, 366px);
        background-repeat: no-repeat;
        background-size: cover;
        background-image: url(../assets/HomeRobots.png);
    }

}

@media screen and (min-width: 1024px) and (max-width: 1920px) {
    .content__img{
        width: 236px;
        height: 206px;
    }
}   

@media screen and (max-width: 767px) {
    .home{
        height: auto;
        margin-top: 6.7vh;
    }

    .home__description {
        margin-top: 4vh;
        width: 100%;
        text-align: center;

        h3 {
            display: none;
        }
    }

    .home .content {
        flex-direction: column-reverse;
    }
}
</style>