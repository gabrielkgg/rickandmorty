<template>
    <div>
        <div class="modal-details-title">ABOUT</div>
        <div class="modal-details-text">
            {{ textAbout }}
        </div>
    </div>
    <div>
        <div class="modal-details-title">ORIGIN</div>
        <div class="modal-details-label">{{ textOriginType }}</div>
        <div class="modal-details-text bigger">
            {{ textOriginPlanet }}
        </div>
        <div class="modal-details-text medium">
            {{ textOriginDimension }}
        </div>
        <div class="modal-details-label">{{ textOriginResidents }}</div>
    </div>
    <div>
        <div class="modal-details-title">LOCATION</div>
        <div class="modal-details-label">{{ textLocationType }}</div>
        <div class="modal-details-text bigger">
            {{ textLocationPlanet }}
        </div>
        <div class="modal-details-text medium">
            {{ textLocationDimension }}
        </div>
        <div class="modal-details-label">{{ textLocationResidents }}</div>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { CharacterGender } from '../constants/characterGender'
import { CharacterStatus } from '../constants/characterStatus'
import { Prop } from '../decorators/prop.decorator'
import { CharacterDto } from '../dto/character.dto'

@Options({})
export default class TextAbout extends Vue {
    @Prop() character: CharacterDto = null

    get textAbout() {
        return `${this.whoIs} ${this.status}. ${this.location}.`
    }

    get whoIs() {
        const isWas = this.character.status === CharacterStatus.DEAD ? 'was' : 'is'
        return `${this.character.name} ${isWas} a ${this.character.gender} ${this.character.species}.`
    }

    get status() {
        const heOrShe = this.heOrShe
        if (this.character.status === CharacterStatus.ALIVE) {
            return `${heOrShe} is alive and well`
        } else if (this.character.status === CharacterStatus.DEAD) {
            return `${heOrShe} is dead`
        }

        return `It can't be told if ${heOrShe} is alive or dead`
    }

    get heOrShe() {
        switch (this.character.gender) {
            case CharacterGender.MALE:
                return 'He'
            case CharacterGender.FEMALE:
                return 'She'
            default:
                return 'It'
        }
    }

    get location() {
        if (this.character?.location) {
            return `Last seen in ${this.character.location.name}`
        }

        return `Last seen in... well... I forgot`
    }

    get textOriginType() {
        if (this.character.origin) {
            return this.character.origin.type
        }

        return 'Unknown type'
    }

    get textOriginPlanet() {
        if (this.character.origin) {
            return this.character.origin.name
        }

        return 'Unknown'
    }

    get textOriginDimension() {
        if (this.character.origin) {
            return this.character.origin.dimension
        }

        return 'Unknown dimension'
    }

    get textOriginResidents() {
        if (this.character.origin) {
            return `${this.character.origin.residents.length} residents`
        }

        return 'Unknown residents'
    }

    get textLocationType() {
        if (this.character.location) {
            return this.character.location.type
        }

        return 'Unknown type'
    }

    get textLocationPlanet() {
        if (this.character.location) {
            return this.character.location.name
        }

        return 'Unknown'
    }

    get textLocationDimension() {
        if (this.character.location) {
            return this.character.location.dimension
        }

        return 'Unknown dimension'
    }

    get textLocationResidents() {
        if (this.character.origin) {
            return `${this.character.origin.residents.length} residents`
        }

        return 'Unknown residents'
    }
}
</script>
