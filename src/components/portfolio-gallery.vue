<script>
export default {
  props: {
    imagesGallery: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      showLightbox: false,
      currentImage: "",
      currentAlt: "",
    };
  },
  methods: {
    openLightbox(src, alt) {
      this.currentImage = src;
      this.currentAlt = this.imagesGallery.find(
        (image) => image.src === src
      ).alt;
      this.showLightbox = true;
    },
    closeLightbox() {
      this.showLightbox = false;
    },
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-12">
        <div class="image-gallery">
          <div class="gallery-grid">
            <div
              v-for="(image, index) in imagesGallery"
              :key="index"
              class="gallery-item"
              @click="openLightbox(image.src, image.alt)"
            >
              <img :src="image.src" :alt="image.alt" class="gallery-image" />
            </div>
          </div>
          <div class="image-lightbox" v-if="showLightbox">
            <div class="lightbox-overlay" @click="closeLightbox"></div>
            <div class="lightbox-content">
              <img
                :src="currentImage"
                :alt="currentAlt"
                class="lightbox-image"
              />
              <button class="lightbox-close">
                X
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
