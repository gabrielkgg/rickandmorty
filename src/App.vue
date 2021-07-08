<template>
    <div id="main">
        <img alt="Vue logo" src="./assets/logo.png" />
        <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import HelloWorld from './components/HelloWorld.vue'

@Options({
    components: {
        HelloWorld,
    },
})
export default class App extends Vue {
    mounted() {}
}
</script>

<style>
#app {
    position: relative;
    overflow: hidden;
}
#main {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
