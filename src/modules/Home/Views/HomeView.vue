<template>
    <PageBase >
        <router-view></router-view>
    </PageBase>
</template>

<script>
    import PageBase from '../../../core/Components/PageBase.vue'

    export default {
        name: "HomeView",
        components: {PageBase}
    }
</script>

<style lang="stylus" scoped>
    .content-background-forms
        background-color white
</style>