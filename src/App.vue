<template>

  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  
  <CasinoPokemon/>
  
</template>

<script>

import CasinoPokemon from './components/CasinoPokemon.vue'

export default {
  name: 'App',
  components: {
    CasinoPokemon
    
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
