<template>
    <div>
        <notification v-if="robotStore.errorCoinLimit" v-model="robotStore.errorCoinLimit" :notification="notification" />
        
        <notification v-if="robotStore.accessoryCompleted && isAccessoryComplete" :type="'NonClosing'" :notification="notification"
            @close="closeAccessoryComplete" />
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore";
import { computed, ref } from "vue";
import Notification from "../components/Notification.vue";
import {notification} from '../stores/types/types'

const robotStore = useRobotStore()

const isAccessoryComplete = ref(true);

const closeAccessoryComplete = () => {
    isAccessoryComplete.value = false
}

const notification = computed((): notification => {
    let returnNotification: notification
    if (robotStore.errorCoinLimit)
        returnNotification = robotStore.notifications.find(n => n.type == "errorCoinLimit")?.notification!

    if (robotStore.accessoryCompleted)
        returnNotification = robotStore.notifications.find(n => n.type == "accessoryCompleted")?.notification!

    return returnNotification
})
</script>

<style scoped></style>