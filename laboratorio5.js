/* 
Declarar dos variables con la palabra reservada "var", 
imprimir el resultado de las operaciones de "Suma", "Resta", "Multiplicación" y "División" 
en la consola. Las variables pueden ser estáticas.
*/
var a = 8; 
var b = 2;
 //suma
console.log("la suma de ",a," + ",b," = ", a + b); 
//resta
console.log("la resta de ",a," - ",b," = ", a - b);
//multiplicacion
console.log("la multiplicacion de ",a," * ",b," = ", a * b); 
//division
console.log("la division de ",a," / ",b," = ", a / b);

/* 
Declarar dos variables con la palabra reservada "let", imprimir la concatenación de ellas.
*/
let variable1 = "Hello ";
let variable2 = "World";
console.log(variable1 + variable2);

/* 
Declarar dos variables con la palabra reservada "const", imprimir cuál es el tipo de dato de esa variable. 
*/
const constante1 = 23;
const constante2 = true;
console.log(typeof(constante1));
console.log(typeof(constante2));

/* 
Declarar una variable tipo Objecto, colocar 4 llaves dentro de él que contengan un entero, 
un string, un booleano y un objeto vacío, en ese mismo orden.
*/
const obj = {
    "entero":23 ,
    "string": "hello world",
    "booleano" : true,
    "": "vacio"
}
console.log(obj)