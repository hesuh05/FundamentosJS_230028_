// Tipos de Datos en JS

// 1. Undefined
let cliente;
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = "Juan Romero"
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);
cliente = 19227
console.log(`El cliente es: ${cliente}`);
console.log(`El tipo de dato de la variable cliente es: ${typeof(cliente)}`);

// Undefined es el tipo de dato que por defecto se asigna a variables no inicializadas o no declaradas

// 2. Boolean
console.warn("--- Tipo de Dato: BOOLEAN (Boleano - True/False)")
let esPremium = "No lo sé";
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log(`Asignando el valor "true" a la variable`);
esPremium = "true";
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor true a la variable");
esPremium = true;
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
console.log("Asignando el valor false a la variable");
esPremium = false;
console.log(`¿Es el cliente premium? : ${esPremium} `);
console.log(`El tipo de dato de la variable esPremium es: ${typeof(esPremium)}`);
if (esPremium) {
    console.log("El cliente pago por usar el servicio");
} else {
    console.log("El cliente recibe los servicios gratuitos")
}

// 3. Number

var cantidad;
const costo_producto = 10.50
let saldo_cuenta = -2500.40
let monto_transaccion;

console.warn("--- Tipo de Dato - NUMBER (Números, positivos, negativos, decimales, flotantes)");
console.log(`Tu saldo al día de hoy es de: ${saldo_cuenta}, (Tipo de Dato = ${typeof(saldo_cuenta)})`);
console.log(`El producto que has seleccionado cuesta: ${costo_producto}, (Tipo de Dato = ${typeof(costo_producto)})`);
cantidad=8;
console.log(`Has elegido comprar: ${cantidad} de productos`);
console.log(`El importe total de la compra es: ${cantidad*costo_producto}`);
saldo_cuenta=saldo_cuenta - (cantidad*costo_producto);
console.log(`Tu nuevo saldo es de: ${saldo_cuenta}`)
// El cliente realiza un abono de 1500 
monto_transaccion = 1500;
console.log(`Tu abono de: ${monto_transaccion} ha sido recibido, tu nuevo saldo es de: ${saldo_cuenta+monto_transaccion}`);

// 4. Strings o Cadenas de Texto
const alumno = "Jesús Domínguez Ramírez";
let producto;

console.warn("--- Tipo de Dato - STRING (Cadena de Caractéres");
console.log(`El nombre del alumno es: ${alumno}, que es un tipo de dato ${typeof(alumno)}`);
producto = "MONITOR 20\"";
console.log(`El nombre del producto es: ${producto}, que es un tipo de dato ${typeof(producto)}`);

// Manipulando los STRINGS
console.log(`Más adelante podremos transformar el contenido de los STRINGS usando funciones específicas como convertir a mayúsculas: ${alumno} => ${alumno.toUpperCase()}`);
console.log(`O en su defecto a minúsculas: ${producto} => ${producto.toLowerCase()}`);

let numero = "30";
let numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);

// 5. BigInt (Enteros de Dimensiones Amplias) - Generalmente utilizado en sistemas matemáticos, físicos o espaciales donde se requiere de una excelente precisión numérica.
console.warn("--- Tipo de Dato - BIGINT (Número Amplio)")
const numeroGrande = 1234567890
const numeroGrande2 = 12345678901234567890;
const numeroGrande3 = 12345678901234567890123456789;
const numeroGrande4 = 1234567890123456789012345678901234567890;
console.log(`El primero experimento de un número grande es: ${numeroGrande}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande2}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande2)}`);
console.log(`El primero experimento de un número grande es: ${numeroGrande3}, que si es soportado por NUMBER, y su tipo de dato es: ${typeof(numeroGrande3)}`);
// const numeroGrande = BigInt(9182981938918871398310911038173813);
console.log(typeof numeroGrande);

const numero3 = 10;
const numero4 = 20;

console.log(numero3+Number(numeroGrande));

const numero5 = "30";
const numero6= 30
console.log(typeof String(numero2));
console.log(typeof Numbernumero);
// 6. Symbol
const primerSymbol = Symbol(30);
const segundoSymbol= Symbol(30);

console.log(primerSymbol===segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

// 7. Null
const descuento = null;
console.log(typeof descuento);