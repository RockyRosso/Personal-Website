<template>
    <div
        :class="`container con-margins grid-layout align-top ${animate ? 'scroll-anim' : ''}`"
        :style="`gap: ${gridgap ? gridgap : '20'}px; max-width: 70%;`"
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
