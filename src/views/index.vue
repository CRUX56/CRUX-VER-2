<script>
import Navbar from "@/components/navbar";
import Info from "@/components/info";
import Portfolio from "@/components/portfolio";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

import axios from "axios";

/**
 * Index-6
 */
export default {
  components: {
    Navbar,
    Info,
    Portfolio,
    Experience,
    Contact,
    Footer,
  },
  data() {
    return {
      navbarcolor: true,
      email: "",
    };
  },
  methods: {
    submitForm() {
      console.log("Hero contact form clicked");
      axios
        .post("mailer", {
          email: this.email,
        })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div>
    <Navbar :navbarcolor="this.navbarcolor" />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-6-bg position-relative"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-6-bg-img.jpg') + ')',
        }"
        id="home"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center">
                <h1 class="text-white hero-6-title mb-4 line-height-1_4">
                  Hello, I'm Dathan Cruz and I am a Front End Web Developer / UX
                  - UI Designer...
                </h1>
                <p class="text-white-50 w-75 mx-auto font-size-15">
                  and I have the skills and talent to help you in all aspects of
                  your business. Need proof?
                </p>
              </div>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <div class="text-center Subcribe-form mt-5">
                <form action="#">
                  <input type="text" placeholder="Enter your Email..." />
                  <button
                    type="submit"
                    class="btn btn-highlight ml-2 mt-4 mt-sm-0"
                  >
                    Contact Me
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Info />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
