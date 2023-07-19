<script>
import Navbar from "@/components/navbar";
import PortfolioHead from "@/components/portfolio-header";
import PortfolioGallery from "@/components/portfolio-gallery";
import Footer from "@/components/footer";

export default {
  components: {
    Navbar,
    PortfolioHead,
    PortfolioGallery,
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
      ],
      showLightbox: false,
      currentImage: "",
      currentAlt: "",
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
    <PortfolioGallery :imagesGallery="images"></PortfolioGallery>
    <Footer></Footer>
  </div>
</template>
