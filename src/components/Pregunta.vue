<template>
    <img src="https://via.placeholder.com/250" alt="no encontrada" />
    <div class="bg-oscuro"></div>

    <div class="pregunta-container">
        <input v-model="pregunta" type="text" placeholder="Hazme una pregunta" />
        <p>Recuerda terminar con un signo de interrogación (?)</p>
        <h2>{{ pregunta }}</h2>
        <h1>Sí, No, ..... Pensando</h1>
    </div>

</template>

<script>
export default {
    data() {
        return {
            pregunta: 'Hola Mundo'
        }
    },
    methods: {
        async obtenerRespuesta() {
            const data = await fetch('https://yesno.wtf/api').then(r => r.json())
            console.log(data)
        }
    },
    watch: { //observador
        pregunta(value, oldValue) {
            console.log(value)
            console.log(oldValue)
            console.log(value.includes('?'));
            if (!value.includes('?')) return;
            console.log('Si Incluye')
            //Llamar y consultar al API
            this.obtenerRespuesta();

        }
    }
};
</script>

<style scoped>
.bg-oscuro {
    background-color: rgba(0, 0, 0, 0.4);
}

img,
.bg-oscuro {
    height: 100vh;
    max-height: 100%;
    max-width: 100%;
    position: fixed;
    top: 0px;
    width: 100vw;
    left: 0px;
}

.pregunta-container {
    position: relative;
    z-index: 99;
}

input {
    width: 250px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
}

input:focus {
    outline: none;
}

p {
    color: white;
    font-size: 20px;
    margin-top: 20px;
}

h1,
h2 {
    color: white;
}

h2 {
    margin-top: 150px;
}
</style>