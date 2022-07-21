<template>
    <div>
        <div class="search_bar">
            <main-search-view/>
        </div>
    </div>
</template>
<script>
import MainSearchView from '../components/MainSearchView.vue'
/* eslint-disable */ 
    export default {
        components: {MainSearchView},
        data() {
            return {
                sampleData: ''
            }
        },
        setup() {},
        created() {},
        mounted() {},
        unmonunted() {},
        methods: {}
    }
</script>
<style scoped>
    .search_bar{
        height: 80px;
        width: 1180px;
        margin: auto;
    }
</style>>