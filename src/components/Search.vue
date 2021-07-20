<template>
    <div class="flex column align-items-center">
        <img src="../assets/img/rickandmortylogo.png" alt="Rick and Morty Logo" />
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

@Options({ emits: ['search'] })
export default class Search extends Vue {
    characterName = null

    public submit() {
        this.$emit('search', this.characterName)
    }
}
</script>

<style lang="scss" scoped>
.fields {
    margin: 5em 0;

    .search-input {
        margin-right: 1em;
    }
}
</style>
