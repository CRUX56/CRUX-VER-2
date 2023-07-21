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
          projectTitle:
            "THM Motorsports - Where Car Passion Meets Premium Apparel",
          projectClient: "THMSPRTS",
          projectCategory:
            "Website design, Branding, Videography, Apperal Design",
          projectSynopsis:
            "THM Motorsports, based in Charlotte, North Carolina, is a premium clothing line tailored for car enthusiasts who live and breathe the automotive world.",
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
      src="@/assets/images/portfolio/thmsprts/jdm-stance-scene-homepage-slider.jpg"
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
            <h3>
              Revving Up Style: Redefining Automotive Apparel with THM
              Motorsports
            </h3>
            <hr />
          </div>
          <div class="col-lg-8">
            <p>
              As a UX/UI designer, I had the exhilarating opportunity to
              collaborate with THM Motorsports, a budding automotive clothing
              line located in Charlotte, North Carolina. Tasked with igniting
              their brand and creating a captivating digital experience, I
              embarked on a journey to craft an unparalleled identity that
              resonated with car enthusiasts worldwide.
            </p>
            <p>
              My first step was to understand THM Motorsports' core values,
              vision, and target audience. We delved deep into the minds of car
              aficionados who not only loved working on their vehicles but also
              cherished the sheer pleasure of driving. This vital insight served
              as the foundation for our design approach, as we sought to connect
              with the emotions and experiences that fuel their passion.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/images/portfolio/thmsprts/website-laptop-mockup.jpg"
      width="100%"
      height="auto"
    />
    <!--<PortfolioGallery :imagesGallery="images"></PortfolioGallery>-->
    <section class="section bg-light">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-4">
            <h3>
              Embracing Automotive Culture: Designing an Exclusive Clothing
              Collection
            </h3>
            <hr />
          </div>
          <div class="col-lg-8">
            <p>
              To reflect THM Motorsports' high-quality, premium ethos, we
              developed a dynamic logo that melded the spirit of automotive
              power with a touch of modern elegance. The logo's fluid lines and
              vibrant color scheme conveyed a sense of movement and energy,
              mirroring the excitement of the open road.
            </p>
            <p>
              My exploration extended to clothing designs, where we meticulously
              curated an exclusive collection that married style and
              functionality. From sleek hoodies adorned with vintage car
              graphics to tees featuring iconic vehicle silhouettes, each piece
              bore the essence of automotive culture. The designs showcased a
              keen attention to detail and craftsmanship, resonating with car
              enthusiasts who appreciated both aesthetics and performance.
            </p>
            <p>
              Videography emerged as an essential component in the brand's
              storytelling journey. We produced captivating videos that
              showcased the love-hate relationship car owners have with their
              modified vehicles. The films highlighted the joy of driving, the
              camaraderie among car enthusiasts, and the determination to stand
              out from the mundane automotive landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/images/portfolio/thmsprts/iPad-Mini-mockup.jpg"
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
              In parallel, we worked tirelessly to create a dynamic website
              powered by WooCommerce. The platform not only displayed the
              apparel collection in all its glory but also provided a seamless
              shopping experience for visitors. Our user-centric design ensured
              easy navigation, intuitive filters, and a secure checkout process,
              allowing customers to immerse themselves in THM Motorsports' world
              and make purchases effortlessly.
            </p>
            <p>
              The final outcome was a vibrant brand that resonated deeply with
              car enthusiasts, the misfits, and the dreamers who dared to create
              something extraordinary. THM Motorsports' new identity stood tall
              as an epitome of automotive passion, catering to a global
              community of like-minded individuals eager to express their love
              for cars through premium apparel.
            </p>
            <p>
              With our collaborative efforts, THM Motorsports is now
              well-equipped to conquer the automotive clothing scene, driving
              forward with style, innovation, and a community united by a shared
              love for all things automotive.
            </p>
          </div>
        </div>
      </div>
    </section>
    <img
      src="@/assets/images/portfolio/thmsprts/website-iphone-mockup.jpg"
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
