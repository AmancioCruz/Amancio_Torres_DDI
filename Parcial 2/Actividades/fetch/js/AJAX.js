const url = "https://jsonplaceholder.typicode.com/users";
//crear el objeto XMLHttpRequest es
//es el objeto principal que se encarga
//de hacer las peticiones http de forma asincrona

const xhr = new XMLHttpRequest();

//configuramos que tipo de pericion vasmoa hacer
//parametro 1 es el tipo de peticion
//parametro 2 es la url a donde se hara la peticion
//parametro 3 es si sera asincrono 
xhr.open('GET', url, true);

//establecemos la cabecera content-type para indicr que
//esperamos un JSON
xhr.setRequestHeader('Content-type', 'application/json');

//es definir la funcion que se ejecutara 
//cuando el estado de la peticion cambie
xhr.onreadystatechange = () => {

    //verificamos el estado de la peticion 
    //0 = unset, 1 = opened, 2 = header_recived, 
    //3 = Loading, 4 = done. 
    //verificamos que el estatus cambie a 4 y se complete
    if (xhr.readyState === 4) {

        //verificamos si la respuesta
        //fue exitosa (codigos 200 a 299)
        if (xhr.status >= 200 && xhr.status < 300) {

            //hacemos una conversion de la respuesta a formato
            //JSON poderlo convertir a un objeto de JavaScript
            // que podamos usar 
            const respuesta = JSON.parse(xhr.responseText);

            console.log(respuesta);
        }
        else{
            //manejamos el error lo mostramos en consola en caso 
            //que el el estatus de la respuesta no sea 200  
            console.error('Error HTTP: ', xhr.status, xhr.statusText);
        }
    }
}

//definirmos el manejo de errores en caso como conexion fallida, 
//tiempo exedido de la peicion, etc. 
xhr.onerror = ()=>{

}

//definimos el metodo para manejar el tiempo de espera de la peticion
xhr.ontimeout = ()=>{

}

//definimo el timpo de espera maximo de la peticion si la peticion tarda mas 
xhr.timeout = 2000;

//enviamos la peticion como es get enviamos null,
//si fuera post o null enviariamos el cuerpo de la peticion
xhr.send(null)


/*Integrar al formulario de Inicio de sesion y registro:
    -Una peticion usando Fetch a cuakquier api que elijan 
        (No la Pokeapi).
    -Que la informacion de la peticion se muestre una vez
        el usuario haya iniciadio Sesion.
*/