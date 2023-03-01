<template>
  <div class="register_input">
    <input type="email" id="email" placeholder="E-mail">
    <input type="password" id="password" placeholder="Contraseña">
    <button>Registrarme</button>
  </div>
</template>

<script>
export default {
  name: 'RegisterInput',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.register_input{
  width: 50%;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
