<script>
import Navbar from "@/components/navbar";
import PortfolioHead from "@/components/portfolio-header";
import PortfolioGallery from "@/components/portfolio-gallery";
import PortfolioFullscreenSlider from "@/components/portfolio-fullscreen-slider";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer";

//Gallery Slider Img
import galleryImageOne from "../../assets/images/portfolio/den-of-teas/gallery-img-1.jpg";
import galleryImageTwo from "../../assets/images/portfolio/den-of-teas/gallery-img-2.jpg";
import galleryImageThree from "../../assets/images/portfolio/den-of-teas/gallery-img-3.jpg";
import galleryImageFour from "../../assets/images/portfolio/den-of-teas/gallery-img-4.jpg";
import galleryImageFive from "../../assets/images/portfolio/den-of-teas/gallery-img-5.jpg";
import galleryImageSix from "../../assets/images/portfolio/den-of-teas/gallery-img-6.jpg";
import galleryImageSeven from "../../assets/images/portfolio/den-of-teas/gallery-img-7.jpg";
import galleryImageEight from "../../assets/images/portfolio/den-of-teas/gallery-img-8.jpg";

//Portfolio Slider Imgs

import portfolioImageOne from "../../assets/images/portfolio/den-of-teas/laptop-mockup.jpg";
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
          projectTitle: "Den of Teas - A Transcendent Tea Experience",
          projectClient: "Den of Teas",
          projectCategory: "Website design, Branding",
          projectSynopsis:
            "In the heart of the West Indies, where the love for tea is deeply ingrained, the founders of Den of Teas have woven a beautiful tale that offers a one-of-a-kind traveling tea experience.",
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
    <Navbar />
    <PortfolioHead :projectHead="portfolioHead"></PortfolioHead>
    <!--<PortfolioFullscreenSlider
      :portfolioSlider="portfolioSliderimagesTop"
    ></PortfolioFullscreenSlider>-->
    <img
      src="@/assets/images/portfolio/den-of-teas/laptop-mockup.jpg"
      width="100%"
      height="auto"
    />
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
            <h3>Crafting a Transcendent Tea Experience Through UI/UX Design</h3>
            <hr />
          </div>
          <div class="col-lg-8">
            <p>
              As a website designer, my journey with Den of Teas began with
              understanding their vision: to create a digital experience that
              complements their unique tea offerings, celebrating the love for
              tea and the West Indies' cultural influence. The challenge was to
              translate their enchanting story into an immersive UI/UX design
              that would take visitors on a virtual tea-travel adventure.
            </p>
            <p>
              Drawing inspiration from the founders' passion for tea, I crafted
              a visually stunning website that captivates visitors from the
              moment they land on the homepage. An inviting color palette evokes
              the warmth of the West Indies, while incorporating subtle elements
              reminiscent of tea leaves and teapots, maintaining a sense of
              elegance and freshness.
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
            <h3>Experience through UI/UX Magic</h3>
            <hr />
          </div>
          <div class="col-lg-8">
            <p>
              Transparency and integrity are paramount for Den of Teas, so I
              made sure to highlight their commitment to all-natural ingredients
              and sustainable sourcing. This information is seamlessly
              integrated into the product pages, reinforcing their dedication to
              quality and customer trust.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/images/portfolio/den-of-teas/ipad-mockup.jpg"
      width="100%"
      height="auto"
    />
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3>In conclusion</h3>
            <hr />
          </div>
          <div class="col-lg-8">
            <p>
              Den of Teas' website embodies the essence of their brand, offering
              visitors an enchanting and memorable tea exploration. The fusion
              of thoughtful UI/UX design and captivating storytelling brings the
              founders' vision to life, making Den of Teas a digital destination
              that leaves a lasting impression on tea enthusiasts worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/images/portfolio/den-of-teas/iPhone-mockup.jpg"
      width="100%"
      height="auto"
    />
    <!--<PortfolioFullscreenSlider
      :portfolioSlider="portfolioSliderimagesBottom"
    ></PortfolioFullscreenSlider>-->
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>
