import { defineStore } from 'pinia';
import { ref } from 'vue'
import accessoryJSON from './JSON/accessory.json'
import inventoryJSON from './JSON/inventory.json'

export const useRobotStore = defineStore("RobotStore", () => {

    const header_text_button: string = 'Произвести биоробота';
    const homePage_text: string = 'Фабрика по производству биороботов';

    const coin = ref(1);
    const coin_limit: number = 100;
    const coin_per_click: number = 1;
    const coin_bust_status = ref(false);
    const coin_bust: number = 5;

    const error_coin_limit = ref(false);
    const error_not_enough_coins = ref(false);
    const error_not_enough_accessory = ref(false);

    const accessories = ref(accessoryJSON);
    const inventory = ref(inventoryJSON);

    const accessoryInDeveloping = ref({
        type: 'FrontEnd',
        Stabilizer: 'male',

        installedBiohand: 0,
        installedMicrochip: 0,
        installedSoul: 0,

        requiredBiohand: 4,
        requiredMicrochip: 4,
        requiredSoul: 1,
    });

    const earnСoins = () => {
        let coin_hash: number;
        coin_bust_status.value == true ? coin_hash = coin.value + (coin_per_click * coin_bust) : coin_hash = coin.value + coin_per_click

        if (coin_hash > coin_limit)
            return error_coin_limit.value = true;
        else
            coin.value = coin_hash
    };
    const setAccessoryInInventory = (name: string, value: number) => {
        const inventory_item: { name: string, costForSale: number, count: number } = inventory.value.find(i => i.name == name)!
        inventory_item.count += value;
    };

    const buyAccessory = (name: string) => {
        const accessory: { name: string, cost: number } = accessories.value.find(a => a.name == name)!

        if (coin.value >= accessory.cost) {
            coin.value -= accessory.cost
            setAccessoryInInventory(name, 1)
        }
        else {
            error_not_enough_coins.value = true;
        }

    };

    const sellAccessory = (name: string) => {
        const accessory: { name: string, costForSale: number, count: number } = inventory.value.find(i => i.name == name)!

        let coin_hash = coin.value + accessory.costForSale;
        if (accessory.count > 0) {
            if (coin_hash <= coin_limit) {
                coin.value = coin_hash
                setAccessoryInInventory(name, -1)
            }
            else
                error_coin_limit.value = true;
        }
        else
            error_not_enough_accessory.value = true;

    };

    const setCoinBustStatus = (value : boolean) : void => {
        coin_bust_status.value = value
    }


    return {
        header_text_button,
        homePage_text,
        coin,
        coin_limit,
        coin_per_click,
        coin_bust_status,
        coin_bust,
        error_coin_limit,
        error_not_enough_accessory,
        error_not_enough_coins,
        accessories,
        inventory,
        accessoryInDeveloping,

        earnСoins,
        buyAccessory,
        sellAccessory,
        setCoinBustStatus

    }
})
