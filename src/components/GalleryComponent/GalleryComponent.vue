<template>
  <div class="gallery">
    <div class="gallery-header">
      <p class="gallery-title">GALLERY</p>
    </div>
    <v-carousel
      hide-delimiter-background
      show-arrows="hover"
      class="carousel"
    >
      <v-carousel-item v-for="(slide, index) in gallery" :key="index" class="carousel-item">
        <v-sheet class="slide-container">
          <img :src="slide" class="slide-img" alt="Slide {{ index + 1 }}" />
        </v-sheet>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts" setup>
import { gallery } from '@/utils/utils';
</script>

<style lang="scss" scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: $base-space-32;
}

.gallery-header {
  text-align: center;
  font-size: $base-font-size-large;
  font-weight: bold;
  border-bottom: 2px solid $base-color-red;
  margin-bottom: $base-space-48;
}

.carousel {
  width: fit-content;
  margin: 0 auto;
  height: 100%;
}

.carousel-item {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.slide-img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
  max-height: 600px;
}
</style>