<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
} from "vue-feather-icons";
export default {
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
  },
};
</script>

<template>
  <div>
    <!-- Footer Start -->
    <section
      class="footer"
      style="background-image: url(assets/images/footer-bg.png)"
    >
      <div class="container">
        <div class="row">
          <div class="col-lg-4">
            <div class="mb-5">
              <img
                src="@/assets/images/crux-logo-white.png"
                alt
                class
                height="24"
              />
            </div>
          </div>
          <div class="col-lg-7 offset-lg-1">
            <div class="row">
              <div class="col-md-4"></div>
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-3">Support</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Home</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Info</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link">Work</a>
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Experience</a
                    >
                  </li>
                  <li>
                    <a href="javascript: void(0);" class="footer-link"
                      >Contact Us</a
                    >
                  </li>
                </ul>
              </div>
              <div class="col-md-4">
                <h6 class="text-white text-uppercase mb-3">Links</h6>
                <ul class="list-unstyled footer-sub-menu">
                  <li>
                    <a
                      href="https://www.linkedin.com/in/dathan-cruz-a531613a/"
                      target="_blank"
                      class="footer-link"
                      >LinkedIn</a
                    >
                  </li>
                  <li>
                    <a
                      href="https://github.com/CRUX56"
                      class="footer-link"
                      target="_blank"
                      >GitHub</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="footer-alt py-3">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="text-center">
              <p class="text-white-50 font-size-15 mb-0">
                {{ new Date().getFullYear() }} © CRUX. All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Footer End -->
  </div>
</template>
