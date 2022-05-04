//hacer la serie fibonacci en JS, la cual consiste en sumar el ultimo numero que se sumo con el resultado
// 0, 1, 1, 2, 3, 5, 8 ...
var primerNumero = parseInt (prompt("Ingrese el primer numero: "));
var segundoNumero = parseInt (prompt("Ingrese el segundo numero: "));
var array = [primerNumero, segundoNumero];

for(var i=0; i <= 100; i++)
{
    var nuevoNumero = primerNumero + segundoNumero;
    array.push(nuevoNumero);

    primerNumero = segundoNumero;

    segundoNumero = nuevoNumero;
}
console.log(array);