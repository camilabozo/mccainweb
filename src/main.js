import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQn3eS_4mYtMDnKIcOZc_j5b9tZA7_S-I",
  authDomain: "mccain-db.firebaseapp.com",
  projectId: "mccain-db",
  storageBucket: "mccain-db.appspot.com",
  messagingSenderId: "217853655346",
  appId: "1:217853655346:web:bbb87e9be46b3c70973f2b",
  measurementId: "G-86X3QSJED7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics)