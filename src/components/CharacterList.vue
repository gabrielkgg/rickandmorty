<template>
    <div class="container flex wrap justify-space-between">
        <div v-for="(character, index) in list" :key="index">
            <CharacterCard :character="character" />
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { CharacterDto } from '../dto/character.dto'
import CharacterCard from './CharacterCard.vue'

@Options({
    components: {
        CharacterCard,
    },
})
export default class CharacterList extends Vue {
    @Prop() list: CharacterDto[]
}
</script>

<style lang="scss">
@import '../sass/_all.scss';
</style>
