<template>
    <div id="main">
        <Search @setCharacterName="setCharacterName" />
        <CharacterList :list="results" @setLoading="setLoading" @unsetLoading="unsetLoading" />
        <Pagination :info="info" @changePage="changePage" />
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
import Pagination from './components/Pagination.vue'
import gql from 'graphql-tag'
import { apiQuery } from './services/api.service'
import { ApiPayloadDto } from './dto/apiPayload.dto'

@Options({
    components: {
        Search,
        LoadingScreen,
        CharacterList,
        NoResult,
        Pagination,
    },
})
export default class App extends Vue {
    public payload: ApiPayloadDto
    public results: any = null
    public info: any = null
    public loading = false
    public noResult: boolean
    public characterName: string = null

    public setCharacterName(characterName: string) {
        this.characterName = characterName
        this.searchCharacter(null)
    }

    public async searchCharacter(page: number) {
        this.loading = true
        const query = gql`
            query Characters {
                characters(filter: { name: "${this.characterName}" }, page: ${page}) {
                    info {
                        pages
                        prev
                        next
                    }
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
            this.info = this.payload.data.characters.info
            this.noResult = false
        } else {
            this.results = null
            this.info = null
            this.noResult = true
        }
    }

    changePage(page: number) {
        this.searchCharacter(page)
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
@import 'sass/global.scss';
</style>
