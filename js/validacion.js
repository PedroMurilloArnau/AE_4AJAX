function validacion(){
let mensaje = "";
if(nombre.value.trim()==""){
    mensaje += "El campo nombre está vacio. \n"
} else{
    reNombre = /^[A-Z]/
    if (nombre.value.trim().match(reNombre) == null){
        mensaje += "El nombre debe de inciarse por mayusculas"
    }
}
if(direccion.value.trim() == "") {
    mensaje += "El campo dirección esta vacio. \n"
}
if(telefono.value.trim() == "") {
    mensaje += "El campo teléfono esta vacio. \n"
} else {
    reTel = /^[6-9][0-9]{8}/
    if(telefono.value.trim().match(reTel) == null){
        mensaje += "El modo del telefono no es valido. \n"
    }
}
    if(!(pequeña.checked||mediana.checked||grande.checked)){
        mensaje += "Debe seleccionar el tamaño de la pizza. \n"
    }
    if(!(cebolla.checked||piña.checked||bacon.checked||miel.checked)) {
        mensaje += "Debe seleccionar al menos un ingrediente. \n"
    }
if(mensaje === ""){
    calcuprecio()
    return true;  
}
if(mensaje !== ""){
    alert( mensaje)
    return false;
}
}