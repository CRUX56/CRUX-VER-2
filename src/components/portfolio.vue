<script>
import featuredPortfolioItem from "./featured-portfolio-item.vue";
//Import Project background imgs
import denOfTeas from "../assets/images/den-of-teas-hero-image.jpg";
import thmsprts from "../assets/images/thm-portfolio-hero-image.jpg";
import artOfacupuncture from "../assets/images/hero-4-bg.jpg";
import lindenComansa from "../assets/images/linden-comansa-hero-image.jpg";
import helivision from "../assets/images/helivision-hero-image.jpg";

export default {
  components: {
    featuredPortfolioItem,
  },
  data() {
    return {
      portfolioFeatured: [
        {
          title: "Den of Teas",
          backgroundImage: denOfTeas,
          link: "denOfTeasProject",
        },
        {
          title: "THMSPRTS",
          backgroundImage: thmsprts,
          link: "thmsprtsProject",
        },
        {
          title: "Art of Acupuncture",
          backgroundImage: artOfacupuncture,
          link: "artOfAcupunctureProject",
        },
        {
          title: "Linden Comansa",
          backgroundImage: lindenComansa,
          link: "lindenComansaProject",
        },
        {
          title: "Helivision",
          backgroundImage: helivision,
          link: "helivisionProject",
        },
      ],
    };
  },
};
</script>

<template>
  <section id="portfolio" class="section">
    <div class="container header">
      <div class="row align-items-center">
        <div class="col-lg-6">
          <h3>Projects ://</h3>
        </div>
        <div class="col-lg-6">
          <!--
          <a href="https://github.com/CRUX56" target="_blank">
            <button
              type="submit"
              class="btn align-item-end btn-highlight ml-2 mt-4 mt-sm-0"
            >
              GitHub
            </button>
          </a>-->
        </div>
      </div>
    </div>
    <div id="portfolio-grid">
      <div class="row">
        <div class="col-lg-12">
          <featuredPortfolioItem
            :portfolioFeatured="portfolioFeatured"
          ></featuredPortfolioItem>
        </div>
      </div>
    </div>
  </section>
</template>
