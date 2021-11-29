const URL_DESTINO = "http://localhost:5501/Act4/"
const RECURSO = "2021_11_PIZZAS.json"

function peticionAJAX(){
    $.ajax({
            'type'  : 'GET',
            'url'   : URL_DESTINO + RECURSO,
            'async' : true,
        }
    ).done(respuestaTamanosIngredientes)
    .fail(procError)
}

function procError() {
    alert("No puedo cargar tamaños e ingredientes disponibles!");
}

function respuestaTamanosIngredientes(pizzaJson) {
    
    // Borrar el contenido de las opciones de las pizzas
    let tamanoPizzaHtml = document.getElementById("medidasPizza");
    /*removeAllChildNodes(tamanoPizzaHtml);*/
    $("#medidasPizza").html("");

    // Rellenar las opciones de las pizzas
    let tamanosPizza = pizzaJson.PIZZASDATA.SIZES;

    $.each(tamanosPizza, function(i, tam){
        let filaTamano = $(`<p><input id="${tam.VALUE}" type="radio" name="medida" value="${tam.VALUE}"><label for="${tam.VALUE}"> ${tam.NAME} (${tam.PRICE}€)</label></p>`);
        filaTamano.appendTo("#medidasPizza");
    })

    // Borrar el contenido de los ingredientes adicionales
    let ingredientesHtml = document.getElementById("ingredientesPizza");
    removeAllChildNodes(ingredientesHtml);

    // Rellenar los ingredientes extra
    let ingredientesExtra = pizzaJson.PIZZASDATA.EXTRAING;

    $.each(ingredientesExtra, function(i, ing){
        let filaIngredientes = $(`<p><input id="${ing.ID}" class="ingred-extra" type="checkbox" name="ingrediente" value="${ing.VALUE}"><label for="${ing.VALUE}"> ${ing.NAME} (${ing.PRICE}€)</label></p>`);
        filaIngredientes.appendTo("#ingredientesPizza");
    })
}

/* basado en: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/ */

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

$(function() {
    peticionAJAX();
    $("#refrescar").click(peticionAJAX);
})