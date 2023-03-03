import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "firebase/database";


const firebaseConfig = {
  databaseURL: "https://mccain-db-default-rtdb.firebaseio.com",
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
const database = getDatabase(app);

function writeNoticia() {
  console.log("holaaaaaaaaa");
  const db = getDatabase();
  console.log(db);
  set(ref(db, 'noticias/1'), {
      noticia: "se ejecuto la funcion"
  });
}

writeNoticia()