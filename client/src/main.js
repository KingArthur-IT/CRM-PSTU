/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9WjixxJoiqroACwZD9q4bMUoaPdtsfeM",
  authDomain: "pstu-crm.firebaseapp.com",
  projectId: "pstu-crm",
  storageBucket: "pstu-crm.appspot.com",
  messagingSenderId: "955447037172",
  appId: "1:955447037172:web:5edd1daa58c14b8e3822a1"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
