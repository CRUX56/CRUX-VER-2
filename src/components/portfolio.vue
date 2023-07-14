<script>
    import featuredPortfolioItem from './featured-portfolio-item.vue';

    export default {
        components: {
            featuredPortfolioItem
        },
        data() {
            return{
                portfolioFeatured: [
                    {
                        title: 'Portfolio Featured 1',
                        backgroundImage: '../assets/images/hero-1-img.png',
                        link: ''
                    },
                    {
                        title: 'Portfolio Featured 1',
                        backgroundImage: '../assets/images/hero-1-img.png',
                        link: ''
                    },
                    {
                        title: 'Portfolio Featured 1',
                        backgroundImage: '../assets/images/hero-1-img.png',
                        link: ''
                    }
                ]
            }
        }
    }
</script>

<template>
    <section id="portfolio" class="section bg-dark">
        <div class="row">
            <div class="col-lg-12">
                <featuredPortfolioItem :portfolioFeatured="portfolioFeatured"></featuredPortfolioItem>
            </div>
        </div>
        <!--
        <div class="row justify-content-center">
            <div class="col-lg-6">
                <div class="portfolio-item">
                    <div class="text-center mb-5">
                        <router-link :to="{ name: 'Portfolio-test-item-1'}">
                            <div class="thumb-hover">
                                <p>Portfolio Test 1</p>
                            </div>
                            <img src="" alt="">
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="portfolio-item">
                    <div class="text-center mb-5">
                        <router-link :to="{ name: 'Portfolio-test-item-2'}">
                            <div class="thumb-hover">
                                <p>Portfolio Test 2</p>
                            </div>
                            <img src="" alt="">
                        </router-link>
                    </div>
                </div>    
            </div>
            <div class="col-lg-6">
                <div class="portfolio-item">
                    <div class="text-center mb-5">
                        <router-link :to="{ name: 'Portfolio-test-item-3'}">
                            <div class="thumb-hover">
                                <p>Portfolio Test 3</p>
                            </div>
                            <img src="" alt="" />
                        </router-link>
                    </div>
                </div>
            </div>
            <div class="col-lg-6">
                <div class="portfolio-item">
                    <div class="text-center mb-5">
                        <router-link :to="{ name: 'Portfolio-test-item-4'}">
                            <div class="thumb-hover">
                                <p>Portfolio Test 4</p>
                            </div>
                            <img src="" alt=""/>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>-->
    </section>
</template>
