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
      interval: null,
    };
  },
  methods: {
    startAutoPlay() {
      this.interval = setInterval(this.nextSlide, 9000); // Set the interval for automatic sliding (every 9 seconds)
    },
    stopAutoplay() {
      clearInterval(this.interval); // Clear the interval to stop automatic sliding
    },
    nextSlide() {
      this.currentSlide = (this.currentSlide + 1) % this.portfolioSlider.length;
    },
    prevSlide() {
      this.currentSlide =
        (this.currentSlide - 1 + this.portfolioSlider.length) %
        this.portfolioSlider.length;
    },
  },
  mounted() {
    this.startAutoPlay(); // Start automatic sliding on component mount
    console.log("portfolioSlider:", this.portfolioSlider);
  },
  beforeDestroy() {
    this.stopAutoplay(); // Stop automatic sliding on component destruction
  },
};
</script>

<template>
  <div class="fullscreen-slider">
    <div
      class="slider-container"
      :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
    >
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
      <button class="slider-next" @click="nextSlide">&#8250;</button>
    </div>
  </div>
</template>
