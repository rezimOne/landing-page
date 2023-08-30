<template>
  <BaseModal v-if="isModalOpen">
    <template #header>
      <button class="close-btn" @click="closeModal">
        <span class="close-btn__icon">×</span>
      </button>
    </template>

    <template #content class="content">
      <form @submit.prevent="submitForm">
        <div class="form-control" :class="{ invalid: !isFirstNameValid }">
          <label for="first-name">First name *</label>
          <input
            id="first-name"
            name="first-name"
            type="text"
            v-model.trim="firstName"
            placeholder="Enter first name"
            @blur="validateFirstName"
          />
        </div>

        <div class="form-control" :class="{ invalid: !isLastNameValid }">
          <label for="last-name">Last name *</label>
          <input
            id="last-name"
            name="last-name"
            type="text"
            v-model.trim="lastName"
            placeholder="Enter last name"
            @blur="validateLastName"
          />
        </div>

        <div class="form-control" :class="{ invalid: !isEmailValid }">
          <label for="email">Email *</label>
          <input
            id="email"
            name="email"
            type="email"
            v-model.trim="email"
            placeholder="Enter email"
            @blur="validateEmail"
          />
        </div>

        <div class="form-control">
          <div class="confirm-rules">
            <input
              id="confirm-rules"
              name="confirm-rules"
              type="checkbox"
              v-model="confirm"
              required
            />
          </div>
        </div>

        <div>
          <button class="submit-btn">Wyślij</button>
        </div>
      </form>
    </template>

    <template #footer>
      <p class="instructions">* proszę uzupełnić wymagane pola</p>
    </template>
  </BaseModal>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { BaseModal } from '@/components/base';
import { useContactForm } from '@/composables';

const { isModalOpen, saveFormData, getFormData } = useContactForm();

const firstName = ref<string>('');
const lastName = ref<string>('');
const email = ref<string>('');
const confirm = ref<boolean>(false);
const isFirstNameValid = ref<boolean>(true);
const isLastNameValid = ref<boolean>(true);
const isEmailValid = ref<boolean>(true);

const submitForm = (): void => {
  if (isFormValid()) {
    saveFormData({
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      isChecked: confirm.value
    })
    resetForm();
    console.log('__FORM-DATA__', getFormData());
  }
};

const validateFirstName = (): void => {
  isFirstNameValid.value = firstName.value.trim() !== '';
};

const validateLastName = (): void => {
  isLastNameValid.value = lastName.value.trim() !== '';
};

const validateEmail = (): void => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  isEmailValid.value = emailRegex.test(email.value);
};

const isFormValid = (): boolean => {
  return isFirstNameValid.value && isLastNameValid.value && isEmailValid.value && confirm.value;
};

const resetForm = (): void => {
  firstName.value = '';
  lastName.value = '';
  email.value = '';
  confirm.value = false;
  isFirstNameValid.value = true;
  isLastNameValid.value = true;
  isEmailValid.value = true;
};

const closeModal = (): void => {
  isModalOpen.value = false;
}

</script>

<style lang="scss" scoped>
.form-control {
  margin: 0.5rem 0;
}

.form-control.invalid input {
  border-color: $base-color-red;
}

.form-control.invalid label {
  color: $base-color-red;
}

.form-control.invalid p {
  color: $base-color-red;
  font-size: $base-font-size-small;
}

label {
  font-size: $base-font-size-medium;
  color: $base-color-light-grey;
}

input {
  display: block;
  width: 250px;
  font-size: $base-font-size-medium;
  border: 1px solid $base-color-light-grey;
  border-radius: $base-border-radius-4;
  padding: $base-space-8;
}

::placeholder {
  color: $base-color-light-grey;
}

input[type='checkbox']{
  display: inline-block;
  width: auto;
}

.submit-btn {
  width: 250px;
  font: inherit;
  background: $base-color-red;
  color: $base-color-white;
  cursor: pointer;
  padding: $base-space-8 0;
  border-radius: $base-border-radius-4;

  &:hover {
    letter-spacing: $base-space-8;
  }

  &:active {
    transform: scale(.9);
  }
}

.instructions {
  font-size: $base-font-size-medium;
}

.close-btn {
  position: absolute;
  top: 0;
  right: 0;
  padding: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &__icon {
    font-size: $base-font-size-large;
    color: $base-color-grey;
    font-weight: bold;
    margin-right: $base-space-16;
  }
}

:deep(.base-modal__content){
  display: flex;
  justify-content: center;
}

:deep(.base-modal__footer){
  justify-content: center;
}
</style>