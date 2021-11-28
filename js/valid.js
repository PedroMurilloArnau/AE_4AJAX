const URL_DESTINO_VALID = "http://127.0.0.1:5501/Act4/";
const RECURSO_VALID = "2021_11_PIZZAS.json";

let pizzaJson;

//(document.getElementsByName("enviar"))[0].onsubmit = peticionAsincronaValid;



function validar(objetoJson) {

    pizzaJson = JSON.parse(objetoJson);
    console.log(pizzaJson);

    let mensaje = "";
    let precioTotal = "";

    if(nombre.value.trim() == "") {
        mensaje += "Rellena el nombre. \n"
    } else {
        reNombre = /^[A-Z]/;
        if (nombre.value.trim().match(reNombre) == null) {
            mensaje += "Debe introducir su nombre con mayúscula inicial. \n"
        }
    }

    if(direccion.value.trim() == "") {
        mensaje += "Rellena la dirección. \n"
    }

    if(telefono.value.trim() == "") {
        mensaje += "Rellena el teléfono. \n"
    } else {
        /* Los teléfonos en España tienen 9 cifras,
        los móviles comienzan por 6 ó 7,
        y los teléfonos fijos comienzan por 8 o por 9 */
        reTelf = /^[6-9][0-9]{8}/;
        if (telefono.value.trim().match(reTelf) == null || telefono.value.trim().length > 9) {
            mensaje += "Formato de teléfono incorrecto (deben ser 9 cifras). \n"
        }
    }

    if(email.value.trim() == "") {
        mensaje += "Rellena el email. \n"
    } else {
        reEmail = new RegExp('^([0-9A-Za-z]+)@([0-9A-Za-z]+.[0-9A-Za-z]+)$');
        if (email.value.trim().match(reEmail) == null) {
            mensaje += "Formato de email incorrecto. \n"
        }
    }

    let pizzaTamJson = pizzaJson.PIZZASDATA.SIZES;

    tamano = document.getElementsByName("medida");
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
        mensaje += "Elige un tamaño de pizza. \n";
    } else {
        precio = parseFloat(pizzaTamJson[opcion].PRICE);
        /*switch (opcion) {
            case 0:
                precio = parseFloat(pizzaTamJson[opcion].PRICE);
                break;
            case 1:
                precio = parseFloat(pizzaTamJson[opcion].PRICE);
                break;
            case 2:
                precio = parseFloat(pizzaTamJson[opcion].PRICE);
                break;
        }*/
    }

    let pizzaIngJson = pizzaJson.PIZZASDATA.EXTRAING;
    console.log(pizzaIngJson);
    let adicionales = document.getElementsByName("ingrediente");
    let atLeastOneChecked = false;
    for (let i=0; i<adicionales.length; i++) {
        
        if (adicionales[i].checked) {
            atLeastOneChecked = true;
            
            precio += parseFloat(pizzaIngJson[i].PRICE);
            
        }
    }
    if (!atLeastOneChecked) {
        mensaje += "Debes elegir al menos un ingrediente adicional. \n"
    }


    aviso.innerText = mensaje;
    precio = Math.round(precio*100) / 100;

    if (mensaje === "") {
        precioTotal = "El total de tu pedido son " + precio + " €.";
        total.innerText = precioTotal;
    } else {
        total.innerText = "";
    }

    
    return false;
}



function procRespuestaValid(jsonDoc) {
    console.log(jsonDoc)
    pizzaJson = JSON.parse(jsonDoc);
    console.log(pizzaJson)
    validar(pizzaJson);
}


function peticionAsincronaValid() {
    
    let xmlHttp2 = new XMLHttpRequest();

    xmlHttp2.onreadystatechange = function () {
        console.log(xmlHttp2)
        if (this.readyState == 4) {
            if (this.status == 200) {
                validar(this.responseText);
            } else {
                alert("A toda Pizza, esto no funciona!");
            }
        }
    }    

    xmlHttp2.open('GET', URL_DESTINO_VALID + RECURSO_VALID, true);
    xmlHttp2.send(null);
}


window.addEventListener('load', function() {
    let accionenvioform = document.getElementById("envioform");
    accionenvioform.addEventListener("click", peticionAsincronaValid);
})