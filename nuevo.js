document.onload = cargarinf();

function cargarinf(){
const URL_DESTINO = "http://localhost/AE_4AJAX/"
const RECURSO = "ingredientes.json"



let xmlHttp = new XMLHttpRequest()

<<<<<<< HEAD

=======
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
xmlHttp.onreadystatechange = function(){
    if (this.readyState == 4){
        if (this.status ==200){
            leerRespuesta(this.responseText)

        } else {
            alert ("Problema al cargar Info Pizzeria")
        }

    }
}


xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
xmlHttp.send()
<<<<<<< HEAD

}
var tamaño
var ingredientes
=======
} 
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
function leerRespuesta(jsonDoc){

    formi.innerHTML = ""
    
    var objetoJson = JSON.parse(jsonDoc)
<<<<<<< HEAD
     ingredientes = objetoJson.PIZZERIA.INGREDIENTES;
     tamaño = objetoJson.PIZZERIA.TAMAÑO;  
=======
    var ingredientes = objetoJson.PIZZERIA.INGREDIENTES;
    var tamaño = objetoJson.PIZZERIA.TAMAÑO;  
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
       
    /*Recorro la lista pintando los distintos tamaños a elegir.*/
    
    
    for(let tam of tamaño){

        let form2 = document.createElement("label")
        let texto2 = document.createTextNode(tam.NOMBRE)
        form2.appendChild(texto2)
        formi.appendChild(form2) 

        let input2 = document.createElement("input")
        input2.type = "radio"
        input2.id = tam.NOMBRE
<<<<<<< HEAD
        input2.className = "tamaño"
        input2.name = "tamaño"
        input2.value = tam.VALUE
        formi.appendChild(input2)
        
=======
        input2.name = "tamaño"
        input2.value = tam.VALUE
        formi.appendChild(input2)
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
    }
    let spa = document.createElement("br")
    formi.appendChild(spa)
    
        for(let ing of ingredientes){
        let form2 = document.createElement("label")
        let texto2 = document.createTextNode(ing.NOMBRE)
        form2.appendChild(texto2)
        formi.appendChild(form2)

        let input1 = document.createElement("input")
        input1.type = "checkbox"
<<<<<<< HEAD
        input1.className = "checkbox"
=======
        input1.class = "checkbox"
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
        input1.id = ing.NOMBRE
        input1.name = ing.NOMBRE
        input1.value = "s"
        formi.appendChild(input1)
<<<<<<< HEAD
        
        
        }
        var i = parseInt(tamaño[0].PRECIO)

    console.log(typeof i)
    console.log(parseInt(tamaño[0].PRECIO))
    }

function calcuprecio(){
var total = 0

console.log(parseInt(tamaño[0].PRECIO))
var sum = document.getElementsByClassName("tamaño")
for( i=0; i< sum.length;++i){
    if(sum[i].checked){
        total = total + parseInt(tamaño[i].PRECIO)
    }
}

var sum = document.getElementsByClassName("checkbox")
for( i=0; i< sum.length;++i){
    if(sum[i].checked){
        total = total + parseInt(ingredientes[i].PRECIO)
    }
}

console.log(total)

prec.innerHTML = "El precio total sera de " + total + " E."
    
}



        



=======
    
        }
        
}
>>>>>>> 30cea00b2be65429673cf0799d6aa06ff3fb7cd7
