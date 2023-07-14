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
            handleNavigation(item) {
                this.$router.push({
                    name: this.name,
                    params: {
                        link: this.path
                    }
                });
            }
        }
    }
</script>

<template>
    <div class="portfolio-featured">
        <div 
        v-for="(item, index) in portfolioFeatured" :key="index" 
        :style="{ backgroundImage: 'url(' + backgroundImage + ')'}" 
        class="featured-item" @click="handleNavigation(item)">
            <div class="featured-header"><h3>{{ item.title }}</h3></div>
        </div>
    </div>
</template>

