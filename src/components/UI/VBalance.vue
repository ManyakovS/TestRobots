<template>
    <h3 class="balance"><span>{{ coins }}</span> biorobo монет</h3>
</template>

<script lang="ts">
import { defineComponent} from 'vue'

export default defineComponent({
    props: {
        coins: {
            required: true,
            type: Number
        }
    }
})
</script>

<style scoped lang="scss">
.balance {
    margin-top: 2.2vh;
    color: #A3B8CC;
    font-weight: 500;

    span {
        font-weight: 700;
    }
}
</style>