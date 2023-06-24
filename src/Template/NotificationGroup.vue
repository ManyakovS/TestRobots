<template>
    <div>
        <notification v-if="robotStore.errorCoinLimit" v-model="robotStore.errorCoinLimit" :notification="notification" />
        <notification v-if="robotStore.accessoryCompleted" v-model="robotStore.accessoryCompleted"
            :notification="notification" />
    </div>
</template>

<script setup lang="ts">
import { useRobotStore } from "../stores/RobotStore";
import { computed } from "vue";
import Notification from "../components/Notification.vue";
import NotificationJSON from "../stores/JSON/notifications.json"
import notificationType from '../Types/Notification'

const robotStore = useRobotStore()

const notification = computed((): notificationType => {
    let returnNotification: notificationType
    if (robotStore.errorCoinLimit)
        returnNotification = NotificationJSON.find(n => n.type == "errorCoinLimit")?.notification

    console.log(robotStore.accessoryCompleted)
    if (robotStore.accessoryCompleted)
        returnNotification = NotificationJSON.find(n => n.type == "accessoryCompleted")?.notification

    return returnNotification
})

/* const isNotification = computed(() => {
  if(robotStore.errorCoinLimit) return robotStore.errorCoinLimit
  else if(robotStore.accessoryCompleted) return robotStore.accessoryCompleted
}) */
</script>

<style scoped></style>