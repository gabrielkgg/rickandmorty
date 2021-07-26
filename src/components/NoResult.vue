<template>
    <div class="flex column align-items-center not-found">
        <div class="not-found-text">{{ notFoundPhrases }}</div>
        <div class="not-found-subtext">Maybe try another character name?</div>
        <div class="not-found-subtle">Pssst, this is a 404!</div>
        <img src="../assets/gif/rick404.gif" alt="404" class="not-found-image" />
    </div>
</template>

<script lang="ts">
import { Vue, Options } from 'vue-class-component'

@Options({})
export default class LoadingScreen extends Vue {
    get notFoundPhrases() {
        const phrases = [
            'Misconfiguration of the portal gun.',
            'Portal coordinates not acquired.',
            'No... not again Morty!',
            'Get out of here, Summer!',
            'Wubba Lubba Dub Dub!',
        ]

        return phrases[Math.floor(Math.random() * phrases.length)]
    }
}
</script>

<style lang="scss" scoped>
@import '../sass/variables/_sizes.scss';

.not-found {
    &-text {
        font-size: 1.5em;
        font-weight: 700;
    }

    &-subtext {
        font-size: 1em;
    }

    &-subtle {
        font-size: 0.8em;
        font-weight: 700;
        color: var(--color-gray-2);
    }

    &-image {
        width: 250px;
        margin-top: 20px;
    }
}

@media only screen and (max-width: $max-width-mobile) {
    .not-found {
        &-text {
            font-size: 1.3em;
            text-align: center;
            margin-top: 0;
        }
    }
}
</style>
