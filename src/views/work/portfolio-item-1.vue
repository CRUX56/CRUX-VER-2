<script>
import Navbar from "@/components/navbar";
import PortfolioHead from "@/components/portfolio-header";
import Footer from "@/components/footer";

export default {
  components: {
    Navbar,
    PortfolioHead,
    Footer,
  },
  data() {
    return {
      navbarcolor: true,
      portfolioHead: [
        {
          projectTitle: "Portfolio Featured 1",
          projectClient:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi dignissimos vitae sapiente voluptates, itaque adipisci voluptate quia maiores nemo expedita et rem asperiores fuga ipsa recusandae saepe delectus quibusdam!",
          projectCategory: "Website design, etc",
          projectSynopsis:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae modi dignissimos vitae sapiente voluptates, itaque adipisci voluptate quia maiores nemo expedita et rem asperiores fuga ipsa recusandae saepe delectus quibusdam!",
        },
      ],
    };
  },
};
</script>

<template>
  <div>
    <Navbar :navbarcolor="this.navbarcolor" />
    <PortfolioHead :portfolioHead="portfolioHead"></PortfolioHead>
    <Footer></Footer>
  </div>
</template>
