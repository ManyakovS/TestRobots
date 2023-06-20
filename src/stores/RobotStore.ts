import { defineStore } from 'pinia';

export const useRobotStore = defineStore("RobotStore", {

    state: () => {
        return {
            value: 'Тест',
    }
    }

})