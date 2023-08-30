<template>
  <div>
    <div class="main-item" ref="home">
      <HomeComponent /> 
    </div>
    <div class="main-item" ref="about">
      <AboutComponent />
    </div>
    <div class="main-item" ref="gallery">
      <GalleryComponent />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { nextTick, onMounted, onUnmounted, ref, VNodeRef} from 'vue';
import { HomeComponent, AboutComponent, GalleryComponent } from '@/components'
import { NavigationItems } from '@/utils/types';

const home = ref<VNodeRef | null>(null);
const about = ref<VNodeRef | null>(null);
const gallery = ref<VNodeRef | null>(null);

const scrollTo = (e: string): void => {
  let element;

  if (e === NavigationItems.HOME) {
    element = home.value;
  } else if (e === NavigationItems.ABOUT) {
    element = about.value;
  } else if (e === NavigationItems.GALLERY) {
    element = gallery.value;
  }
  nextTick(() => element!.scrollIntoView({ behavior: 'smooth', block: 'start'}));
}

onMounted(
  () => window.addEventListener('scroll-to-component', (e: any): void => scrollTo(e.detail))
);

onUnmounted(
  () => window.removeEventListener('scroll-to-component', (e: any): void => scrollTo(e.detail))
)
</script>

<style lang="scss" scoped>
.main-item {
  margin: $base-space-32 0;
  scroll-margin-top: $base-space-64;
}
</style>