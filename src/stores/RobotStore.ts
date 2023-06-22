import { defineStore } from 'pinia';
import { ref } from 'vue'
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
    const errorNotEnoughCoins = ref(false);
    const errorNotEnoughAccessory = ref(false);

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
        coinBustStatus.value == true ? coin_hash = coin.value + coinBusted : coin_hash = coin.value + coinPerClick

        if (coin_hash > coinLimit)
            return errorCoinLimit.value = true;
        else
            coin.value = coin_hash
    };
    const setAccessoryInInventory = (name: string, value: number) => {
        const inventoryItem: { name: string, cost: number, count: number } = inventory.value.find(i => i.name == name)!
        inventoryItem.count += value;
    };

    const buyAccessory = (name: string) => {
        const accessory: { name: string, cost: number } = accessories.value.find(a => a.name == name)!

        if (coin.value >= accessory.cost) {
            coin.value -= accessory.cost
            setAccessoryInInventory(name, 1)
        }
        else {
            errorNotEnoughCoins.value = true;
        }

    };

    const sellAccessory = (name: string) => {
        const accessory: { name: string, cost: number, count: number } = inventory.value.find(i => i.name == name)!

        let coin_hash = coin.value + accessory.cost;
        if (accessory.count > 0) {
            if (coin_hash <= coinLimit) {
                coin.value = coin_hash
                setAccessoryInInventory(name, -1)
            }
            else
                errorCoinLimit.value = true;
        }
        else
            errorNotEnoughAccessory.value = true;

    };

    const setCoinBustStatus = (value : boolean) : void => {
        coinBustStatus.value = value
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
        errorNotEnoughAccessory,
        errorNotEnoughCoins,
        accessories,
        inventory,
        accessoryInDeveloping,

        earnСoins,
        buyAccessory,
        sellAccessory,
        setCoinBustStatus

    }
})
