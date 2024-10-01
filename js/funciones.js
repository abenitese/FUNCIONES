function saludar() {
    console.log("hola, estoy en la funcion");
}

saludar();

function sumar(num1,num2) {
    let resultado;
    resultado=num1+num2;
    return resultado;
    //return num1+num2;
}

let suma = sumar(5,2);
console.log("El resultado es: "+suma);
suma=sumar(4,6);
console.log("El resultado es: "+suma);
