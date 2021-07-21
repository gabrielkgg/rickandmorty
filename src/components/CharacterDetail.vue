<template>
    <div class="modal-overlay"></div>
    <div class="modal">
        <button @click="unsetCharacter">Close</button>
        {{ payload }}
    </div>
</template>

<script lang="ts">
import gql from 'graphql-tag'
import { Vue, Options } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { ApiPayloadDto } from '../dto/apiPayload.dto'
import { CharacterDto } from '../dto/character.dto'
import { apiQuery } from '../services/api.service'

@Options({ emits: ['unsetCharacter'] })
export default class CharacterDetail extends Vue {
    @Prop() characterId: number
    public payload: ApiPayloadDto
    public character

    async mounted() {
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
        }
    }

    unsetCharacter() {
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
}
</style>
