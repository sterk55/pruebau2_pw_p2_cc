<template>
   <h1>Consulta por la IP!</h1>
    <table>
        <tr>
            <td><h3>Ingrese la IP publica requerida</h3></td>
            
        </tr>
        <tr>
            <td><input type="text" id="idNumero"></td>
        </tr>
        <tr>
            <td><button v-on:click="ver()">Buscar IP</button></td>
        </tr>
        <tr>
            <td><h3>La informacion de esta IP es la siguiente:</h3></td>

        </tr>
    

    </table>
    <br>
    <table>
        <tr>
            <td><h4>Tipo de la IP:</h4></td>
            <td><label for="">{{tipo}}</label></td>
        </tr>
        <tr>
            <td><h4>Continente de la IP:</h4></td>
            <td><label for="">{{continente}}</label></td>
        </tr>
        <tr>
            <td><h4>Pais de la IP:</h4></td>
            <td><label for="">{{pais}}</label></td>
        </tr>
        <tr>
            <td><h4>Region de la IP:</h4></td>
            <td><label for="">{{region}}</label></td>
        </tr>
        <tr>
            <td><h4>Ciudad de la IP:</h4></td>
            <td><label for="">{{ciudad}}</label></td>
        </tr>
        <tr>
            <td><h4>Organizacion de la IP:</h4></td>
            <td><label for="">{{organizacion}}</label></td>
        </tr>
        <tr>
            <td><h4>Proovedor de la IP:</h4></td>
            <td><label for="">{{proovedor}}</label></td>
        </tr>
        <tr>
            <td><h4>Foto del Pais de la IP:</h4></td>
            <td><img :src=foto alt="no hay" v-if="foto"></td>
        </tr>
    </table>
</template>

<script>
export default {
    data(){
    return{
      tipo: "",
      foto: null,
      pais: "",
      continente: "",
      region: "",
      ciudad: "",
      organizacion: "",
      proovedor: ""  
    }
  },
    methods:{
        async resultadoIPS(numero){
            const {type, continent, country, city, region, connection, flag} = await fetch("https://ipwho.is/"+numero).then(r => r.json())
            this.tipo = type;
            this.continente = continent
            this.pais = country
            this.region = region
            this.ciudad = city
            this.organizacion = connection.org
            this.proovedor = connection.isp
            this.foto = flag.img
        },
        ver(){
            this.resultadoIPS(document.getElementById('idNumero').value)
        }
    }

}
</script>

<style>
button{
    background-color: #170568;
    border-radius: 5px;
    color: rgb(255, 255, 255);
    margin: 0 5px;
    cursor: pointer;
}

table{
    margin: 0 auto;
}
img {
 height: 240px;
 width: 322px;
 object-fit: contain;
 border-style: double;
 border-color: black;

}
label{
  
    font-family: 'Times New Roman', Times, serif;
}
h4{
      border-style: double;
    border-color: rgb(0, 9, 139);
        font-family: 'Times New Roman', Times, serif;

}
</style>