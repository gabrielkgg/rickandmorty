<template>
    <div id="main">
        <Search @search="searchCharacter" />
        <CharacterList :list="results" />
        <LoadingScreen :loading="loading" />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Search from './components/Search.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import CharacterList from './components/CharacterList.vue'
import gql from 'graphql-tag'
import { apiQuery } from './services/api.service'
import { ApiPayloadDto } from './dto/apiPayload.dto'

@Options({
    components: {
        Search,
        LoadingScreen,
        CharacterList,
    },
})
export default class App extends Vue {
    public payload = new ApiPayloadDto()
    public results = null
    public loading = false

    public async searchCharacter(characterName: string) {
        this.loading = true
        const query = gql`
            query Characters {
                characters(filter: { name: "${characterName}" }) {
                    results {
                        id
                        name
                        species
                        image
                    }
                }
            }
        `

        this.payload = await apiQuery(query)
        this.loading = this.payload?.loading
        this.results = this.payload.data.characters.results
    }
}
</script>

<style lang="scss">
@import 'sass/_all.scss';

#app {
    position: relative;
    overflow: hidden;
    background: #040404 url(assets/img/background.png) no-repeat;
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
}
#main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
</style>
