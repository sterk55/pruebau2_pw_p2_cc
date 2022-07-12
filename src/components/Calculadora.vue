<template>
<h2>Calculadora</h2>
<table>
    <tr>
        <td>
            <label for="">Ingrese el primer numero:</label>
        </td>
        <td>
            <input type="text" id="primerNumero" value="Primer numero">

        </td>
    </tr>
    <tr>
        <td>
            <label for="">Ingrese el segundo numero:</label>

        </td>
        <td>
            <input type="text" id="segundoNumero" value="Segundo numero">

        </td>
    </tr>
    <tr>
        <td>
            <button v-on:click="calcularResultado('suma')" >Sumar</button>
        </td>
        <td>
            <button v-on:click="calcularResultado('resta')">Restar</button>
        </td>
    </tr>
    <tr>
        <td>
            <button v-on:click="calcularResultado('multiplica')">Multiplicar</button>

        </td>
        <td>
            <button v-on:click="calcularResultado('divide')">Dividir</button>
        </td>
    </tr>
    <tr>
        <td>
            <label for="">El Resultado de su operacion es:</label>
        </td>
        <td>
            <label for="" id="resultado" style="visibility: hidden;">{{ resul }}</label>
        </td>
    </tr>


</table>

</template>

<script>
export default {
name: "calculadora",
data(){

    return {
        num1: 1,
        num2: 1,
        resul: 1
    }


},
methods: {
    calcularResultado(operador){
        document.getElementById("resultado").style.visibility = "visible"
        this.num1 = document.getElementById("primerNumero").value
        this.num2 = document.getElementById("segundoNumero").value
        if(operador=== "suma"){
            this.resul = parseInt(this.num1) + parseInt(this.num2)
            return this.resul
        }else if(operador === "resta"){
            this.resul = parseInt(this.num1) - parseInt(this.num2)
            return this.resul
        }
        else if(operador === "multiplica"){
            this.resul = parseInt(this.num1) * parseInt(this.num2)
            return this.resul
        }else if(operador === "divide"){
            this.resul = parseInt(this.num1) / parseInt(this.num2)
            return this.resul
        }

    }


}
}
</script>

<style>
button{
    background-color: #86dba8;
    border-radius: 5px;
    color: rgb(0, 0, 0);
    margin: 0 5px;
    cursor: pointer;
}

table{
    margin: 0 auto;
}

</style>