<script>
    export default {
        props: {
            portfolioFeatured: {
                type: Array,
                required: true
            }
        },
        /*
        data() {
            return {
                items: [
                    {
                        title: 'Portfolio Featured 1',
                        backgroundImage: 'change this string', 
                    },
                    {
                        title: 'Portfolio Featured 2',
                        backgroundImage: 'change this string 2'
                    }
                ]                    
            }
        },*/
        methods: {
            handleNavigation() {
                this.$router.push({
                    name: this.portfolioFeatured.name,
                    params: {
                        link: this.portfolioFeatured.path
                    }
                });
            }
        },
        created() {
            console.log(this.portfolioFeatured);
        }
    }
</script>

<template>
    <div class="portfolio-featured">
        <div v-for="(item, index) in portfolioFeatured" :key="index" class="featured-item" @click="handleNavigation()">
            <div class="featured-header"><h3>{{ portfolioFeatured.title }}</h3></div>
        </div>
    </div>
</template>

