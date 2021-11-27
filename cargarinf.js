const URL_DESTINO = "http://localhost:5501/AE_4AJAX/"
const RECURSO = "ingredientes.json"

function cargarinf(){


    let xmlHttp = new XMLHttpRequest()

    xmlHttp.onreadystatechange = function(){
        if (this.readyState == 4){
            if (this.status ==200){
                leerRespuesta(this.responseText)
                alert ("cargar la info")
            } else {
                alert ("Problema al cargar Info Pizzeria")
            }

        }
    }

    
    xmlHttp.open('GET', URL_DESTINO + RECURSO, true)
    xmlHttp.send(null)
}    
function leerRespuesta(jsonDoc){

    var objetoJson = JSON.parse(jsonDoc)
    var ingredientes = objetoJson.PIZZERIA.INGREDIENTES;
    var tamaño = objetoJson.PIZZERIA.TAMAÑO;

    /*Creamos una fielche donde se recogeran los ingredientes.*/
    let fielche1 = document.createElement("fieldset")
    fielche1.id = "radio"
    let princ = documnet.createElement("h2")
    let princt = document.createTextNode("Selecciona el tamaño de la pizza")
    princ.appendChild(princt)
    fielche1.appendChild(princ)

    /*Recorro la lista pintando los distintos tamaños a elegir.*/
    for(let tam of tamaño){

        let form2 = document.createElement("p")
        let texto2 = document.createTextNode(tam.NOMBRE)
        form2.appendChild(texto2)
        fielche1.appendChild(form2) 

        let input2 = document.createElement("input")
        input2.type = "radio"
        input2.id = tam.NOMBRE
        input2.name = "tamaño"
        input2.value = tam.VALUE
        fielche1.appendChild(input2)
    
    }
    formulario.appendChild(fielche1)

    /*Creamos una fielche donde se recogeran los ingredientes.*/
    let fielche2 = document.createElement("fieldset")
    fielche2.name = "fieldset"
    fielche2.id = "ingredientes"
            
    let formr1 = document.createElement("p")
    let text1 = document.createTextNode("Elija al menos 1 de nuestros fantasticos ingredientes:")
    formr1.appendChild(text1)
    fielche2.appendChild(formr1)

    /*Recorro la lista pintando los distintos ingredientes que aparecen.*/
    for(let ing of ingredientes) {

    let form1 = document.createElement("p")
    let texto1 = document.createTextNode(ing.PRECIO)
    form1.appendChild(texto1)
    fielche2.appendChild(form1)


    let input1 = document.createElement("input")
    input1.type = "checkbox"
    input1.class = "checkbox"
    input1.id = ing.NOMBRE
    input1.name = ing.NOMBRE
    input1.value = "s"
    fielche2.appendChild(input1)
    
    }
    formulario.appendChild(fielche2)
       
    
}
