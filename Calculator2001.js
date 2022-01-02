const prompt = require('prompt-sync')({sigint: true});//importar modulo para leer texto

var operacion;
var numero1,numero2;

function sumarString(num1, num2) {
return (parseInt(num1) + parseInt(num2));
}


console.log("Calculadora\n Elija la operacion a realizar\n 1-Suma\n 2-Resta\n 3-Multiplicacion\n 4-Division\n");
operacion = prompt("");
if (!(operacion === "1" || operacion === "2" || operacion ==="3" || operacion ==="4")) {
console.log("Escriba un numero valido");
operacion = prompt("");
}

console.log(operacion);
if (operacion === "1") {
numero1 = prompt("Escriba un numero: ");
numero2 = prompt("escriba otro numero: ");
console.log("El resultado es: ");
console.log(sumarString(numero1, numero2));

} else if (operacion === "2") {
  numero1 = prompt("Escriba un numero: ");
  numero2 = prompt("escriba otro numero: ");
  console.log("El resultado es: ");
  console.log(parseInt(numero1)-parseInt(numero2));

} else if (operacion === "3") {
  numero1 = prompt("Escriba un numero: ");
  numero2 = prompt("escriba otro numero: ");
  console.log("El resultado es: ");
  console.log(parseInt(numero1)*parseInt(numero2));

} else if (operacion === "4") {
  numero1 = prompt("Escriba un numero: ");
  numero2 = prompt("escriba otro numero: ");
  console.log("El resultado es: ");
  console.log(parseInt(numero1)/parseInt(numero2));

} else {
  console.log("Opcion incorrecta");

}
