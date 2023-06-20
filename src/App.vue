<template>
  <div class="container">
    <app-header></app-header>
    <app-home></app-home>
    <app-wallet></app-wallet>
  </div>
</template>

<script setup lang="ts">
import AppHome from "./components/AppHome.vue";
import AppHeader from "./components/AppHeader.vue";
import AppWallet from "./components/AppWallet.vue";

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

/*
.pagination {
  width: 14.25%;
  height: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #667380;



  &__scroll {
    display: flex;
    flex-direction: row-reverse;
    position: relative;
    transform: rotate(-90deg);
    left: -40px;


    &_text {
      left: -25px;
      top: -20px;


    }
    &_arrow {
      margin-right: 6px;
      transform: rotate(90deg);
      display: block;
      background-image: url(./assets/Arrow_bottom.svg);
      height: 24px;
      width: 24px;
      top: 30px;
    }
  }
}
*/

.pagination {
  width: 14.25%;
  font-weight: 500;
  font-size: 0.75rem;
  line-height: 1.5rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;

  color: #667380;

  p {
    line-height: 2rem;
  }
}


.content {
  width: 85.75%;
}
</style>
