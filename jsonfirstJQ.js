
    const URL_DESTINO = "http://localhost/AE_4AJAX/"
    const RECURSO = "ingredientes.json"
    
    $(cargarinfo)

    function cargarinfo(){
        $("#JQuery").click(peticionAJAX)
    }
    
    function peticionAJAX(){
        $.ajax({
                'type'  :   'GET',
                'url'   :   URL_DESTINO + RECURSO,
                'async' :   true,     

        }).done(leerRespuestaQ)//funcion de callback si va bien
        .fail(procesarError)//funcion de callback si va mal
        
    }

    function leerRespuestaQ(ingredientes){
    
    $("#formo").html('')
    
    let ingredientess = ingredientes.PIZZERIA.INGREDIENTES;
    let tamaño = ingredientes.PIZZERIA.TAMAÑO;
    console.log(tamaño[0].NOMBRE)

    $.each(tamaño,function(i,tam){
        let tr = $(`<label>${tam.NOMBRE}</label>
                <input type="radio" id ="${tam.NOMBRE}" class="tamaño" name="tamaño" value="${tam.VALUE}"
                >`)
        tr.appendTo("#formo")
    

    })
    $("</br>").appendTo("#formo")
    $.each(ingredientess,function(i,ind){
        let tr = $(`<label>${ind.NOMBRE}</label>
                <input type="checkbox" id ="${ind.NOMBRE}" class="checkbox" name="${ind.NOMBRE}" value="s"
                >`)
        tr.appendTo("#formo")
    

    })
    }
    function procesarError(error){
    alert("ZASCA!")
    console.log(error)
    }
    function fin(){
    console.log("Este metodo siempre se ejecutará")
}