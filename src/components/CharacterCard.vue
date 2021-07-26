<template>
    <div class="character-card">
        <img class="character-card-image" :src="character.image" :class="character.status" />
        <div class="character-card-tag">
            <div class="character-card-name">{{ character.name }}</div>
            <div class="character-card-species">{{ character.species }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { CharacterDto } from '../dto/character.dto'

@Options({})
export default class CharacterCard extends Vue {
    @Prop() character: CharacterDto
}
</script>

<style lang="scss" scoped>
@import '../sass/_all.scss';

.character-card {
    position: relative;
    border: 2px solid $color-gray-2;
    border-radius: $border-radius;
    overflow: hidden;
    margin-bottom: 2em;
    cursor: pointer;
    animation: slideFade 1s;

    &-image {
        &.Dead {
            -webkit-filter: grayscale(100%);
            filter: grayscale(100%);
        }
    }

    &-tag {
        width: 100%;
        padding: 0.25em 0.5em;
        background-color: #040404c2;
        backdrop-filter: blur(6px);
        position: absolute;
        bottom: 0;
        z-index: 1;
    }

    &-name {
        font-size: 28px;
        font-weight: 700;
    }

    &-species {
        font-size: 16px;
    }

    &:hover {
        border-color: var(--color-yellow);
        box-shadow: 0 2px 20px var(--color-yellow);
    }
}
</style>
