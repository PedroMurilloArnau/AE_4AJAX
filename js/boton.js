// Evento para el boton 
// let btn = document.getElementById("btnCatalogo");
// btn.onclick = function(){
//     enviarPeticion();
//     }

// let btnTabla = document.getElementById("btnTabla");
// btnTabla.onclick=function(){
//     crearTabla();
// }
//Acceso Ajax

const URL_DESTINO = "http://localhost/Actividad4/";
const RECURSO = "pizzas.json";

function enviarPeticion(){

    let xmlHttp = new XMLHttpRequest();

    xmlHttp.onreadystatechange = function(){
        if(this.readyState == 4){
            if (this.status == 200){
                procesarRespuesta(this.responseText);
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
    var objetpJson = JSON.parse(jsonDoc)
    console.log("Que tiene el ObjetJson")
    console.log(objetpJson);//comprobar que crea el array
    var tablaTamano = document.createElement("table");//creo la tabla
    var row1 = document.createElement("tr");//filas de cabecera
    var col1 = document.createElement("th");//celda de cabecera
    var txt1 = document.createTextNode("Tamaño");//texto cabecera
    var col2 = document.createElement("th");//celda de cabecera
    var txt2 = document.createTextNode("Precio");//texto cabecera

    col1.appendChild(txt1);
    row1.appendChild(col1);
    col2.appendChild(txt2);
    row1.appendChild(col2);
    tablaTamano.appendChild(row1);
    contenedor.appendChild(tablaTamano);

    var tablaIng = document.createElement("table");//creo la tabla
    var row1 = document.createElement("tr");//filas de cabecera
    var col1 = document.createElement("th");//celda de cabecera
    var txt1 = document.createTextNode("Ingrediente");//texto cabecera
    var col2 = document.createElement("th");//celda de cabecera
    var txt2 = document.createTextNode("Precio");//texto cabecera

    col1.appendChild(txt1);
    row1.appendChild(col1);
    col2.appendChild(txt2);
    row1.appendChild(col2);
    tablaIng.appendChild(row1);
    contenedor.appendChild(tablaIng);
     
    var arrayP = objetpJson.CATALOG.PIZZAS
    console.log("Que tiene el Array de pizzas")
     console.log(arrayP)

     for(let p of arrayP){
         var rowTamano = document.createElement("tr");//Creo mis filas contenedoras 
         var tamPizz = document.createElement("td");//Creo las celdas con el contenido
         var contenidoTamano = document.createTextNode(p.TAMANO);//Selecciono el valor de p.TAMANO
         tamPizz.appendChild(contenidoTamano); //Introduzco el valor de p.TMANO en la celda        
         rowTamano.appendChild(tamPizz);//Introduzco la celda en mi fila contenedora

         var filPrecio = document.createElement("td");//Como ya tengo mi fila creada, solo me interesa crear la siguiente celda
         var contenidoPrecio = document.createTextNode(p.PRECIO);//Selecciono el valor de p.PRECIO
         filPrecio.appendChild(contenidoPrecio);//Introduzco el valor en la celda
         rowTamano.appendChild(filPrecio);//Agrego la celda a la fila
       
         tablaTamano.appendChild(rowTamano);//agrego a la tabla la fila con p.TAMANO y p.PRECIO         

     }
   var arrayIng = objetpJson.CATALOG.INGREDIENTES;
   console.log("Que ingredientes tengo");
   console.log(arrayIng);

     for (let i of arrayIng){
         var colIng = document.createElement("tr");
         var tipoIng = document.createElement("td");
         var contenidoIng = document.createTextNode(i.INGREDIENTE);
         tipoIng.appendChild(contenidoIng);
         colIng.appendChild(tipoIng);

         var precioIng = document.createElement("td");
         var contPrecio = document.createTextNode(i.PRECIO);
         precioIng.appendChild(contPrecio);

         colIng.appendChild(precioIng);

         tablaIng.appendChild(colIng);
     }

}

// function crearTabla(arrayP){    
//     let tabla = document.createElement("table");
//     let newTh1 = document.createElement("th");
//     let newTh2 = document.createElement("th");
//     let txtTh1 = document.createTextNode("Tamaño Pizza");
//     let txtTh2 = document.createTextNode("Ingredientes");

//     newTh1.appendChild(txtTh1);
//     newTh2.appendChild(txtTh2);
//     tabla.appendChild(newTh1);
//     tabla.appendChild(newTh2);

//     contenedor.appendChild(tabla);

//     for(let tam of arrayP){
//         tabla += "<tr><td>" + tam.TAMANO + "</td>" + "<td>" + tam.PRECIO + "</td></tr>"
//     }
//     contenedor.appendChild(tabla);
// }
