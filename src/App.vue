<template>
    <div id="main">
        <Search />
        <LoadingScreen />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Search from './components/Search.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import gql from 'graphql-tag'
import { apiQuery } from './services/api.service'

@Options({
    components: {
        Search,
        LoadingScreen,
    },
})
export default class App extends Vue {
    public results = null
    async beforeMount() {
        const query = gql`
            query Characters {
                characters {
                    results {
                        id
                        name
                        image
                    }
                }
            }
        `
        this.results = await apiQuery(query)
    }
}
</script>

<style lang="scss">
@import 'sass/_all.scss';

#app {
    position: relative;
    overflow: hidden;
    background: url(assets/img/background.png) no-repeat;
    background-size: cover;
}
#main {
    height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
