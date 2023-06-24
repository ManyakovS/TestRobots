import { defineStore } from 'pinia';
import { ref, computed } from 'vue'
import accessoryJSON from '../stores/JSON/accessory.json'
import inventoryJSON from '../stores/JSON/inventory.json'

export const useRobotStore = defineStore("RobotStore", () => {

    const headerTextButton: string = 'Произвести биоробота';
    const homePageText: string = 'Фабрика по производству биороботов';

    const coin = ref(1);
    const coinLimit: number = 100;
    const coinPerClick: number = 1;
    const coinBustStatus = ref(false);
    const coinBusted: number = 5;

    const errorCoinLimit = ref(false);
    const accessories = ref(accessoryJSON);
    const inventory = ref(inventoryJSON);

    const types = [{ name: 'FrontEnd' }, { name: 'Designer' }];
    const stabilizers = [{ name: 'Male' }, { name: 'Famale' }];
    const accessoryCompleted = ref(false);
    const accessoryCost = 10;

    const accessoryInDeveloping = ref({
        type: types[0].name,
        stabilizer: stabilizers[0].name,

        components: [
            { type: 'biohand', required: 4, available: computed(() => { return inventory.value[0].count }), installed: ref(0), completed: ref(false) },
            { type: 'microchip', required: 4, available: computed(() => { return inventory.value[1].count }), installed: ref(0), completed: ref(false) },
            { type: 'soul', required: 1, available: computed(() => { return inventory.value[2].count }), installed: ref(0), completed: ref(false) }
        ],
    });

    const AccessoryCanCompleted = computed(() => {
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
        const inventoryItem: { name: string, cost: number, count: number } = inventory.value.find(i => i.name == name)!
        inventoryItem.count += value;
    };

    const buyAccessory = (name: string): void => {
        const accessory: { name: string, cost: number } = accessories.value.find(a => a.name == name)!

        if (coin.value >= accessory.cost) {
            coin.value -= accessory.cost
            setAccessoryInInventory(name, 1)
        }
    };

    const sellAccessory = (name: string): void => {
        const accessory: { name: string, cost: number, count: number } = inventory.value.find(i => i.name == name)!

        let coin_hash = coin.value + accessory.cost;
        if (accessory.count > 0) {
            let installed: number;
            accessoryInDeveloping.value.components.find(c => c.type == name) != undefined ? installed = accessoryInDeveloping.value.components.find(c => c.type == name)?.installed! : installed = 0;

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
        accessories,
        inventory,
        accessoryInDeveloping,
        AccessoryCanCompleted,
        accessoryCompleted,
        stabilizers,
        types,
        accessoryCost,


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
