<template>
    <div v-if="character" class="close-mobile">
        <span @click="unsetCharacter"></span>
    </div>

    <div class="modal-overlay" @click="closeModal">
        <div v-if="character" class="modal flex column" id="modal">
            <div class="close">
                <button @click="unsetCharacter">Close</button>
            </div>

            <div class="modal-content flex align-items-center">
                <div class="modal-portrait">
                    <img class="modal-portrait-image" :src="character.image" />
                    <div class="modal-portrait-tag">
                        <div class="modal-portrait-name">{{ character.name }}</div>
                        <div class="modal-portrait-species">{{ character.species }}</div>
                    </div>
                </div>
                <div class="modal-details">
                    <TextAbout :character="character" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { ApiPayloadDto } from '../dto/apiPayload.dto'
import { CharacterDto } from '../dto/character.dto'
import { apiQuery } from '../services/api.service'
import TextAbout from './CharacterDetailTextAbout.vue'

@Options({
    components: { TextAbout },
    emits: ['unsetCharacter', 'unsetLoading'],
})
export default class CharacterDetail extends Vue {
    @Prop() characterId: number
    public payload: ApiPayloadDto
    public character: CharacterDto = null
    public background: string

    async beforeMount() {
        if (this.characterId) {
            const queryCharacter = gql`
            query Character {
                character(id: ${this.characterId}) {
                    id
                    name
                    species
                    image
                    status
                    gender
                        origin {
                        name
                        type
                        dimension
                        residents {
                        id
                        }
                    }
                    location {
                        name
                        type
                        dimension
                        residents {
                            id
                        }
                    }
                }
            }`
            this.payload = await apiQuery(queryCharacter)
            this.character = this.payload.data.character
            this.$emit('unsetLoading')
        }
    }

    unsetCharacter() {
        this.character = null
        this.$emit('unsetCharacter')
    }

    closeModal($event: any) {
        if ($event.target.className === 'modal-overlay') {
            this.unsetCharacter()
        }
    }
}
</script>

<style lang="scss">
@import '../sass/variables/_sizes.scss';
@import '../sass/variables/_presets.scss';

.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
    background-color: #000;
    background-color: #000000c7;
}

.modal {
    background: var(--color-black);
    border: 1px solid var(--color-gray);
    border-radius: $border-radius;
    margin: 5% auto;
    padding: 1em;
    width: 80%;
    animation: fadeIn 0.4s;

    .close {
        padding: $padding;
        position: absolute;
    }

    .close-mobile {
        display: none;
    }

    &-content {
        height: 100%;
    }

    &-portrait {
        position: relative;
        border: 2px solid var(--color-gray-2);
        border-radius: $border-radius;
        overflow: hidden;
        left: -30px;

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
    }

    &-details {
        align-self: flex-start;
        padding: 5em;

        &-title {
            letter-spacing: 5px;
            color: var(--color-yellow);
            font-size: 0.9em;
            margin: 20px 0;
        }

        &-text {
            &.medium {
                font-size: 1.1em;
            }

            &.bigger {
                font-size: 1.5em;
            }
        }

        &-label {
            font-size: 0.9em;
            font-weight: 400;
            color: #8c8c8c;
            margin-top: 10px;
        }
    }
}

@media only screen and (max-width: $max-width-mobile) {
    .close-mobile {
        display: block;
        position: fixed;
        top: 20px;
        left: 20px;
        z-index: 2;

        span {
            font-size: 2em;
            font-weight: 700;

            &:after {
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                content: '\d7';
                color: #fff;
            }
        }
    }

    .modal {
        width: 85%;
        height: 78%;
        margin: 20% auto;

        .close {
            display: none;
        }

        &-content {
            flex-direction: column;
        }

        &-portrait {
            top: -50px;
            left: 0;

            &-image {
                min-height: 100%;
                min-width: 100%;
            }

            &-name {
                font-size: 20px;
            }
        }

        &-details {
            padding: 0.5em 1em;
            overflow-y: scroll;
            width: 100%;
        }
    }
}
</style>
