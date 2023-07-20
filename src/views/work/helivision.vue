<script>
import Navbar from "@/components/navbar";
import PortfolioHead from "@/components/portfolio-header";
import PortfolioGallery from "@/components/portfolio-gallery";
import PortfolioFullscreenSlider from "@/components/portfolio-fullscreen-slider";
import Contact from "@/components/contact.vue";
import Footer from "@/components/footer";

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
          src: "path/to/image1.jpg",
          alt: "image 1",
        },
        {
          src: "path/to/image2.jpg",
          alt: "image 2",
        },
        {
          src: "path/to/image3.jpg",
          alt: "image 3",
        },
        {
          src: "path/to/image1.jpg",
          alt: "image 1",
        },
        {
          src: "path/to/image2.jpg",
          alt: "image 2",
        },
        {
          src: "path/to/image3.jpg",
          alt: "image 3",
        },
      ],
      showLightbox: false,
      currentImage: "",
      currentAlt: "",

      portfolioSliderimages: [
        {
          src: "path/to/images1.jpg",
          alt: "Image 1",
        },
        {
          src: "path/to/images2.jpg",
          alt: "Image 2",
        },
        {
          src: "path/to/images3.jpg",
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
    </div>
    <section class="section bg-light">
      <div class="container">
        <div class="row">
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
        <div class="row">
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
      :portfolioSlider="portfolioSliderimages"
    ></PortfolioFullscreenSlider>
    <Contact></Contact>
    <Footer></Footer>
  </div>
</template>
