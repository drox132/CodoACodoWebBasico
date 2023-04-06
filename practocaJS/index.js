console.log("------------------------EJERCICIO 1---------------------------------")

//1. Crea un array que contenga el nombre de cinco colores escritos como strings

var colores =[];
colores= ["Amarillo","Verde","Blanco","Rojo","Negro"];
console.log(colores);

console.log("------------------------EJERCICIO 2---------------------------------")

//2. Guarda en una variable el tercer elemento del array del ejercicio anterior.

var tercerElemento = colores[2];
console.log("El tercer elemento del array anterior es: " + tercerElemento);


console.log("------------------------EJERCICIO 3---------------------------------")

//3. Accede desde un console.log() a la posición 0 del string de la posición 0 del array del
//ejercicio 1.

var primeraPosicionPrimerString = colores[0].charAt(0);
console.log("el valor de la primera posicion del string es ' "+primeraPosicionPrimerString+" '");


console.log("------------------------EJERCICIO 4---------------------------------")

//4. Se pide realizar un script que genere un número aleatorio entre 1 y 99. Investigue la
//función Math.random().

const numeroAleatorio =Math.round(Math.random()*99);
console.log("El numero aleatorio entre el 0 -99 es: "+numeroAleatorio);


//5. Rellena un array con los números del 1 al 10. Muéstralo por la consola.
console.log("------------------------EJERCICIO 5---------------------------------")
const arrayLlenar = [];
for (let index = 1; index <= 10; index++) {
    arrayLlenar[index-1] = index; 
}
    var posicion = 0;
arrayLlenar.forEach(element => {
   
    console.log("La posicion "+posicion+" contiene el numero => "+element);
    posicion++;
});


console.log("------------------------EJERCICIO 6---------------------------------")

//6. Rellena un array con números aleatorios (10 por ejemplo). Muéstralo por la consola.
const arrayRandom = [];
for (let index = 1; index <= 10; index++) {
    arrayRandom[index-1] = Math.round(Math.random()*100); 
}
var posicionRandon = 0;
arrayRandom.forEach(element => {
    
    console.log("La posicion "+posicionRandon+" contiene el numero random => "+element);
    posicionRandon++;

});


console.log("------------------------EJERCICIO 7---------------------------------")

//7. Del array anterior, créale una copia (que no sea el mismo en sí). Mostrarlos por la
//consola.

const arrayCopy =[].concat(arrayRandom);

var posicionRandonCopy = 0;
arrayCopy.forEach(element => {
    
    console.log("La posicion "+posicionRandonCopy+" contiene el numero randomCopy => "+element);
    posicionRandonCopy++;

});
console.log("El arrayRandon es estrictamente igual al arrayCopy? ");
console.log(arrayRandom ===arrayCopy);

console.log("------------------------EJERCICIO 8---------------------------------")

/*
8. Realiza un script que pida cadenas de texto hasta que se ingrese la palabra “cancelar”.
Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión
medio. Realizar la misma actividad, pero ahora almacenando los valores en un array y
luego recorriendolo para mostrar el resultado deseado del ejercicio.
*/ 


var arrayPalabras=[];
var index=0;

do {
    var palabra = prompt("Ingrese una Palabra").toLowerCase();
    arrayPalabras[index]= palabra;
    index++;
} while (palabra!=="cancelar");

console.log(arrayPalabras);

console.log("------------------------EJERCICIO 9---------------------------------")

/*
9. Hacer un formulario con dos campos (pesos y dólares) que al presionar un botón
convierte de dólares a pesos. Supondremos que un dólar son trescientos pesos.
Mostrar el resultado elemento de html
 */