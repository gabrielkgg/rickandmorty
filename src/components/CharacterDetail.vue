<template>
    <div class="modal-overlay" @click="unsetCharacter"></div>

    <div class="close-mobile" v-if="character">
        <span @click="unsetCharacter"></span>
    </div>

    <div class="modal flex column" v-if="character">
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
}
</script>

<style lang="scss">
@import '../sass/_all.scss';

.modal-overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: #000000c7;
}

.modal {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 60%;
    height: 80%;
    background: var(--color-black);
    border: 1px solid var(--color-gray);
    border-radius: $border-radius;
    z-index: 1;

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
        border: 2px solid $color-gray-2;
        border-radius: $border-radius;
        overflow: hidden;
        margin-bottom: 2em;
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

        &-image {
            width: 150%;
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
        width: 90%;
        height: 75%;

        .close {
            display: none;
        }

        &-content {
            flex-direction: column;
        }

        &-portrait {
            top: -20px;
            left: 0;
            height: 100%;

            &-image {
                height: 100%;
                width: 100%;
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
