<script>
import Navbar from "@/components/navbar";
import PortfolioHead from "@/components/portfolio-header";
import PortfolioGallery from "@/components/portfolio-gallery";
import PortfolioFullscreenSlider from "@/components/portfolio-fullscreen-slider";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer";

//Gallery Slider Img
import galleryImageOne from "../../assets/images/hero-1-img.png";
import galleryImageTwo from "../../assets/images/hero-1-img.png";
import galleryImageThree from "../../assets/images/hero-1-img.png";
import galleryImageFour from "../../assets/images/hero-1-img.png";
import galleryImageFive from "../../assets/images/hero-1-img.png";
import galleryImageSix from "../../assets/images/hero-1-img.png";

//Portfolio Slider Imgs

import portfolioImageOne from "../../assets/images/hero-4-bg.jpg";
import portfolioImageTwo from "../../assets/images/linden-comansa-hero-image.jpg";
import portfolioImageThree from "../../assets/images/hero-4-bg.jpg";

export default {
  components: {
    Navbar,
    PortfolioHead,
    PortfolioFullscreenSlider,
    PortfolioGallery,
    Contact,
    Footer,
  },
  data() {
    return {
      navbarcolor: true,
      portfolioHead: [
        {
          projectTitle: "Portfolio Featured 1",
          projectClient: "Client Test Name",
          projectCategory: "Website design, etc",
          projectSynopsis:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi dignissimos vitae sapiente voluptates, itaque adipisci voluptate quia maiores nemo expedita et rem asperiores fuga ipsa recusandae saepe delectus quibusdam!",
        },
      ],
      images: [
        {
          src: galleryImageOne,
          alt: "image 1",
        },
        {
          src: galleryImageTwo,
          alt: "image 2",
        },
        {
          src: galleryImageThree,
          alt: "image 3",
        },
        {
          src: galleryImageFour,
          alt: "image 1",
        },
        {
          src: galleryImageFive,
          alt: "image 2",
        },
        {
          src: galleryImageSix,
          alt: "image 3",
        },
      ],
      showLightbox: false,
      currentImage: "",
      currentAlt: "",

      portfolioSliderimagesTop: [
        {
          src: portfolioImageOne,
          alt: "Image 1",
        },
        {
          src: portfolioImageTwo,
          alt: "Image 2",
        },
        {
          src: portfolioImageThree,
          alt: "image 3",
        },
      ],
      portfolioSliderimagesBottom: [
        {
          src: portfolioImageOne,
          alt: "Image 1",
        },
        {
          src: portfolioImageTwo,
          alt: "Image 2",
        },
        {
          src: portfolioImageThree,
          alt: "image 3",
        },
      ],
      currentSlide: 0,
    };
  },
};
</script>

<template>
  <!--Large Image or Set to Autoplay-->
  <!--Full width bar with content about the project-->
  <!--More images or gallery component-->
  <!--Full width bar with content about the project-->
  <div>
    <Navbar :navbarcolor="this.navbarcolor" />
    <PortfolioHead :projectHead="portfolioHead"></PortfolioHead>
    <PortfolioFullscreenSlider
      :portfolioSlider="portfolioSliderimagesTop"
    ></PortfolioFullscreenSlider>
    <!--
    <div class="row">
      <div class="col-lg-12">
        <div class="video-container">
          <iframe
            width="1920"
            height="auto"
            src="https://www.youtube.com/embed/oXWO_ciIWtQ?controls=0&amp;start=14"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>-->
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              laboriosam et blanditiis veniam, ab adipisci. Veritatis aspernatur
              quo assumenda velit maiores error, doloremque deserunt harum
              incidunt ex recusandae quasi qui!
            </p>
          </div>
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto ducimus hic earum cupiditate a magnam consequuntur
              adipisci ab quos voluptate, expedita accusamus, quibusdam
              veritatis vitae, asperiores rerum cum eius excepturi.
            </p>
          </div>
        </div>
      </div>
    </section>
    <PortfolioGallery :imagesGallery="images"></PortfolioGallery>
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3>Title</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              laboriosam et blanditiis veniam, ab adipisci. Veritatis aspernatur
              quo assumenda velit maiores error, doloremque deserunt harum
              incidunt ex recusandae quasi qui!
            </p>
          </div>
          <div class="col-lg-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Architecto ducimus hic earum cupiditate a magnam consequuntur
              adipisci ab quos voluptate, expedita accusamus, quibusdam
              veritatis vitae, asperiores rerum cum eius excepturi.
            </p>
          </div>
        </div>
      </div>
    </section>

    <PortfolioFullscreenSlider
      :portfolioSlider="portfolioSliderimagesBottom"
    ></PortfolioFullscreenSlider>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>
