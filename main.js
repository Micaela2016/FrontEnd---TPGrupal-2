// Trabajo Práctico Grupal 2

// -------------------- Ejercicio 1------------------------
function ej1 () {

}

/*  Explicacion de ejercicio 1: */

// -------------------- Ejercicio 2------------------------
function ej2 (){
   
}

/* Explicacion de ejercicio 2:  */

// -------------------- Ejercicio 3------------------------
function ej3 (){
}

/* Explicacion de ejercicio 3: */

// -------------------- Ejercicio 4------------------------
function invertirArray(array){
   
    const arrayInvertido = array.reverse();
    return arrayInvertido;
}

/* Esta función devuelve un arreglo invertido en su orden secuencial. Para que funcione, debe recibir un arreglo por parámetro
y luego usando el método de Javascript "reverse" invierto ese arreglo y lo guardo en la variable arrayinvertido  */

// -------------------- Ejercicio 5------------------------
function eliminarDuplicados(array){
    const elementosUnicos= [...new Set(array)];
    return elementosUnicos;
}

/* al igual que en el ejercicio anterior, la funcion recibe un arreglo por parámetro."Set" en Javascript es una estructura
de datos que no permite elementos repetidos, asique cree una nueva instancia con la palabra "new", le paso el arreglo por parámetro
para que elimine los elementos repetidos, y con los "..." le pido que esos elementos los transforme en un arreglo. Todo eso lo guardo
en la variable elementosUnicos para que luego la función me devuelva al array sin elementos repetidos  */

// -------------------- Ejercicio 6------------------------
function ej6 (){
}

/* Explicacion de ejercicio 6: */


// -------------------- Ejercicio 7------------------------
function ej7 (){
}

/* Explicacion de ejercicio 7: */

// -------------------- Pruebas de ejercicios------------------------
//Ejercicio 1
console.log("-------Prueba ejercicio 1-------")

//Ejercicio 2
console.log("-------Prueba ejercicio 2-------")

//Ejercicio 3
console.log("-------Prueba ejercicio 3-------")

//Ejercicio 4
console.log(invertirArray([5,6,7,8]));

console.log(invertirArray(['a', 'b', 'c', 'd']));

console.log(invertirArray(['lobo', 'perro','puma','pelícano']));

//Ejercicio 5
console.log(eliminarDuplicados([5,5,6,7,8,8]));

console.log(eliminarDuplicados(['a', 'b', 'c', 'd','a', 'b', 'c', 'd']));

console.log(eliminarDuplicados(['libro', 'libro','puma','telescopio','puma']));

//Ejercicio 6
console.log("-------Prueba ejercicio 5-------") 

//Ejercicio 7
console.log("-------Prueba ejercicio 5-------") 