<template>
  <div class="base-modal">
    <div class="base-modal__container">
      <div class="base-modal__header">
        <slot name="header" />
      </div>
      <div class="base-modal__content">
        <slot name="content" />
      </div>
      <div class="base-modal__footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.base-modal {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: $z-index-modal;

  &__container {
    min-width: 22%;
    max-width: 80vw;
    padding: 20px 30px;
    box-shadow: $box-shadow-color-red;
    border-radius: $base-border-radius-24;
    background-color: $base-color-white;
    position: relative;
    display: grid;
    grid-template-rows: auto 1fr auto;
  }

  &__header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
  }

  &__content {
    margin: 1.25rem 0;
    position: relative;
  }

  &__footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>