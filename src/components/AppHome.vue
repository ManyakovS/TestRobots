<template>
    <div class="home_page">

        <div class="pagination">
            <p class="pagination__page">01</p>

            <div class="pagination__scroll">
                <span class="pagination__scroll_text">скоролл</span>
                <span class="pagination__scroll_arrow"></span>
            </div>
        </div>

        <div class="content">
            <div class="home_page__description">
                <h1 class="home_page__title">{{ RobotStore.homePage_text }}</h1>
                <h3>класса «монитор-кресло»</h3>
            </div>

            <span class="home_page__img"></span>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRobotStore } from "../stores/RobotStore"
import VButton from './UI/VButton.vue'


export default defineComponent({
    components: { VButton, },
    setup() {
        const RobotStore = useRobotStore();

        return { RobotStore }
    }
})
</script>

<style scoped lang="scss">
.home_page {
    display: flex;
    margin-top: 12.5vh;
    height: 35.3vh;

    .content {
        display: flex;
        align-items: center;
    }

    .pagination {
        justify-content: space-between;
        display: flex;
        flex-direction: column;
        height: 70%;
        margin: auto 0 40px 0;

        &__scroll {
            display: flex;
            flex-direction: row-reverse;
            align-items: flex-end;
            position: relative;
            writing-mode: vertical-lr;
            transform: rotate(180deg);

            &_arrow {
                margin-bottom: 6px;
                transform: rotate(180deg);
                display: block;
                background-image: url(../assets/Arrow_bottom.svg);
                height: 24px;
                width: 24px;

            }
        }
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