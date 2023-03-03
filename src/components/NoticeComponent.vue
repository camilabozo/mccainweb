<template>
    <div class="notice_container">
        <textarea v-model="noticia" name="" id="" cols="30" rows="10"></textarea>
        <button @click="writeNoticia">Enviar</button>
    </div>
  </template>
  
  <script>
    import { getDatabase, ref, set } from "firebase/database";

  export default {
    name: 'NoticeComponent',

    data(){
        return {
            noticia:"",
            noticiaId: 1
        }
    },

   methods:{
        writeNoticia() {
            console.log("holaaaaaaaaa");
            const db = getDatabase();
            console.log(db);
            set(ref(db, 'noticias/' + this.noticiaId), {
                noticia: this.noticia
            });
            this.noticia = this.noticiaId + 1
        }
   }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
 
  </style>
  