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
function ej2MaxNumero(arrayNumeros) {
  let maxNumero = arrayNumeros[0];

  arrayNumeros.forEach((numero) => {
    if (numero > maxNumero) {
      maxNumero = numero;
    }
  });
  return maxNumero;
}

/* Explicacion de ejercicio 2:
Paso 1: Creo una función que reciba un array como argumento
Paso 2: Inicializo una variable para guardar el número más alto
Paso 3: Uso forEach para comparar cada elemento con el valor guardado
Paso 4: Al terminar de recorrer la lista retorna el numero mayor de la lista
*/

// -------------------- Ejercicio 3------------------------
function ej3CalcularMedia(arrayMedia) {
  let suma = 0;

  arrayMedia.forEach((numero) => {
    suma += numero;
  });
  return suma / arrayMedia.length;
}

/* Explicacion del ejercicio 3:
Paso 1: Creo una función que reciba un array como parámetro
Paso 2: Creo una variable suma y la inicializo en 0
Paso 3: Utilizo un forEach para iterar los elementos.
        En cada iteración tomo el valor actual y lo sumo a la variable suma
Paso 4: Por último divido la suma entre la longitud del array
*/

// -------------------- Ejercicio 4------------------------
function invertirArray(array) {
  const arrayInvertido = array.reverse();
  return arrayInvertido;
}

/* Esta función devuelve un arreglo invertido en su orden secuencial. Para que funcione, debe recibir un arreglo por parámetro
y luego usando el método de Javascript "reverse" invierto ese arreglo y lo guardo en la variable arrayinvertido  */

// -------------------- Ejercicio 5------------------------
function eliminarDuplicados(array) {
  const elementosUnicos = [...new Set(array)];
  return elementosUnicos;
}

/* al igual que en el ejercicio anterior, la funcion recibe un arreglo por parámetro."Set" en Javascript es una estructura
de datos que no permite elementos repetidos, asique cree una nueva instancia con la palabra "new", le paso el arreglo por parámetro
para que elimine los elementos repetidos, y con los "..." le pido que esos elementos los transforme en un arreglo. Todo eso lo guardo
en la variable elementosUnicos para que luego la función me devuelva al array sin elementos repetidos  */

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
console.log("Máximo número de la lista:", ej2MaxNumero([1, 2, 3, 6, 7]));
console.log("Máximo número de la lista:", ej2MaxNumero([-10, -5, -1]));
console.log("Máximo número de la lista:", ej2MaxNumero([10, 5, 17, 3, 28]));

//Ejercicio 3
console.log("-------Prueba ejercicio 3-------");
console.log("La media es:", ej3CalcularMedia([10, 20, 30, 40]));
console.log("La media es:", ej3CalcularMedia([50, 100, 150]));
console.log("La media es:", ej3CalcularMedia([7, 7, 4, 6, 8]));

//Ejercicio 4
console.log(invertirArray([5, 6, 7, 8]));

console.log(invertirArray(["a", "b", "c", "d"]));

console.log(invertirArray(["lobo", "perro", "puma", "pelícano"]));

//Ejercicio 5
console.log(eliminarDuplicados([5, 5, 6, 7, 8, 8]));

console.log(eliminarDuplicados(["a", "b", "c", "d", "a", "b", "c", "d"]));

console.log(
  eliminarDuplicados(["libro", "libro", "puma", "telescopio", "puma"])
);

//Ejercicio 6
console.log("-------Prueba ejercicio 6-------");

//Ejercicio 7
console.log("-------Prueba ejercicio 7-------");
