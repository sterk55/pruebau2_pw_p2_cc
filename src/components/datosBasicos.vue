<template>
<h2>Datos Basicos</h2>
<table>
    <tr>
        <td><label for="">Nombre {{tipo}}:</label></td>
        <td><input type="text"></td>
    </tr>
    <tr>
        <td><label for="">Apellido {{tipo}}:</label></td>
        <td><input type="text" name="" id="" value=""></td>
    </tr>
    <tr>
        <td><label for="">Correo {{tipo}}:</label></td>
        <td><input type="text" name="" id=""></td>
    </tr>



</table>


</template>

<script>
export default {
    name: "Datos",
    props: {
    tipo : String, 
    },
    
    
        
    data() {

        return {
           tipo: this.tipo
        };
    }

}
</script>

<style>



</style>