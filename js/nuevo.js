//Cuando el body se termine de cargar, se ejecuta la funcion solicitarDatos
window.onload = solicitarDatos();
/******************************************************
 * Solicito los datos, esta función se encargará de****
 * ponerse en contacto con el resto para realizar *****
 * diferentes acciones para la obtención de los datos**
 */
function actualizar(){
    contenedor.innerHTML=""
    solicitarDatos()
}
function solicitarDatos (){    
    const URL_DESTINO = "http://localhost/Actividad4/";
    const RECURSO = "pizzas.json";

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        //Controlo los cambios y codigos que va devolviendo el navegador
        if(this.readyState == 4){
            if (this.status == 200){
                procesarRespuesta(this.responseText);//"rescato" en formato texto el json
            }
            else{
                alert("[ERROR]");
            }
        }
    }
    xmlHttp.open('GET', URL_DESTINO + RECURSO, true);
    xmlHttp.send();
}

function procesarRespuesta(jsonDoc){
    //Esta funcion recibe el Json en formato Texto
    //Por lo tanto hay que convertilo a formato JSON
    var objetoJson = JSON.parse(jsonDoc); //objetoJson contiene el array de objetos del archivo Json
    console.log(objetoJson);
    var arrayTamano=objetoJson.CATALOG.PIZZAS
    var arrayIngrediente=objetoJson.CATALOG.INGREDIENTES
    console.log("------------")
    console.log(arrayTamano)
    console.log("------------")
    console.log(arrayIngrediente)
    crearTablaSize(objetoJson.CATALOG.PIZZAS);
    crearTablaIng(objetoJson.CATALOG.INGREDIENTES)
    crearForm(objetoJson.CATALOG.PIZZAS,objetoJson.CATALOG.INGREDIENTES);
}

function crearTablaSize(array){
    var tablaSize = document.createElement("table");//Creo la tabla de Tamaños y precios
    
    var txt1TablaSize = document.createTextNode("Tamaños");
    var txt2TablaSize = document.createTextNode("Precio");

    var cabeceraSize = document.createElement("tr");
    var filaSize = document.createElement("th");
    var filaPrice = document.createElement("th");

    filaSize.appendChild(txt1TablaSize);
    filaPrice.appendChild(txt2TablaSize)
    cabeceraSize.appendChild(filaSize);
    cabeceraSize.appendChild(filaPrice);
    tablaSize.appendChild(cabeceraSize);
    console.log(tablaSize)
    contenedor.appendChild(tablaSize)

    for(let ele of array){
        var rowTamano = document.createElement("tr"); //Creo la fila
        var tamPizz = document.createElement("td");//Creo la celda
        var contenidoTamano = document.createTextNode(ele.TAMANO);//Obtengo el tamaño
        tamPizz.appendChild(contenidoTamano);//Introduzco el tamño de la pizza en la celda
        rowTamano.appendChild(tamPizz);//Introduzco la celda en la fila

        var rowPrecio = document.createElement("td");//Ya tengo la fila creada, solo nececito otra celda
        var contenidoPrecio = document.createTextNode(ele.PRECIO);//Selecciono el precio
        rowPrecio.appendChild(contenidoPrecio);
        rowTamano.appendChild(rowPrecio);
        tablaSize.appendChild(rowTamano); 
    }   
}

function crearTablaIng(array){
    var tablaIng = document.createElement("table");//Creo la tabla de Ingredientes y Precios

    var txt1TablaIng = document.createTextNode("Ingrediente");
    var txt2TablaIng =document.createTextNode("Precio");

    var cabeceraIng = document.createElement("tr");
    var filaIng = document.createElement("th");
    var filaPrice = document.createElement("th");

    filaIng.appendChild(txt1TablaIng);
    filaPrice.appendChild(txt2TablaIng);
    cabeceraIng.appendChild(filaIng);
    cabeceraIng.appendChild(filaPrice);
    tablaIng.appendChild(cabeceraIng);
    contenedor.appendChild(tablaIng);

    for(let ele of array){
        var rowIng = document.createElement("tr");//Creo la fila
        var precPizza = document.createElement("td");//Creo la celda
        var contenidoIng = document.createTextNode(ele.INGREDIENTE);//Obtengo el nombre del ingrdiente
        precPizza.appendChild(contenidoIng);
        rowIng.appendChild(precPizza);

        var rowPrecio = document.createElement("td");
        var contenidoPrecio = document.createTextNode(ele.PRECIO);
        rowPrecio.appendChild(contenidoPrecio);
        rowIng.appendChild(rowPrecio);
        tablaIng.appendChild(rowIng);
    }
}

function crearForm(array1, array2){
    //Crear Formulario para hacer pedido
    let div = document.createElement("div");//Creo el div donde irá el formulario donde se recogerán los datos del pedido
    let form = document.createElement("form");//Creo el formulario
        form.setAttribute("id", "form")

    //Con un for creo un input para cada valor de tamaño
    for (let tam of array1){
        let inputTamano = document.createElement("input");//Input para el tamaño
        inputTamano.setAttribute("type", "radio");
        inputTamano.setAttribute("name", "tamano");        
        inputTamano.setAttribute("value", tam.PRECIO);//El valor es el precio del tamaño seleccionado
        let p = document.createElement("p");
        let txtInputTam = document.createTextNode(tam.TAMANO);     
        p.appendChild(txtInputTam);       
        form.appendChild(inputTamano);
        form.appendChild(p);        
    }

    //Con otro form creo los input checkbox de ingredientes
    for (let ing of array2){
        let inputIng = document.createElement("input");
        inputIng.setAttribute("type", "checkbox");
        inputIng.setAttribute("name", "ingrediente");
        inputIng.setAttribute("value", ing.PRECIO);
        let p = document.createElement("p");
        let txtInputIng = document.createTextNode(ing.INGREDIENTE);
        p.appendChild(txtInputIng);
        form.appendChild(inputIng);
        form.appendChild(p);
    }

    div.appendChild(form);//Añado el formulario al div
    contenedor.appendChild(div);//Añado el div al contenedor

}

function realizarPedido(){
    var tamanio = document.getElementsByName("tamano");
    var ing = document.getElementsByName("ingrediente")
    var precio = 0;

    for(let i=0; i<tamanio.length; i++){
        if(tamanio[i].checked){
            precio = parseInt(tamanio[i].value) ;
            break;
        }
    }
    for(let j=0; j<ing.length; j++){
        if(ing[j].checked){
            precio = precio + parseInt(ing[j].value)
        }
    }
    console.log(precio)
    var inputPrecio = document.createElement("input");
        inputPrecio.setAttribute("value", precio)
    form.appendChild(inputPrecio)
    
}
