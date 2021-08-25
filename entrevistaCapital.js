/*

Autor: Carlos Pano Hernández

Realiza los siguientes ejercicios usando el lenguaje de programación JavaScript, puedes usar el entorno de
programación que mas se te acomode, al finalizar los ejercicios favor de mandar adjuntos los archivos al correo:
c.cardenas@lcadvisors.com.mx
Dichos archivos deberán estar guardados con extensión .js  


*/

//1.- Realiza una multiplicación de dos números sin usar el símbolo de multiplicación.
function multiplicacion(numA,numB){

    //Declarar unidad
    let resultado=0;

    //Iterar hasta numB
    for (let i=0; i <= numB-1; i++){
        resultado=resultado+numA //Sumar A el numero de veces de B
    }

    return "El resultado de " + numA + " X " + numB + " es: " + resultado

}

console.log(multiplicacion(5,5))
console.log(multiplicacion(7,2))
console.log(multiplicacion(9,9))
console.log(multiplicacion(8,3))
console.log("-------------------------")

//2.- Obtener el número mayor en un arreglo iterando solo una vez.

function mayorArray(lista){
    listaOrdenada=lista.sort((a, b) => a - b);

    return "El número mayor del array: " + lista + " es: "+ listaOrdenada.pop();


}

console.log(mayorArray([5,10,8,9]))
console.log(mayorArray([25,10,1,7]))
console.log(mayorArray([259,101,1333,87]))


//3.- Verifica si un string es un palíndromo (Palabra o expresión que es igual si se lee de izquierda a derecha que de derecha a izquierda).

function verificarPalindromo (palabra){
    //Separación de palabra
    oracion = palabra.split("");

    //Iteración al revés
    oracionDos = oracion.reverse();
    //console.log(oracionDos)


    /*console.log(oracionDos.join(""))
    console.log(palabra) */

    if (palabra==oracionDos.join("")){
        return palabra + " si es palíndromo"
    }else {
        return palabra + " no es palíndromo"
    }


}
console.log("-------------------------")
console.log(verificarPalindromo("hola"))
console.log(verificarPalindromo("oso"))
console.log(verificarPalindromo("mujer"))
console.log(verificarPalindromo("reconocer"))
