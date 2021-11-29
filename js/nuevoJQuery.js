$(pedirDatos); //Despues de cargar todo el HTML se cargará mi función


function pedirDatos(){
    const URL_DESTINO = "http://localhost/Actividad4/";
    const RECURSO = "pizzas.json";

    $.ajax({
        'type' : 'GET',
        'url' : URL_DESTINO + RECURSO,
        'async' : true,
    }
    ).done(procesarRespuesta)
    .always(formPedido)
}
//Va a pasar el mensaje en formato JSON
function procesarRespuesta(pizzas){

    let tamano = pizzas.CATALOG.PIZZAS;
    let ingr = pizzas.CATALOG.INGREDIENTES;

    $("#tbodypizzas").html('')//vacio el tbody
    $("#tbodying").html('')

    $.each(tamano, function(i, tam){//i variable de control como en cualqueir for
                                    //piz cada uno de los tamaños        
        var tr = $(`<tr>
                    <td>${tam.TAMANO}</td>
                    <td>${tam.PRECIO}</td>
                    </tr>`)
                tr.appendTo("#tbodypizzas")        
    })
    $.each(ingr, function(i, ing){
        var te = $(`<tr>
                    <td>${ing.INGREDIENTE}</td>
                    <td>${ing.PRECIO}</td>
                    </tr>`)
                te.appendTo("#tbodying")
    })
}

function formPedido(pizzas){
    console.log(pizzas)
    let tamano = pizzas.CATALOG.PIZZAS;
    let ingr = pizzas.CATALOG.INGREDIENTES;
    var form = $("<form id=form>");
    form.appendTo("#contenedor");

    $.each(tamano, function(i, tam){
       var inp = $(`<input type=radio name=tamano value=${tam.PRECIO}>`);
            inp.appendTo("#form");
        var txt = $(`<p>${tam.TAMANO}</p>`);
            txt.appendTo("#form");            
    }) 
    $.each(ingr, function(i, ing){
        var chec = $(`<input type=checkbox name=ing value=${ing.PRECIO}>`);
            chec.appendTo("#form");
        var txt2 = $(`<p>${ing.INGREDIENTE}</p>`);
            txt2.appendTo("#form");
    }) 

}
function procesarPedido(){
    let radios = $("input[type=radio]:checked");
    let precio=parseInt(radios[0].value);
    console.log(precio);
    console.log(typeof(precio));

    let chk = $("input[type=checkbox]:checked");
    for (let i=0; i<chk.length; i++){
        console.log("******");
        console.log(typeof(precio));
        precio = precio  + parseInt(chk[i].value);
    }
    console.log(precio);
}
