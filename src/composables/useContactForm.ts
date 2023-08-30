import { reactive, toRefs } from 'vue'

interface State {
  isModalOpen: boolean;
  formData: null | FormData;
}

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  isChecked: boolean;
}
const state = reactive<State>({
  isModalOpen: false,
  formData: null
})

export default function useContactForm() {

  const saveFormData = (data: FormData): void => {
    state.formData = data;
  };

  const getFormData = (): FormData | null => state.formData;

  return {
    ...toRefs(state),
    saveFormData,
    getFormData
  }
}

