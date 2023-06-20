import { defineStore } from 'pinia';

export const useRobotStore = defineStore('RobotStore', {

    state: () => {
        return {
            /* Параметры текста */
            /* header */
            header_text_button: 'Произвести биоробота',

            /* home page */
            homePage_text: 'Фабрика по производству биороботов',

            /*  */



            /* Монеты роботы */
        }
    },

    actions: {
        increment() {
            this.count++
        },

    }
}
)
