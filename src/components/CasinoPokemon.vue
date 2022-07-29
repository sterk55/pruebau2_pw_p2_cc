<template>
  <h1>CASINO!!!</h1>

    <table>
        <tr>
            <td><label for="">Puntaje:</label></td>
            <td><label for=""> 5</label></td>
            <td></td>
            <td><label for="">Intentos:</label></td>
            <td><label for="">3</label></td>
        </tr>
    </table>
    <table>
        <tr>
            <td><img src='@/assets/negro.jpg' alt="" width="150px" height="150px"></td>
            <td><img src='@/assets/negro.jpg' alt="" width="150px" height="150px"></td>
            <td><img src='@/assets/negro.jpg' alt="" width="150px" height="150px"></td>

      </tr>
      </table>
      <table>
      <tr >
        <td v-for="pokemon2 in pokemones" :key="pokemon2.id"><label for="">{{pokemon2.nombre}}</label></td>
      </tr>
    </table>
    <table>
        <tr>
            <td v-for="pokemon3 in pokemones" :key="pokemon3.id"><img src="{{pokemon3.foto}}" alt=""></td>
        </tr>
    </table>
    <table>
        <tr>
            <td><button>JUGAR</button></td>
        </tr>
        <tr>
            <td><button>Reiniciar Juego</button></td>
        </tr>
    </table>





</template>

<script>
import getPokemonOptions from '@/helpers/obtenerOpcionPokemon.js'
import getFotPokemonOptions from '@/helpers/obternerOpcionFotopokemon.js'

export default {
   data(){
   return{
    pokemones:[],
    fotPokemones:[]
    }
    },
    methods:{
        async obtenerPokemonArreglo(){
            this.pokemones = await getPokemonOptions()
        },
        async obtenerFotPokemonArreglo(){
            this.fotPokemones = await getFotPokemonOptions()
        }

    },
    mounted(){
        this.obtenerPokemonArreglo(),
        this.obtenerFotPokemonArreglo()
    }
}
</script>

<style>
table{
    margin: 0 auto;
}
</style>