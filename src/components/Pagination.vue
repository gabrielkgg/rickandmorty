<template>
    <div v-if="info" class="flex justify-center align-items-center margin-bottom">
        <span v-if="info.prev" class="chevron chevron-left" @click="changePage(info.prev)"></span>
        <span
            v-for="(page, index) in info.pages"
            :key="index"
            @click="changePage(page)"
            class="page-number"
            :class="{ active: activePage === page }"
        >
            {{ page }}
        </span>
        <span v-if="info.next" class="chevron chevron-right" @click="changePage(info.next)"></span>
    </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import { Prop } from '../decorators/prop.decorator'
import { QueryInfoDto } from '../dto/queryInfo.dto'

@Options({
    emits: ['changePage'],
})
export default class Pagination extends Vue {
    @Prop() info: QueryInfoDto
    public activePage: number = 1

    changePage(page: number) {
        this.activePage = page
        this.$emit('changePage', page)
    }
}
</script>

<style lang="scss" scoped>
.page-number {
    font-size: 1.2em;
    margin: 0 5px;
    cursor: pointer;
    transition: 0.2s;

    &:hover,
    &.active {
        color: var(--color-yellow);
    }
}

.chevron {
    display: inline-block;
    border-right: 2px solid #fff;
    border-bottom: 2px solid #fff;
    width: 10px;
    height: 10px;
    margin: 0 5px;
    cursor: pointer;

    &-left {
        transform: rotate(-225deg);
    }

    &-right {
        transform: rotate(-45deg);
    }

    &:hover {
        border-color: var(--color-yellow);
    }
}
</style>
