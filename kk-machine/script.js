// function converter () {

//     // INPUTS

//     // var decimal = Number(document.getElementById('valor').value);

    
//     // // DECLARANDO VARIAVEIS

//     // let octal = decimal.toString(8);
//     // let hexa = decimal.toString(16).toUpperCase();
//     // let binario = decimal.toString(2);
 

//     // // MOSTRANDO RESULTADOS

//     // document.getElementById('resultado1').innerHTML = `<p>O seu número na base binária é </p><input  value= ${binario} readonly>`;
//     // document.getElementById('resultado2').innerHTML = `<p>O seu número na base octal é </p><input  value= ${octal} readonly>`;
//     // document.getElementById('resultado3').innerHTML = `<p>O seu número na base hexadecimal é </p> <input  value=${hexa} readonly>`;

// }

document.addEventListener('DOMContentLoaded', function () {

    function realTime() {

        // INPUTS
        
        var value = Number(document.getElementById('valor').value);
    
    
        // DECLARANDO VARIAVEIS
    
        var binario = value.toString(2);
        var octal = value.toString(8);
        var hexa = value.toString(16).toUpperCase();
    
        document.getElementById('n1').value = binario;
        document.getElementById('n2').value = octal;
        document.getElementById('n3').value = hexa;
    }
    
    document.getElementById('valor').addEventListener('input', realTime)
    
});

