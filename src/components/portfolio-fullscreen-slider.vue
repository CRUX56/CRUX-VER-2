<script>
export default {
  props: {
    portfolioSlider: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  methods: {
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.portfolioSlider.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.portfolioSlider.length) %
        this.portfolioSlider.length;
    },
  },
};
</script>

<template>
  <div class="fullscreen-slider">
    <div class="slider-container">
      <transition-group name="slider" mode="out-in">
        <div
          v-for="(image, index) in portfolioSlider"
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
