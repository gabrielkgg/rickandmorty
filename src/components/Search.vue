<template>
    <div class="flex column align-items-center">
        <img src="../assets/img/rickandmortylogo.png" alt="Rick and Morty Logo" class="logo" />
        <div class="flex fields">
            <form @submit.prevent="submit">
                <input
                    class="search-input"
                    type="text"
                    name="characterName"
                    placeholder="Search Characters"
                    autocomplete="off"
                    v-model="characterName"
                />
                <button>Search</button>
            </form>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({ emits: ['setCharacterName'] })
export default class Search extends Vue {
    characterName: string = null

    public submit() {
        this.$emit('setCharacterName', this.characterName)
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables/_sizes.scss';

.fields {
    margin: 5em 0;

    .search-input {
        margin-right: 1em;
    }
}

@media only screen and (max-width: $max-width-mobile) {
    .logo {
        width: 90%;
    }
}
</style>
