<template>
    <div class="notice_container">
        <textarea v-model="noticia" name="" id="" cols="30" rows="10"></textarea>
        <button @click="writeNoticia">Enviar</button>
    </div>
  </template>
  
  <script>
    import { ref, set } from "firebase/database";

  export default {
    name: 'NoticeComponent',

    data(){
        return {
            noticia:"",
            cantidadNoticias: null
        }
    },

    created(){
        const noticiasRef = ref(this.$database, 'noticias');
        noticiasRef.once('value')
        .then(snapshot => {
            this.cantidadNoticias = snapshot.numChildren();
        });
    },

    methods:{
        writeNoticia() {
            set(ref(this.$database, 'noticias/' + (this.cantidadNoticias + 1)), {
                noticia: this.noticia
            });
        }
   }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  