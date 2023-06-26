<template>
  <div class="container">
    <header></header>
    <home></home>
    <wallet></wallet>
    <market></market>
    <stock></stock>
    <manufacture></manufacture>
    <notification-group></notification-group>
  </div>
</template>

<script setup lang="ts">
import Home from "./Template/Home.vue";
import Header from "./Template/Header.vue";
import Wallet from "./Template/Wallet.vue";
import Market from "./Template/Market.vue";
import Stock from "./Template/Stock.vue";
import Manufacture from "./Template/Manufacture.vue";
import NotificationGroup from "./Template/NotificationGroup.vue";

</script>

<style lang="scss">
.container {
  width: 100%;
  margin: 0 auto;
}

@media screen and (min-width: 1024px) and (max-width: 1920px) {
  .container {
    max-width: 1016px;
  }
}

@media screen and (min-width: 768px) and (max-width: 1024px) {
  .container {
    max-width: 760px;
  }
}

@media screen and (min-width: 320px) and (max-width: 768px) {
  .container {
    max-width: 312px;
  }
}


.content {
  width: 85.75%;
}

@media screen and (max-width: 1024px) {
  .content {
    margin: 0 auto;
  }
  
}

</style>
