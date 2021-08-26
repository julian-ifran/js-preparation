
function capitalizarLetra(cadenaADividir){
    let arrayDeCadenas = cadenaADividir.split(" ");

    let arrayDeCadenasAux=arrayDeCadenas; //hago una copia que voy a ir reemplazando
    for (var i=0; i < arrayDeCadenas.length; i++) {
        let newstring=arrayDeCadenas[i].charAt(0).toUpperCase() + arrayDeCadenas[i].slice(1)
        arrayDeCadenasAux[i]=newstring
     }
     let stringEditado=arrayDeCadenasAux[0];
     for (var i=1; i < arrayDeCadenasAux.length; i++) {
         stringEditado= stringEditado + " "+arrayDeCadenasAux[i];
           
     }
    return stringEditado
}

