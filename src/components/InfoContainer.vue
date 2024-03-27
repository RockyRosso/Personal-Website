<template>
    <div
        :class="`container grid-layout align-top ${animate ? 'scroll-anim' : ''}`"
        :style="`gap: ${gridgap ? gridgap : '20'}px`"
    >
        <slot />
    </div>
</template>

<style lang="scss">
p,
li,
ul {
    text-align: start !important;

    &#short {
        max-width: 250px;
    }
}
</style>

<script lang="ts" setup>
defineProps({
    animate: Boolean,
    gridgap: String,
});
</script>
