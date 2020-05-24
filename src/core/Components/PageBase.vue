<template>
    <div >
        <AppHeader />
        <slot></slot>
         <AppFooter />
    </div>
</template>

<script>
    import AppHeader from './AppHeader.vue'
    import AppFooter from './AppFooter.vue'
    export default {
        name: 'PageBase',
        components: {
            AppHeader , AppFooter 
        }
    
    }
</script>