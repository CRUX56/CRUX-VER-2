<script>
import featuredPortfolioItem from "./featured-portfolio-item.vue";
import portfolioOne from "../assets/images/hero-4-bg.jpg";

export default {
  components: {
    featuredPortfolioItem,
  },
  data() {
    return {
      portfolioFeatured: [
        {
          title: "Portfolio Featured 1",
          backgroundImage: portfolioOne,
          link: "projectOne",
        },
        {
          title: "Portfolio Featured 2",
          backgroundImage: portfolioOne,
          link: "Portfolio-test-item-2",
        },
        {
          title: "Portfolio Featured 3",
          backgroundImage: portfolioOne,
          link: "Portfolio-test-item-3",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="portfolio" class="section bg-dark">
    <div class="row">
      <div class="col-lg-6">
        <h3>Projects ://</h3>
      </div>
      <div class="col-lg-6">
        <a href="https://github.com/CRUX56" target="_blank">
          <button
            type="submit"
            class="btn rounded-pill btn-primary ml-2 mt-4 mt-sm-0"
          >
            GitHub
          </button>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-12">
        <featuredPortfolioItem
          :portfolioFeatured="portfolioFeatured"
        ></featuredPortfolioItem>
      </div>
    </div>
  </section>
</template>
