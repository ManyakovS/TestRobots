<template>
    <div class="notification__container" @click.self="hide">

        <div class="notification">
            <div class="notification__close" @click.self="hide"></div>

            <div class="notification__icon">
                <!-- <p class="notification__title">{{ notification.icon }}</p> -->
                <img v-if="notification.icon != ''" :src="notification.icon" alt="">
            </div>

            <div class="notification__description">

                <h2 class="notification__title">{{ notification.title }}</h2>

                <p class="info-text notification__text">{{ notification.text }}</p>

            </div>

        </div>

    </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType } from "vue";
import Notification from "../Types/Notification"

const props = defineProps({
    type: {
        type: String,
        default: "Closing",
        validator(value: string) { return ['Closing', 'NotClosing'].includes(value) }},
        'modelValue': {
            type: Boolean,
            default: false
        },
        notification: Object as PropType<Notification>

    })

const emit = defineEmits(['update:modelValue', 'close'] )

const hide = () => {
    if(props.type == "Closing")
        emit('update:modelValue', false)
    else
        emit('close', true)
}

onMounted(() => {
    document.body.style.overflow = 'hidden';
})
onUnmounted(() => {
    document.body.style.overflowY = 'auto';
})
</script>

<style scoped lang="scss">
.notification__container {
    z-index: 1000;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    background-color: rgba(black, 0.5);

    .notification {
        position: relative;
        background-color: #fff;
        border-radius: 10px;
        color: black;
        display: grid;
        padding: 30px;

        &__close {
            position: absolute;
            top: 8px;
            right: 8px;
            width: 20px;
            height: 20px;
            opacity: 0.7;
            cursor: pointer;
            transition: opacity ease 0.5s;

            &:hover {
                opacity: 1;
            }

            &:before,
            &:after {
                content: '';
                position: absolute;
                top: 10px;
                display: block;
                width: 16px;
                height: 3px;
                background: #FF7F22;
            }

            &:before {
                transform: rotate(45deg);
            }

            &:after {
                transform: rotate(-45deg);
            }
        }

        &__icon {
            img {
                width: 43px;
                height: 53px;
            }
        }

        &__description {
            .notification__text {
                margin-top: 1rem;
                color: #4C5865;
            }
        }

    }
}

@media screen and (min-width: 768px) and (max-width: 1920px) {
    .notification {
        width: 496px;
        height: 240px;
        grid-template-columns: 1.1fr 6.25fr 1fr;

        &__icon {
            grid-column: 1 / 2;
        }

        &__description {
            grid-column: 2 / 3;
        }
    }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
    .notification {
        width: 80vw;
        grid-template-rows: 1fr 2fr;
        place-items: center;
        text-align: center;

        &__icon {
            grid-row: 1;
        }

        &__description {
            grid-row: 2;
        }

    }
}
</style>../stores/types/Notification