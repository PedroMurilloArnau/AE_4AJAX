const URL_DESTINO = "http://localhost:5501/Act4/"
const RECURSO = "2021_11_PIZZAS.json"


function enviarPeticionAsincrona() {

    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4) {
            if (this.status == 200) {
                procesarRespuesta(this.responseText);
            } else {
                alert("A toda Pizza, esto no funciona!");
            }
        }
    }

    xmlHttp.open('GET', URL_DESTINO + RECURSO, true);
    xmlHttp.send(null);
}


function procesarRespuesta(jsonDoc) {
    let pizzaJson = JSON.parse(jsonDoc);
    
    // Borrar el contenido de las opciones de las pizzas
    let tamanoPizzaHtml = document.getElementById("medidasPizza");
    removeAllChildNodes(tamanoPizzaHtml);

    // Rellenar las opciones de las pizzas
    let tamanosPizza = pizzaJson.PIZZASDATA.SIZES;

    for (let size of tamanosPizza) {

        let filaOpcion = document.createElement("p");
        let opcionTamano = document.createElement("input");
        let opcionTamanoParr = document.createElement("label");

        opcionTamano.type = "radio";
        opcionTamano.name = "medida";
        opcionTamano.value = size.VALUE;
        opcionTamano.id = size.VALUE;

        opcionTamanoParr.htmlFor = size.VALUE;
        opcionTamanoParr.textContent = " " + size.NAME + " (" + size.PRICE + "€)";

        filaOpcion.appendChild(opcionTamano);
        filaOpcion.appendChild(opcionTamanoParr);

        tamanoPizzaHtml.appendChild(filaOpcion);
    }

    // Borrar el contenido de los ingredientes adicionales
    let ingredientesHtml = document.getElementById("ingredientesPizza");
    removeAllChildNodes(ingredientesHtml);

    // Rellenar los ingredientes extra
    let ingredientesExtra = pizzaJson.PIZZASDATA.EXTRAING;

    for (let extra of ingredientesExtra) {

        let filaIngred = document.createElement("p");
        let casillaIngred = document.createElement("input");
        let descripIngred = document.createElement("label");

        //input
        casillaIngred.type = "checkbox";
        casillaIngred.id = extra.ID;
        casillaIngred.name = "ingrediente";
        casillaIngred.value = extra.VALUE;
        casillaIngred.className = "ingred-extra";

        //label
        descripIngred.htmlFor = extra.ID;
        descripIngred.textContent = " " + extra.NAME + " (+" + extra.PRICE + "€)";

        filaIngred.appendChild(casillaIngred);
        filaIngred.appendChild(descripIngred);

        ingredientesPizza.appendChild(filaIngred);

    }
}

/* basado en: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ */

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

window.addEventListener('load', function() {
    enviarPeticionAsincrona();
    let refrescarDatos = document.getElementById("refrescar");
    refrescarDatos.addEventListener("click", enviarPeticionAsincrona);
})