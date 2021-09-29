<template>
    <div>
        <h2>This is my fotographie pagee</h2>

    <router-link :to="{name: 'fotos', params: { id : item }}" 
    v-for="(item, index) of fotosAreglos" :key="index">
        <button>foto {{item}}</button>
    </router-link>

        <Foto></Foto>
       
       <button @click='home'>home</button>
        <button @click='before'>before</button>
         <button @click='after'>after</button>
    </div>
</template>

<script>
import Foto from '@/components/Foto.vue';

export default {
   name: 'Fotos', 
   components : {
       Foto
   },
   data() {
       return {
           fotosAreglos : [1, 2,4, 5]
       }
   },
   methods: {
       home() {
           this.$router.push('/');
       },
       before() {
           this.$router.go(-1);
       },
       after() {
           this.$router.go(+1);
       }
   }

}
</script>