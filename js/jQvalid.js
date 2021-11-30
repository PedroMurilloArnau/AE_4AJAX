const URL_DESTINO_VALID = "http://127.0.0.1:5501/Act4/";
const RECURSO_VALID = "2021_11_PIZZAS.json";

let pizzaJson;

function validar(pizzaJson) {

    let mensaje = "";
    let precioTotal = "";

    $("#aviso").text("");

    if($("[name=nombre]")[0].value.trim() == "") {
        $("#aviso").append("<p>Rellena el nombre.</p>");
    } else {
        reNombre = /^[A-Z]/;
        if ($("[name=nombre]")[0].value.trim().match(reNombre) == null) {
            $("<p>Debe introducir su nombre con mayúscula inicial.</p>").appendTo($("#aviso"));
        }
    }

    if($("[name=direccion]")[0].value.trim() == "") {
        $("#aviso").append("<p>Rellena la dirección.</p>")
    }

    if($("[name=telefono]")[0].value.trim() == "") {
        $("#aviso").append("<p>Rellena el teléfono.</p>");
    } else {
        /* Los teléfonos en España tienen 9 cifras,
        los móviles comienzan por 6 ó 7,
        y los teléfonos fijos comienzan por 8 o por 9 */
        reTelf = /^[6-9][0-9]{8}$/;
        if ($("[name=telefono]")[0].value.trim().match(reTelf) == null) {
            $("#aviso").append("<p>Formato de teléfono incorrecto (deben ser 9 cifras).</p>");
        }
    }

    if($("[name=email]")[0].value.trim() == "") {
        $("#aviso").append("<p>Rellena  el email.</p>");
    } else {
        reEmail = new RegExp('^([0-9A-Za-z]+)@([0-9A-Za-z]+.[0-9A-Za-z]+)$');
        if ($("[name=email]")[0].value.trim().match(reEmail) == null) {
            $("#aviso").append("<p>Formato de email incorrecto.</p>");
        }
    }

    let pizzaTamJson = pizzaJson.PIZZASDATA.SIZES;

    tamano = $("[name=medida]");
    let seleccionado = false;
    let precio;
    let opcion;
    for(let i=0; i<tamano.length; i++) {
        if (tamano[i].checked) {
            seleccionado = true;
            opcion = i;
            break;        
        }
    }
    if(!seleccionado) {
        $("#aviso").append("<p>Elige un tamaño de pizza.</p>");
    } else {
        precio = parseFloat(pizzaTamJson[opcion].PRICE);
    }

    let pizzaIngJson = pizzaJson.PIZZASDATA.EXTRAING;
    let adicionales = $("[name=ingrediente]");
    let atLeastOneChecked = false;
    for (let i=0; i<adicionales.length; i++) {        
        if (adicionales[i].checked) {
            atLeastOneChecked = true;            
            precio += parseFloat(pizzaIngJson[i].PRICE);            
        }
    }
    if (!atLeastOneChecked) {
        $("#aviso").append("<p>Debes elegir al menos un ingrediente adicional.</p>");
    }

    precio = Math.round(precio*100) / 100;

    if ($("#aviso").html() === "") {
        $("#total").html("El total de tu pedido son " + precio + " €.");        
    } else {
        $("#total").html("");
    }
    
    return false;
}



function procRespuestaValid(jsonDocParsed) {
    console.log(jsonDocParsed)
    validar(jsonDocParsed);
}

function procErrorValid() {
    alert("A toda Pizza, esto no funciona!");
}


function peticAJAXvalid(){
    $.ajax({
            'type'  : 'GET',
            'url'   : URL_DESTINO + RECURSO,
            'async' : true,
        }
    ).done(procRespuestaValid)
    .fail(procErrorValid)
}


$(function() {
    $("#envioform").click(peticAJAXvalid);
})