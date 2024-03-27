<template>
    <div class="logo scroll-anim">
        <h1 :style="`font-size: ${(size || 1) / 2}px;`" class="logo-txt">
            ROCKY
        </h1>
        <img class="pfp" :width="size + 'px'" :src="rockyImage.src" />
        <h1 :style="`font-size: ${(size || 1) / 2}px;`" class="logo-txt">
            ROSSO
        </h1>
    </div>
</template>

<style scoped lang="scss">
.logo {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 20px;

    .logo-txt {
        text-align: center;
        margin: 0;
    }
}

@media screen and (max-width: 1130px) {
    .logo {
        display: grid;
        place-content: center;

        gap: 0;
    }

    .pfp {
        position: relative;
        left: 50%;
        transform: translate(-50%);
    }
}
</style>

<script setup lang="ts">
import rockyImage from '../assets/images/rocky.png';

defineProps({
    size: Number,
});
</script>
