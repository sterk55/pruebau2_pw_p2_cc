
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



const convertirVectorImagen = async([p1, p2, p3]= [])=>{
    const foto1 = obtenerImagenPokemonAPI(p1)
    const foto2 =  obtenerImagenPokemonAPI(p2)
    const foto3 =  obtenerImagenPokemonAPI(p3)

    console.log(foto1)
    console.log(foto2)
    console.log(foto3)


    return [{foto: foto1}, {foto: foto2}, {foto: foto3}]
} 



const obtenerImagenPokemonAPI = async (id) =>{
    const foto = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/'+id+'.svg'
    return foto
}

export default getFotPokemonOptions