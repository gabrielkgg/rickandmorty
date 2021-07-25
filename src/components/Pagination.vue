<template>
    <div v-if="info">
        <span
            v-for="(page, index) in info.pages"
            :key="index"
            @click="changePage(page)"
            class="margin-right"
        >
            {{ page }}
        </span>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'

@Options({
    emits: ['changePage'],
})
export default class Pagination extends Vue {
    @Prop() info: any

    changePage(page: number) {
        this.$emit('changePage', page)
    }
}
</script>

<style lang="scss" scoped></style>
