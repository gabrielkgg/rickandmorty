<template>
    <div id="main">
        <Search @search="searchCharacter" />
        <CharacterList :list="results" @setLoading="setLoading" @unsetLoading="unsetLoading" />
        <NoResult v-if="noResult" />
        <LoadingScreen :loading="loading" />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import Search from './components/Search.vue'
import LoadingScreen from './components/LoadingScreen.vue'
import CharacterList from './components/CharacterList.vue'
import NoResult from './components/NoResult.vue'
import gql from 'graphql-tag'
import { apiQuery } from './services/api.service'
import { ApiPayloadDto } from './dto/apiPayload.dto'

@Options({
    components: {
        Search,
        LoadingScreen,
        CharacterList,
        NoResult,
    },
})
export default class App extends Vue {
    public payload: ApiPayloadDto
    public results: any = null
    public loading = false
    public noResult: boolean

    public async searchCharacter(characterName: string) {
        this.loading = true
        const query = gql`
            query Characters {
                characters(filter: { name: "${characterName}" }) {
                    results {
                        id
                        name
                        species
                        status
                        image
                    }
                }
            }
        `

        this.payload = await apiQuery(query)
        this.loading = this.payload?.loading

        if (this.payload.data.characters) {
            this.results = this.payload.data.characters.results
            this.noResult = false
        } else {
            this.results = null
            this.noResult = true
        }
    }

    setLoading() {
        this.loading = true
    }

    unsetLoading() {
        this.loading = false
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
