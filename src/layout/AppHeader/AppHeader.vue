<template>
  <header class="header">
    <div class="header-content">
      <Logo class="logo" />
      <ul class="navigation" :class="{ 'open': isMenuOpen }">
        <li class="navigation-item" @click="scrollToComponent(NavigationItems.HOME)">Home</li>
        <li class="navigation-item" @click="scrollToComponent(NavigationItems.ABOUT)">About</li>
        <li class="navigation-item" @click="scrollToComponent(NavigationItems.GALLERY)">Gallery</li>
        <li class="navigation-item" @click="handleModalStatus">Contact</li>
      </ul>
      <div class="social-icons">
        <font-awesome-icon icon="fa-brands fa-facebook" />
        <font-awesome-icon icon="fa-brands fa-instagram" />
        <font-awesome-icon icon="fa-brands fa-youtube" />
      </div>
    </div>
    <button class="hamburger" @click="toggleMenu" :class="{ 'active': isMenuOpen }">
      <span class="bar"></span>
      <span class="bar"></span>
      <span class="bar"></span>
    </button>
  </header>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Logo from '@/assets/images/logo.svg';
import { useContactForm } from '@/composables';
import { NavigationItems } from '@/utils/types';

const { isModalOpen } = useContactForm();

const isMenuOpen = ref<boolean>(false);

const toggleMenu = (): void => {
  isMenuOpen.value = !isMenuOpen.value;
};

const scrollToComponent = (navElementName: string): void => {
  window.dispatchEvent(new CustomEvent('scroll-to-component', { detail: navElementName }));
  isMenuOpen.value = false;
};

const handleModalStatus = (): void => {
  isModalOpen.value = true;
  toggleMenu();
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 100%;
  background: $base-color-white;
  border-bottom: 4px solid $base-color-red;
  z-index: $z-index-app-header;
  padding: $base-space-8 0;

  .header-content {
    width: 100%;
    position: relative;
    display: flex;
    align-items: center;
  }

  .navigation {
    display: flex;
    flex-direction: row;
    list-style: none;
    padding: 0;
    justify-content: space-evenly;
  }

  .navigation-item {
    color: $base-color-light-grey;
    cursor: pointer;
    user-select: none;
    text-align: center;
    width: 100px;
    background: $base-color-white;
    border-radius: $base-border-radius-24;
    padding: $base-space-8;
    transition: box-shadow .3s;
  }

  .navigation-item:hover {
    box-shadow: $box-shadow-nav-color-red;
  }

  .logo {
    width: 42px;
    margin: 0 $base-space-64;
  }

  .social-icons {
    position: absolute;
    right: $base-space-64;
    display: flex;
    align-items: center;
    gap: $base-space-16;
    width: fit-content;
    color: $base-color-grey;

    :nth-child(1) {
      font-size: 20px;
    }
    :nth-child(2) {
      font-size: 22px;
    }
    :nth-child(3) {
      font-size: 26px;
    }
  }
}

.hamburger {
  display: none;
}

.bar {
  display: block;
  width: 25px;
  height: 3px;
  margin: 5px auto;
  -webkit-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  background-color: $base-color-red;
}

@media only screen and (max-width: 768px) {
  .navigation {
    position: fixed;
    width: 94vw;
    top: -100%;
    justify-content: center;
    background: $base-color-white;
    box-shadow: 0px 8px 5px -4px rgba(66, 68, 90, 0.25);
    border-radius: 0 0 $base-border-radius-24 $base-border-radius-24;
    text-align: center;
    transition: 0.5s;
  }
  .navigation.open {
    top: calc($base-space-64 + $base-space-8);
  }
  .navigation-item {
    margin: $base-space-16 0;
  }
  .hamburger {
    display: block;
    cursor: pointer;
    position: absolute;
    right: 0;
  }

  .social-icons {
    margin-right: $base-space-32;
  }

  .logo { 
    margin: 0 !important;
  }

  .hamburger.active .bar:nth-child(1) {
    transform: translateY(8px) rotate(45deg);
  }
  .hamburger.active .bar:nth-child(2) {
    opacity: 0;
  }
  .hamburger.active .bar:nth-child(3) {
    transform: translateY(-8px) rotate(-45deg);
  }
}
</style>