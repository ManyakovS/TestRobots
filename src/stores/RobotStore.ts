import { defineStore } from 'pinia';
import accessory from './JSON/accessory.json'
import inventory from './JSON/inventory.json'

export const useRobotStore = defineStore('RobotStore', {

    state: () => {
        return {
            /* Параметры текста */
            /* header */
            header_text_button: 'Произвести биоробота',

            /* home page */
            homePage_text: 'Фабрика по производству биороботов',

            /*  */



            /*  Магазин роботов */

            coin: 0,
            coin_limit: 100,
            coin_per_click: 1,
            coin_bust_status: false,
            coin_bust: 5,

            error_coin_limit: false,
            error_not_enough_coins: false,
            error_not_enough_accessory: false,

            accessory,
            inventory,

            accessoryInDeveloping: {
                type: 'FrontEnd',
                Stabilizer: 'male',

                installedBiohand: 0,
                installedMicrochip: 0,
                installedSoul: 0,

                requiredBiohand: 4,
                requiredMicrochip: 4,
                requiredSoul: 1,
            }

        }
    },

    actions: {
        earnСoins() {
            let coin_hash: number;
            this.coin_bust_status == true ? coin_hash = this.coin + (this.coin_per_click * this.coin_bust) : coin_hash = this.coin + this.coin_per_click

            if(coin_hash > this.coin_limit)
                return this.error_coin_limit = true;
            else
                this.coin = coin_hash    
        },

        setAccessoryInInventory(name: string, value: number) {
            const inventory_item : any = this.inventory.find(i => i.name == name)
            inventory_item.count += value;
        },

        buyAccessory(name: string) {
            const accessory : any = this.accessory.find(a => a.name == name)

            if(accessory != undefined){

                if(this.coin >= accessory.cost) {
                    this.coin -= accessory.cost
                    this.setAccessoryInInventory(name, 1)
                }
                else{
                    this.error_not_enough_coins = true;
                }

            }
        },

        sellAccessory(name: string) {
            const accessory : any = this.inventory.find(i => i.name == name)
            
            if(accessory != undefined){
                if(accessory.count > 0) {
                    this.coin += accessory.costForSale
                    this.setAccessoryInInventory(name, -1)
                }
                else
                    this.error_not_enough_accessory = true;
            }
        }


    }
}
)
