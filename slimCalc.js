function somar(){
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    
    let resultado = parseInt(num1) + parseInt(num2);
    
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function subtrair(){
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    
    let resultado = parseInt(num1) - parseInt(num2);
    
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function multiplicar(){
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    
    let resultado = parseInt(num1) * parseInt(num2);
    
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}

function dividir(){
    let num1 = document.getElementById("valor1").value;
    let num2 = document.getElementById("valor2").value;
    
    let resultado = parseInt(num1) / parseInt(num2);
    
    document.getElementById("resultado").innerHTML="Resultado: " + resultado;
}