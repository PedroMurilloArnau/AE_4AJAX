function calcuprecio(){
var total = 0
if(pequeña.checked){
    total = total + 5
}
if(mediana.checked){
    total = total + 10
}
if(grande.checked){
    total = total + 15
}
var sum = document.getElementsByClassName("checkbox")
for( i=0; i< sum.length;++i){
    if(sum[i].checked){
        total = total + 1
    }

}

alert("El pedido ha sido enviado!!! "+
    "El precio total es de " + total+ " €")  
    
}

