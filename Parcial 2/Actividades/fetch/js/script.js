const url = "https://pokeapi.co/api/v2/pokemon";

fetch(url).then(respuesta => {
    if(respuesta.ok){
        return respuesta.json()
    }
}).then(
    datos => {
        for (let i = 0; i < datos.results.length; i++) {
            PeticionFetch(datos.results[i].url);
        }
    }).catch((error)=>{

    })

function PeticionFetch(url) {
    fetch(url).then(respuesta => respuesta.json()).then(
        datos => {
            console.log(datos);
        })
}