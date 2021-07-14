<template>
    <div class="flex column align-items-center">
        <img src="../assets/img/rickandmortylogo.png" alt="Rick and Morty Logo" />
        <div class="flex fields">
            <input
                class="search-input"
                type="text"
                name="characterName"
                placeholder="Search Characters"
                v-model="characterName"
            />
            <button>Search</button>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class Search extends Vue {}
</script>

<style lang="scss" scoped>
.fields {
    margin-top: 5em;

    .search-input {
        margin-right: 1em;
    }
}
</style>
