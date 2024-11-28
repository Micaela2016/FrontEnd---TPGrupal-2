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
function capitalizarPalabras(cadena) {
    cadena = cadena.trim();
    let cadenAux = ""
    let indice = 0

    if (cadena.length <= 0) {
        return "La cadena ingresada es vacia."
    }

    while (indice < cadena.length) {
        let charActual = cadena[indice];
        if (indice === 0 || cadena[indice - 1] === ' ') {
            cadenAux += charActual.toUpperCase();
        } else {
            cadenAux += charActual.toLowerCase();
        }

        indice++;
    }
    return cadenAux
}

/* Explicacion de ejercicio 6: Para realizar este ejercicio primero tuve que tener en cuenta que la cadena pasada por parametro no
tenga espacios tanto delante de la primera palabra, como de la ultima. Luego se contempla en los casos que la cadena esta vacia, se muestra
un mensaje.
Si la cadena tiene 1 caracter o mas, entonces recorre la cadena recibida hasta su ultimo digito.
Si es la primera letra de la cadena o si su anterior digito es un espacio, entonces la convierte en mayuscula.
Caso contrario, deja la palabra en minuscula. Para ir armando nuevamente la cadena con sus cambios utilizo una cadena auxilar.*/

// -------------------- Ejercicio 7------------------------
function fibonacci(num) {
    let sucesion = [];
    let indice = 0;

    if (isNaN(num)) {
        return "No se ha ingresado un numero"
    }
    else if (num <= 0 || Math.floor(num) !== num) {
        return "El numero ingresado debe ser mayor a 0 y entero"
    }

    while (indice < num) {
        if (indice === 0) {
            sucesion[indice] = 0;
        } else if (indice === 1) {
            sucesion[indice] = 1;
        } else {
            sucesion[indice] = sucesion[indice - 1] + sucesion[indice - 2];
        }
        indice++;
    }
    return sucesion;
}

/* Explicacion de ejercicio 7: Para este ejercicio primero valide la entrada, es decir el num que me pasen por parametro. Validando
los casos en que no se ha ingresado un numero sino por ejemplo un caracter, un numero que no sea entero, y un numero negativo. Para estos casos tiene que mostrar un mensaje.
Luego sabemos segun la sucesion de fibonacci que los primeros dos numeros siempre son 0 o 1. Los restantes numeros son la suma entre los dos anteriores.
Por lo tanto, exceptua los dos primeros casos, y para los demas suma los dos anteriores. Esto hasta llegar a iterar el numero ingresado.
Para ir guardando los numeros de la sucesion utilice un arreglo que finalmente retorno.*/

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
console.log("-------Prueba ejercicio 4-------");
console.log(invertirArray([5, 6, 7, 8]));

console.log(invertirArray(["a", "b", "c", "d"]));

console.log(invertirArray(["lobo", "perro", "puma", "pelícano"]));

//Ejercicio 5
console.log("-------Prueba ejercicio 5-------");
console.log(eliminarDuplicados([5, 5, 6, 7, 8, 8]));

console.log(eliminarDuplicados(["a", "b", "c", "d", "a", "b", "c", "d"]));

console.log(
    eliminarDuplicados(["libro", "libro", "puma", "telescopio", "puma"])
);

//Ejercicio 6
console.log("-------Prueba ejercicio 6-------");
console.log(capitalizarPalabras("hola como estas"));
console.log(capitalizarPalabras("    espacios    "));
console.log(capitalizarPalabras(""));
console.log(capitalizarPalabras("a"));

//Ejercicio 7
console.log("-------Prueba ejercicio 7-------");
console.log(fibonacci(10));
console.log(fibonacci(1));
console.log(fibonacci(0));
console.log(fibonacci(-5));
console.log(fibonacci("texto"));
console.log(fibonacci(4.5));
