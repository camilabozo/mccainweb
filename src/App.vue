<template>
  <div id="app">
    <!-- <RegisterInput msg="Welcome to Your Vue.js App"/> -->
    <h4>Agrega una noticia</h4>
    <NoticeComponent/>
  </div>
</template>

<script>
// import RegisterInput from './components/RegisterInput.vue'
import NoticeComponent from './components/NoticeComponent.vue'

export default {
  name: 'App',
  components: {
    // RegisterInput,
    NoticeComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
