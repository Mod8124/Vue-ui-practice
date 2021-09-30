<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2 v-for="(item,index ) in  tareaState" :key="index">
      {{item}}
      </h2>
      <h3>{{saludo}}</h3>
      <h3>{{buenas}}</h3>
      <h5>{{contador}}</h5>
      <button @click="sum(1)">+</button>
  </div>
</template>

<script>
import {mapState, mapMutations} from "vuex";


export default {
  computed: {
    ...mapState('tareas', ['tareaState', 'saludo']),
    ...mapState('contador', ['contador']),
    ...mapState(['buenas'])
  },
  methods: {
    ...mapMutations('contador', ['sum'])
  }
}
</script>
