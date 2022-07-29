const obtenerPokemons = () => {
    console.log('Método para calcular aleatoriamente')

    const vectorNumerico = obtenerVectorNumerico()
    const vectorObjetos =  convertirVectorNombres(vectorNumerico)
    
    console.table(vectorObjetos)
    return vectorObjetos


}

const obtenerFotPokemons = () => {
    console.log('Método para calcular aleatoriamente')

    const vectorNumerico = obtenerVectorNumerico()
    const vectorObjetos =  convertirVectorImagen(vectorNumerico)
    console.table(vectorObjetos)
    return vectorObjetos


}

const getFotPokemonOptions = async () => {
    return await obtenerFotPokemons()
}

const getPokemonOptions = async () => {
    return await obtenerPokemons() //método fachada
}

function getNumeroAleatorio(min, max) {
    max++
    return Math.floor(Math.random() * (max - min) + min)
}

const obtenerVectorNumerico = () => {
    const arregloPokemonNumero = [getNumeroAleatorio(1, 5), getNumeroAleatorio(1, 5), getNumeroAleatorio(1, 5)]
    return arregloPokemonNumero
}

const convertirVectorNombres = async ([p1, p2, p3] = []) => {
    //const pos1 = vector[0]
    const data1 = await obtenerNombrePokemonAPI(p1)
    const data2 = await obtenerNombrePokemonAPI(p2)
    const data3 = await obtenerNombrePokemonAPI(p3)

   // const foto1 = await obtenerImagenPokemonAPI(p1)
    //const foto2 = await obtenerImagenPokemonAPI(p2)
    //const foto3 = await obtenerImagenPokemonAPI(p3)
    const foto1 = obtenerImagenPokemonAPI(p1)
    const foto2 =  obtenerImagenPokemonAPI(p2)
    const foto3 =  obtenerImagenPokemonAPI(p3)



    
    console.log(data1)
    console.log(data2)
    console.log(data3)
   
    return [{ nombre: data1.name, id: data1.id, foto: foto1 }, { nombre: data2.name, id: data2.id, foto: foto2}, { nombre: data3.name, id: data3.id, foto: foto3 }]
}

const convertirVectorImagen = async([p1, p2, p3]= [])=>{
    const foto1 = obtenerImagenPokemonAPI(p1)
    const foto2 =  obtenerImagenPokemonAPI(p2)
    const foto3 =  obtenerImagenPokemonAPI(p3)

    console.log(foto1)
    console.log(foto2)
    console.log(foto3)


    return [{foto: foto1}, {foto: foto2}, {foto: foto3}]
} 

const obtenerNombrePokemonAPI = async (id) => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then(r => r.json())
    return data
}

const obtenerImagenPokemonAPI = async (id) =>{
    const foto = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+id+'.svg'
    return foto
}

export default getPokemonOptions
