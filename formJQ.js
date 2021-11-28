
const URL_DESTINO = "http://localhost:5501/Actividad4_JQ/";

const RECURSO = "pizzas.json"

$(inicializarT);
$(inicializarI);

function inicializarT(){
    
    $("#boton1").click(cargarTamaños);
}
function inicializarI(){
    
    $("#boton2").click(cargarIngredientes);
}


function cargarTamaños(){
    
        $.ajax({

            'type'  : 'GET', 
            'url'   : URL_DESTINO + RECURSO,
            'async' : true, 
            }
        ).done(procesarRespuestaTa)//si todo ha ido bien le paso esta funcion
           
}

function procesarRespuestaTa(pizzas) {
    console.log(pizzas);

    let tam = pizzas.CATALOG.TAMAÑO//obtengo los tamaños
   // $("#tbodyTamaños").html('')

    $.each(tam,function(i, ta){//i variable de control del bucle
        
        let tr = $(`<tr>
                <td>${ta.TAMANO}</td>
                <td>${ta.PRECIO}</td>
           </tr>`)
       
        tr.appendTo("#tbodyTamaños")
    })
}
  
 function cargarIngredientes(){

         $.ajax({

            'type'  : 'GET', 
            'url'   : URL_DESTINO + RECURSO,
            'async' : true, 
            }
         ).done(procesarRespuestaIn)
    

  
 }

function procesarRespuestaIn(pizzas) {
    console.log(pizzas);
   
    let ingre = pizzas.CATALOG.INGREDIENTES
    $("#tbodyIngre").html('')

    $.each(ingre,function(i, ing){
        
        let tr = $(`<tr>
                <td>${ing.INGREDIENTE}</td>
                <td>${ing.PRECIO}</td>
           </tr>`)
       
        tr.appendTo("#tbodyIngre")
    })
}
 


function calcularPrecio(){

    /*console.log("========================================");
    //Ej: Obteniendo todas las opciones seleccionadas de los combos
    let opcionesSeleccionadas = $("option:selected");
    for(let a=0; a<opcionesSeleccionadas.length; a++){
        console.log(opcionesSeleccionadas[a].value);
    }
    
    //EJ de Obteniendo los checkbox marcados
    let chk = $("input:checked")
    for(let x=0; x<chk.length; x++){
        console.log(chk[x].id);
    }  */  
    
}
    var total;
    var ta1 = document.getElementsByName("checkta");
    var ta2 = document.getElementsByName("checkta");
    var ta3 = document.getElementsByName("checkta");

    if(ta1.checked){
        total = 5
    }
    if(ta2.checked)
        total =  10
    
    if(ta3.checked)
        total =  15
    

   /*var sum = document.getElementsByName("checkta")
    for( i=0; i< sum.length;++i){
        if(sum[i].checked){
            total = sum[i].checked
        }*/
       
   // alert("El pedido ha sido enviado!!! "+
    //"El precio total es de " + total+ " €")  
    
    
   




