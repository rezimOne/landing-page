<template>
  <div class="image-container">
    <img :src="image" class="image" alt="Buns Plates" />
  </div>
</template>

<script lang="ts" setup>
import image from '@/assets/images/buns_plates.png';
</script>

<style lang="scss" scoped>
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.image {
  max-width: 100%;
  height: auto;
}
</style>