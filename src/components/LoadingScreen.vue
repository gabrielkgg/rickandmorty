<template>
    <div class="overlay">
        <img src="../assets/img/loading.png" alt="Loading" class="loading-image" />
        <img src="../assets/img/portalloader.png" alt="Portal" class="loading-portal" />
        <div class="loading-text">Loading</div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class LoadingScreen extends Vue {}
</script>

<style lang="scss">
@import '../sass/_all.scss';

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    backdrop-filter: blur(6px);

    .loading-image {
        border: 2px solid #606060;
        border-radius: $border-radius;
    }

    .loading-portal {
        animation: spin 4s infinite linear;
        margin-top: 2em;
        margin-bottom: 0.5em;
    }

    .loading-text {
        font-size: 1.5em;
        font-weight: 400;
    }
}
</style>
