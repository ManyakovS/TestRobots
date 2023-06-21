<template>
    <div class="pagination" :class="{'pagination-with-arrow': showArrow }">
        <p class="pagination__page">{{ page }}</p>

        <div v-if="showArrow" class="pagination__scroll">
            <span class="pagination__scroll_text">скоролл</span>
            <span class="pagination__scroll_arrow"></span>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    props: {
        page: {
            type: String,
            required: true,
        },
        showArrow: {
            type: Boolean,
            default: false,
        }
    },
})
</script>

<style scoped lang="scss">

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

    &__scroll {
        display: flex;
        flex-direction: row-reverse;
        align-items: flex-end;
        position: relative;
        writing-mode: vertical-lr;
        transform: rotate(180deg);

        &_arrow {
            margin-bottom: 6px;
            transform: rotate(180deg);
            display: block;
            background-image: url(../assets/Arrow_bottom.svg);
            height: 24px;
            width: 24px;

        }
    }
}

.pagination-with-arrow {
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    height: 70%;
    margin: auto 0 40px 0;
}
</style>