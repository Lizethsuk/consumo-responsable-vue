<template>
    <b-container>
       <HelloWorld></HelloWorld>
    </b-container>
</template>

<script>
    import HelloWorld from "../Components/HelloWorld"
    
    export default {
        name: "Home",
        data() {
            return {
               
            }
        },
        components: {HelloWorld},
      
    }
</script>

<style scoped lang="stylus">
    @import "~@/core/Styles/variables.styl"
    @import "~@/core/Styles/mixins.styl"

</style>