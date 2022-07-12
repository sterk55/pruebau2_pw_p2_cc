<template>
    <!--HTML-->
    <h2>Contador!</h2>
    <p>{{ numero }} <sup>2</sup> = {{ numero * numero }}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado}}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado}}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado}}</p>
    <p>{{ numero }} <sup>2</sup> = {{ obtenerCuadradoComputado}}</p>


    <div>
        <button v-on:click="incrementar()" class="botonesContador">Aumentar 1</button>
       
        <button v-on:click="disminuir()" class="botonesContador">Disminuir 1</button>
    </div>

</template>

<script>
export default {
    name: "Contador123",
    data() {

        return {
            numero: 5
        }
    },
    methods: {
        obtenerCuadrado() {
            console.log("Holis")
            return this.numero * this.numero
        },
        incrementar(){
            return this.numero++
        },
        disminuir(){
            return this.numero--
        }
    },
    computed:{
        obtenerCuadradoComputado(){
            console.log("Holis Computado")
            return this.numero * this.numero
        }
    }

}

</script>

<style>

.botonesContador{
    background-color: #64BB87;
    border-radius: 5px;
    color: white;
    margin: 0 5px;
    cursor: pointer;
}

.botonesContador:hover{
    background-color: #5aa67b;
    transition: 0.3s ease-in-out;
}
</style>