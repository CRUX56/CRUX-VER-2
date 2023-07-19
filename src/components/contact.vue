<script>
import {
  SendIcon,
  MailIcon,
  LinkIcon,
  PhoneCallIcon,
  ClockIcon,
  MapPinIcon,
} from "vue-feather-icons";
import axios from "axios";
export default {
  components: {
    SendIcon,
    MailIcon,
    LinkIcon,
    PhoneCallIcon,
    ClockIcon,
    MapPinIcon,
  },
  data() {
    return {
      name: "",
      email: "",
      comments: "",
    };
  },
  methods: {
    submitForm() {
      console.log("contact form clicked");
      axios
        .post("mailer", {
          name: this.name,
          email: this.email,
          comments: this.comments,
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
  <!-- Contact Us Start -->
  <section class="section bg-light" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Contact Us</h3>
            <p class="text-muted font-size-15">
              Et harum quidem rerum facilis est et expedita distinctio nam
              libero tempore cum soluta nobis eligendi cumque.
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <form name="contact-form" id="contact-form">
              <div class="row">
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="name">Name*</label>
                    <input
                      id="name"
                      type="text"
                      class="form-control"
                      placeholder="Your name..."
                    />
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <label for="email">Email Address*</label>
                    <input
                      id="email"
                      type="email"
                      class="form-control"
                      placeholder="Your email..."
                    />
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-lg-12">
                  <div class="form-group">
                    <label for="comments">Message*</label>
                    <textarea
                      id="comments"
                      rows="4"
                      class="form-control"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-sm-12">
                  <button type="button" id="submitForm" class="btn btn-primary">
                    Send Message
                    <send-icon class="icon-size-15 ml-2 icon"></send-icon>
                  </button>
                  <div id="simple-msg"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div class="col-lg-5">
          <div class="contact-detail text-muted ml-lg-5">
            <p class>
              <mail-icon class="icon-xs icon mr-1"></mail-icon>:
              <span
                ><a href="mailto:designers_crux@live.com" target="_blank"
                  >designers_crux@live.com</a
                ></span
              >
            </p>
            <p class>
              <PhoneCallIcon class="icon-xs icon mr-1"></PhoneCallIcon>:
              <span
                ><a href="tel:704-999-4690" target="_blank"
                  >(704) 999-4690</a
                ></span
              >
            </p>
            <p class>
              <LinkIcon class="icon-xs icon mr-1"></LinkIcon>:
              <span
                ><a
                  href="https://www.linkedin.com/in/dathan-cruz-a531613a/"
                  target="_blank"
                  >LinkedIn</a
                ></span
              >
            </p>
            <p class>
              <LinkIcon class="icon-xs icon mr-1"></LinkIcon>:
              <span
                ><a href="https://github.com/CRUX56" target="_blank"
                  >GitHub</a
                ></span
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Us End -->
</template>
