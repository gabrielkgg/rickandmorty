<template>
    <div class="container flex wrap justify-space-between">
        <div v-for="(character, index) in list" :key="index">
            <CharacterCard :character="character" @click="setCharacterDetail(character.id)" />
        </div>
    </div>
    <CharacterDetail
        v-if="selectedCharacterId"
        :characterId="selectedCharacterId"
        @unsetCharacter="unsetCharacter"
    />
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { CharacterDto } from '../dto/character.dto'
import CharacterCard from './CharacterCard.vue'
import CharacterDetail from './CharacterDetail.vue'

@Options({
    components: {
        CharacterCard,
        CharacterDetail,
    },
})
export default class CharacterList extends Vue {
    @Prop() list: CharacterDto[]
    public selectedCharacterId: number | null = null

    public setCharacterDetail(characterId: number) {
        this.selectedCharacterId = characterId
    }

    unsetCharacter() {
        this.selectedCharacterId = null
    }
}
</script>

<style lang="scss">
@import '../sass/_all.scss';
</style>
