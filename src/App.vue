<template>

  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <IpPublica/>
  
</template>

<script>

import IpPublica from './components/IpPublicas.vue'


export default {
  name: 'App',
  components: {
    IpPublica,
    
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
