<template>
  <AppHeader class="header" />
  <AppMain class="main" />
  <AppFooter class="footer" />
  <ContactForm v-if="isModalOpen" />
</template>

<script setup lang="ts">
import { AppHeader, AppMain, AppFooter } from '@/layout';
import { ContactForm } from '@/components';
import { useContactForm } from '@/composables';

const { isModalOpen } = useContactForm();
</script>

<style lang="scss" scoped>
.header {
  width: 94vw;
  position: fixed;
  top: 0;
}

.main {
  margin-top: $base-space-64;
}
</style>
