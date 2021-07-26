<template>
    <div class="container flex wrap justify-space-between">
        <div v-for="character in list" :key="character.id" class="card-holder">
            <CharacterCard :character="character" @click="setCharacterDetail(character.id)" />
        </div>
    </div>
    <CharacterDetail
        v-if="selectedCharacterId"
        :characterId="selectedCharacterId"
        @unsetCharacter="unsetCharacter"
        @unsetLoading="$emit('unsetLoading')"
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
    emits: ['setLoading', 'unsetLoading'],
})
export default class CharacterList extends Vue {
    @Prop() list: CharacterDto[]
    public selectedCharacterId: number = null

    public setCharacterDetail(characterId: number) {
        this.$emit('setLoading')
        this.selectedCharacterId = characterId
    }

    unsetCharacter() {
        this.selectedCharacterId = null
    }
}
</script>

<style lang="scss">
@import '../sass/variables/_sizes.scss';

@media only screen and (max-width: $max-width-mobile) {
    .card-holder {
        margin: 0 auto;
    }
}
</style>
