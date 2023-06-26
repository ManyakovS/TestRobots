import { defineStore } from 'pinia';
import { ref, computed, Ref } from 'vue'

import { defaultAccessory } from './types/types';

export const useRobotStore = defineStore("RobotStore", () => {

    const headerTextButton: string = 'Произвести биоробота';
    const homePageText: string = 'Фабрика по производству биороботов';

    const coin = ref(1);
    const coinLimit: number = 100;
    const coinPerClick: number = 1;
    const coinBustStatus = ref(false);
    const coinBusted: number = 5;

    const errorCoinLimit = ref(false);

    interface accessories {
        [key: string]: defaultAccessory;
    }

    const notifications = [
        {
            "type": "errorCoinLimit",
            "notification": {
                "title": "Количество монет ограничено",
                "text": "Вы не можете нацыганить более 100 монет biorobo",
                "icon": ".\\src\\assets\\Coin.svg"
            }
        },
        {
            "type": "accessoryCompleted",
            "notification": {
                "title": "Биоробот произведён",
                "text": "Поздравляем! Вы произвели биоробота",
                "icon": ""
            }
        }
    ];

    const accessories: Ref<accessories> = ref({
        'biohand': {
            name: "biohand",
            title: "Биорука",
            cost: 5,
            sellCost: 3,
            count: 0,
        },
        'microchip': {
            name: "microchip",
            title: "Микрочип",
            cost: 5,
            sellCost: 3,
            count: 0,
        },
        'soul': {
            name: "soul",
            title: "Душа",
            cost: 25,
            sellCost: 15,
            count: 0,
        }
    });

    const types = [{ name: 'FrontEnd' }, { name: 'Designer' }];
    const stabilizers = [{ name: 'Male' }, { name: 'Female' }];
    const accessoryCompleted = ref(false);
    const accessoryCost = 10;

    const accessoryInDeveloping = ref({
        type: types[0].name,
        stabilizer: stabilizers[0].name,
        components: [
            { type: 'biohand', required: 4, available: computed(() => { return accessories.value["biohand"].count }), installed: ref(0), completed: ref(false) },
            { type: 'microchip', required: 4, available: computed(() => { return accessories.value["microchip"].count }), installed: ref(0), completed: ref(false) },
            { type: 'soul', required: 1, available: computed(() => { return accessories.value["soul"].count }), installed: ref(0), completed: ref(false) }
        ],
    });

    const accessoryCanCompleted = computed(() => {
        const components = accessoryInDeveloping.value.components
        if (components.every(c => c.completed == true))
            return true
        else
            return false
    })

    const earnСoins = () => {
        let coin_hash: number;
        coinBustStatus.value == true ? coin_hash = coin.value + coinBusted : coin_hash = coin.value + coinPerClick

        if (coin_hash > coinLimit)
            return errorCoinLimit.value = true;
        else
            coin.value = coin_hash
    };
    const setAccessoryInInventory = (name: string, value: number): void => {
        accessories.value[name].count += value
    };

    const buyAccessory = (name: string): void => {
        const cost: number = accessories.value[name].cost

        if (coin.value >= cost) {
            coin.value -= cost
            setAccessoryInInventory(name, 1)
        }
    };

    const sellAccessory = (name: string): void => {
        const accessory:defaultAccessory  = accessories.value[name]

        let coin_hash = coin.value + accessory.cost;
        if (accessory.count > 0) {
            let installed: number;
            installed = accessoryInDeveloping.value.components.find(c => c.type == name)?.installed!

            if (coin_hash <= coinLimit) {
                coin.value = coin_hash
                setAccessoryInInventory(name, -1)
            }
            else
                errorCoinLimit.value = true;
        }
    };

    const installComponent = (type: string): void => {
        let component = accessoryInDeveloping.value.components.find(c => c.type == type)!
        if (component != undefined) {
            component.installed++
            setAccessoryInInventory(type, -1)
        }
    }

    const putAwayComponent = (type: string): void => {
        let component = accessoryInDeveloping.value.components.find(c => c.type == type)!
        if (component != undefined) {
            component.installed--
            setAccessoryInInventory(type, 1)
        }
    }

    const setCompleted = (type: string): void => {
        let component = accessoryInDeveloping.value.components.find(c => c.type == type)!
        if (component != undefined) {

            if (component.installed >= component.required)
                component.completed = true
            else
                component.completed = false
        }
    }

    const setCoinBustStatus = (value: boolean): void => {
        coinBustStatus.value = value
    }

    const produceRobot = () => {
        if (coin.value >= accessoryCost) {
            accessoryInDeveloping.value.components.forEach(c => c.installed = 0)

            accessoryCompleted.value = true
        }
    }


    return {
        headerTextButton,
        homePageText,
        coin,
        coinLimit,
        coinPerClick,
        coinBustStatus,
        coinBusted,
        errorCoinLimit,
        accessoryInDeveloping,
        accessoryCanCompleted,
        accessoryCompleted,
        stabilizers,
        types,
        accessoryCost,
        accessories,
        notifications,


        earnСoins,
        buyAccessory,
        sellAccessory,
        setCoinBustStatus,
        installComponent,
        putAwayComponent,
        setCompleted,
        produceRobot

    }
})
