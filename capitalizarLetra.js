
// function capitalizarLetra(cadenaADividir){
//     let arrayDeCadenas = cadenaADividir.split(" ");

//     let arrayDeCadenasAux=arrayDeCadenas; //hago una copia que voy a ir reemplazando
//     for (var i=0; i < arrayDeCadenas.length; i++) {
//         let newstring=arrayDeCadenas[i].charAt(0).toUpperCase() + arrayDeCadenas[i].slice(1)
//         arrayDeCadenasAux[i]=newstring
//      }
//      let stringEditado=arrayDeCadenasAux[0];
//      for (var i=1; i < arrayDeCadenasAux.length; i++) {
//          stringEditado= stringEditado + " "+arrayDeCadenasAux[i];
           
//      }
//     return stringEditado
// }

//despues de ver en clase las funciones para arrays
let cadenaADividir="estoy aprendiendo javascript"
let arrayEdited = cadenaADividir.split(" ");
let newArray = arrayEdited.map(function(pal) {
  return pal.charAt(0).toUpperCase() + pal.slice(1);
});
console.log(newArray)