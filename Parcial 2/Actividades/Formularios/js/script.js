const formulario = document.querySelector("#inicio_sesion");

function iniciarSesion(){
    const datosFormulario = new FormData(formulario);

    const datos = Object.fromEntries(datosFormulario.entries());

    if(datos.correo !== "" && datos.contraseña !== ""){
        alert("sesion Iniciada correctamente");
        console.log(datos.correo);
        console.log(datos.contraseña);
        //aqui va toda la logica del inicio de sesion  
    }
}