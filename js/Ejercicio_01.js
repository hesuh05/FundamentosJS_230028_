 // Comentarios de una sola línea
 /*
    Comentarios multi-línea
 */
// EJERCICIO 01 : Declaración de Variables
// a) Var
var miNombre = "Jesús";
var misApellidos;
var miEdad = 19;
// El objeto de console nos permite envair datos a la terminal y poder visualizar el valor de una variable o resultado de una función o método
console.warn("--- Declaración de variables usando: VAR");
console.log("Intentando leer las variables: ",miNombre,misApellidos);
misApellidos = "Domínguez Ramírez";
console.log("Ya que ambas fueron inicializadas vuelvo a intentar leerlas",miNombre,misApellidos);
// Una variable puede cambiar en el proceso de ejecución del programa.
// b) Const
console.warn("--- Declaración de variables del tipo constante");
const miUniversidad = "UT Xicotepec";
const miMatricula = 230028;
console.log("Hola, ",miNombre," ",misApellidos," se que estudias actualmente en: ",miUniversidad, " asignaron la matricula: ",miMatricula, " y tienes una edad de: ", miEdad," años.");
// Para saber el tipo de dato que tiene una variable ocupamos la función typeOf()
console.log("Analizando los datos puedo deducir que: ")
console.log("miNombre es del tipo: ", typeof(miNombre));
console.log("misApellidos es del tipo: ", typeof(misApellidos));
console.log("miUniversidad es del tipo: ", typeof(miUniversidad));
console.log("miMatricula es del tipo: ", typeof(miMatricula));
console.log("miEdad es del tipo: ", typeof(miEdad));
// c) Let
let miFechaNacimiento = "2005-05-08";
let miColorFavorito;
console.warn("--- Declaración de Variable Locales usando: LET")
console.log("Genial, te voy conociendo mejor, ahora sé que tu naciste el: ", miFechaNacimiento," y tu colorFavorito es: mmmmmmm dejame pensar....");
console.log(`Creo que es ${miColorFavorito}, le atine?`); //Interpolación: al poner el valor de una variable en una sola string (se ponen backticks al inicio y al final). 
miColorFavorito="Morado";
console.log("Analizando los datos puedo deducir que: ");
console.log("miFechaNacimiento es de tipo: ",typeof(miFechaNacimiento));
console.log("miColorFavorito es de tipo: ",typeof(miColorFavorito));