
document.addEventListener("load",function(){console.log("hola")})

function ValidarForm(){
     
    if (document.validar.nombre.value == ""){
        alert('Debe ingresar su nombre');
        return false;

    }
    if (document.validar.email.value == ""){
        alert('Debe ingresar su email');
        return false;

    }
    if (document.validar.Sugerencias.value == ""){
        alert('Debe llenar este campo');
        return false;

    }
   
    document.getElementById('formu').addEventListener("submit", enviado());

function enviado(){
    alert("Se ha registrado correctamente")}
}

document.addEventListener("load",function(){console.log("hola")})

function ValidarForm(){
     
    if (document.confirmar.name.value == ""){
        alert('Debe ingresar su nombre');
        return false;

    }
    if (document.confirmar.direccion.value == ""){
        alert('Debe ingresar su direccion');
        return false;

    }
    if (document.confirmar.gmail.value == ""){
        alert('Debe ingresar su email');
        return false;

    }
    if (document.confirmar.fecha.value == ""){
        alert('Debe confirmar la fecha');
        return false;

    }

    if (document.confirmar.apoyo.value == ""){
        alert('Debe llenar este campo');
        return false;

    }
  
    }
    document.getElementById('formula').addEventListener("submit", enviado());

function enviado(){
    alert("Se ha registrado correctamente")}
