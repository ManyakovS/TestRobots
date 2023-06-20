<template>
    <button class="button" v-bind:class="buttonClasses">
        <slot></slot>
    </button>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'

export default defineComponent({
    props: {
        type: { type: String, default: 'fill' },
        status: { type: Boolean, default: true },
        color: { type: String, default: 'orange' }
    },


    setup({ type, status, color }: any) {

        const buttonClasses = computed(() => {
            const returnedClass: Array<String> = []
            if (type == 'fill') {

                if (status)
                    returnedClass.push('button_fill_orange')
                else
                    returnedClass.push('button_fill_disabled')
            }

            else if (type == 'stroke') {
                if (status) {

                    if (color == 'orange')
                        returnedClass.push('button_stroke_orange')

                    else if (color == 'blue')
                        returnedClass.push('button_stroke_blue')
                }
                else
                    returnedClass.push('button_stroke_disabled')
            }

            return returnedClass
        })

        return { buttonClasses }
    }
})
</script>

<style scoped lang="scss">
.button {
    font-weight: 600;
    font-size: 1rem;
    line-height: 1.5rem;
    text-align: center;

    padding: 12px 41.5px;
    border-radius: 60px;

    transition: all .5s ease-out;
}

.button_fill {

    &_orange {
        background: linear-gradient(180deg, #FF7F22 0%, #FF5722 100%);
        box-shadow: 0px 8px 10px rgba(0, 0, 0, 0.16);

        &:hover {
            background: #FF5722;
        }

        &:active {
            background: #FF7F22;
        }

    }

    &_disabled {
        background: #4C5865;
    }
}

.button_stroke {
    background-color: transparent;

    &_blue {
        border: 2px solid #22B3E3; /*ПОФИКСИТЬ*/
        color: #7CDAF9;

        &:hover {
            background: #7CDAF9;
            color: #000;
            border-color: #7CDAF9;
        }

        &:active {
            color: #7CDAF9;
            border: 2px solid #22B3E3;
            background-color: transparent;
        }
    }

    &_orange {
        border: 2px solid #FF7F22;

        &:hover {
            background: #FF5722;
            border-color: #FF5722;
        }

        &:active {
            background: #FF7F22;
            border-color: #FF7F22;
        }
    }

    &_disabled {
        background: transparent;
        border: 2px solid #4C5865;
    }
}

</style>