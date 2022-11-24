<template>
    <div>
    </div>
</template>
<script>
/* eslint-disable */ 
    export default {
        mounted(){
            // this.$store.state.loginToken = this.$route.query.stumoToken;
            this.$dialog.confirm("로그아웃 하실건가요?", (result)=>{
                if (result === true){
                    this.$cookies.remove("stumo-token");
                    window.location.href = "/";
                }else {
                    this.$router.push("/");
                }
            }) 
        }
        // methods end
    }
</script>
<style scoped>
</style>