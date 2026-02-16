const nombre = 
        document.querySelector("#input_txt_nombre");
const apellido = 
        document.querySelector("#input_txt_apellido");
const boton_guardar =
        document.querySelector("#boton_guardar");

boton_guardar.addEventListener("click",(e)=>{
    e.preventDefault();
    
    //crea un nuevo objeto usuario
    const usuario = new Usuario(nombre.value,
                                apellido.value);
    console.log(usuario);
    //metodod de el objeto document que se 
    //encarga de crear elementos
    const nombre_info = document.createElement("h2");
    nombre_info.textContent = usuario.nombre;
    document.body.appendChild(nombre_info);

})

function cambiarNumero(event){
    const numeroElementos = event.target.value;
    const contenido = document.querySelector("#contenedor_correos");
    contenido.innerHTML = " "; //limpia la etiqueta y su contenido antes de agregar
    for(let i = 1; i <= numeroElementos ; i++ ){
        //se agrega contenido usando la insercion de html por medio del 
        //innerHTML, que agregara todo lo que esta dentro de htmlAgregar
        //este metodo reemplaza todo o que esta dentro de la etiqueta por 
        //lo nuevo que se quiere agregar
        
        const htmlAgregar = `<label for="correo-${i}">Ingrese el correo ${i}</label>
            <input type="email" name="correo-${i}" id="correo-${i}">
            <br>`;

        contenido.innerHTML += htmlAgregar;
    }
}

class Usuario{
    constructor(nom, ape){
        this.nombre = nom; 
        this.apellido = ape;
    }
}
 