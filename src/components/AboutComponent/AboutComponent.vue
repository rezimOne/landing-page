<template>
  <div class="wrapper">
    <div class="content">
      <div class="section-left">
        <img :src="authorImg" class="img" alt="Author img" />
      </div>
      <div class="section-right">
        <div class="custom-header">
          <p>ABOUT ME</p>
        </div>
        <div class="text-container">
          <p>{{ bio }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { bio, authorImg } from '@/utils/utils';
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  padding: $base-space-32;
}

.content {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: $base-space-32;
  max-width: 100%;
  text-align: center;
}

@media (min-width: 768px) {
  .content {
    grid-template-columns: 1fr 1fr;
    align-items: center;
    text-align: left;
  }
}

.img {
  max-width: 100%;
  height: auto;
}

.custom-header {
  font-size: $base-font-size-large;
  font-weight: bold;
  border-bottom: 2px solid $base-color-red;
  margin-bottom: $base-space-32;
}

.text-container {
  max-height: 500px;
  overflow: auto;
}
</style>