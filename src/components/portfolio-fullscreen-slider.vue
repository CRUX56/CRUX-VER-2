<script>
export default {
  data() {
    return {
      images: [
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
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.images.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.images.length) % this.images.length;
    },
  },
};
</script>

<template>
  <div class="fullscreen-slider">
    <div class="slider-container">
      <transition-group name="slider" mode="out-in">
        <div
          v-for="(image, index) in images"
          :key="index"
          class="slider-item"
          :style="{ backgroundImage: 'url(' + image.src + ')' }"
        ></div>
      </transition-group>
    </div>
    <div class="slider-navigation">
      <button class="slider-prev" @click="prevSlide">&#8249;</button>
      <button class="slider-prev" @click="nextSlide">&#8249;</button>
    </div>
  </div>
</template>
