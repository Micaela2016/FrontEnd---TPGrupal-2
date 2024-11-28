// Trabajo Práctico Grupal 2

// -------------------- Ejercicio 1------------------------
function esVocal(letra) {
  return (
    letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
  );
}

function ej1ContarVocales(vocales) {
  let cantVocales = 0;
  const listaDeLetras = vocales.toLowerCase().split("");
  listaDeLetras.forEach((item) => {
    if (esVocal(item)) {
      cantVocales++;
    }
  });
  return cantVocales;
}

/*  Explicacion del ejercicio 1:
Procedimiento para contar vocales:
"cadena" --> [c, a, d, e, n, a]

Paso 1: inicializar contador en 0
Paso 2: convertir texto a lista
Paso 3: Ir letra por letra
Paso 4: Preguntar si es vocal o no (utilizo una funcion auxiliar)
Paso 5: Si es vocal: sumar 1 al contador
Paso 6: Al terminar de recorrer la palabra retornar el resultado de la suma
*/

// -------------------- Ejercicio 2------------------------
function ej2() {}

/* Explicacion de ejercicio 2:  */

// -------------------- Ejercicio 3------------------------
function ej3() {}

/* Explicacion de ejercicio 3: */

// -------------------- Ejercicio 4------------------------
function ej4() {}

/* Explicacion de ejercicio 4:  */

// -------------------- Ejercicio 5------------------------
function ej5() {}

/* Explicacion de ejercicio 5: */

// -------------------- Ejercicio 6------------------------
function ej6() {}

/* Explicacion de ejercicio 6: */

// -------------------- Ejercicio 7------------------------
function ej7() {}

/* Explicacion de ejercicio 7: */

// -------------------- Pruebas de ejercicios------------------------
//Ejercicio 1
console.log("-------Prueba ejercicio 1-------");
console.log("JavaScript:", ej1ContarVocales("JavaScript"));
console.log("Ignacio:", ej1ContarVocales("Ignacio"));
console.log(
  "Lorem ipsum dolor sit amet:",
  ej1ContarVocales("Lorem ipsum dolor sit amet")
);

//Ejercicio 2
console.log("-------Prueba ejercicio 2-------");

//Ejercicio 3
console.log("-------Prueba ejercicio 3-------");

//Ejercicio 4
console.log("-------Prueba ejercicio 4-------");

//Ejercicio 5
console.log("-------Prueba ejercicio 5-------");

//Ejercicio 6
console.log("-------Prueba ejercicio 5-------");

//Ejercicio 7
console.log("-------Prueba ejercicio 5-------");
