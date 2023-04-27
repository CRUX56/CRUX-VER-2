<script>

</script>

<template>
    <section class="section bg-dark">
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
        </div>
    </section>
</template>
