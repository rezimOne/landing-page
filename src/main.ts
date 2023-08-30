import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createApp } from 'vue';
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@/assets/styles/css/main.css'
import App from './App.vue'
import '@/plugins/fontAwesome.ts';

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app
.use(vuetify)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app');
