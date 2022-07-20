<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--<contador2 title="Titulo 1" v-bind:inicio = "valorInicio"/>-->
  <!--    <contador2 title="Titulo 2" v-bind:inicio= "-16"/>-->
 
    <datos-basicos v-bind:tipo="tipo"/>
  <!--<calculadora />-->
  <Pregunta />
  
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Contador from './components/Contador.vue'
import Contador2 from './components/Contador2.vue'
import Calculadora from './components/Calculadora.vue'
import datosBasicos from './components/datosBasicos.vue'
import DatosBasicos from './components/datosBasicos.vue'
import Pregunta from './components/Pregunta.vue'


export default {
  name: 'App',
   data() {

        return {
            valorInicio: 27,
            tipo: 'Estudiante'
        };
    },
  components: {
    Contador,
    Calculadora,
    Contador2,
    datosBasicos,
    DatosBasicos,
    Pregunta
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
