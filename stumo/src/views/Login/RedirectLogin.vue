<template>
    <div>
    </div>
</template>
<script>
/* eslint-disable */ 
    export default {
        mounted(){
            // this.$store.state.loginToken = this.$route.query.stumoToken;
            this.$cookies.set("stumo-token", this.$route.query.stumoToken, {httpOnly: true});
            this.$router.push("/");
        }
        // methods end
    }
</script>
<style scoped>
</style>