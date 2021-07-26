<template>
    <div v-if="loading" class="overlay">
        <img src="../assets/img/loading.png" alt="Loading" class="loading-image" />
        <img src="../assets/img/portalloader.png" alt="Portal" class="loading-portal" />
        <div class="loading-text">Loading</div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'

@Options({})
export default class LoadingScreen extends Vue {
    @Prop() loading = false
}
</script>

<style lang="scss" scoped>
@import '../sass/variables/_presets.scss';

.overlay {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 999;

    backdrop-filter: blur(6px);

    .loading-image {
        border: 2px solid var(--color-gray-2);
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
