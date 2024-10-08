// Tipos de datos

// Strings o Cadenas de Texto
const alumno = "Juan";
let producto = 'Monitor 20 pulgadas';
let numero = "30";
let numero2 = 30;

console.log(typeof numero);
console.log(typeof numero2);

//BigInt
const numeroGrande = BigInt(9182981938918871398310911038173813);
console.log(typeof numeroGrande);

const numero3 = 10;
const numero4 = 20;

console.log(numero3+Number(numeroGrande));

const numero5 = "30";
const numero6= 30
console.log(typeof String(numero2));
console.log(typeof Numbernumero);
//Symbol
const primerSymbol = Symbol(30);
const segundoSymbol= Symbol(30);

console.log(primerSymbol===segundoSymbol);
console.log(primerSymbol.valueOf());
console.log(segundoSymbol.valueOf());

//Null
const descuento = null;
console.log(typeof descuento);