
function insert(num){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    document.getElementById('resultado').innerHTML = "";
}

function back(){
    var resultado = document.getElementById('resultado').innerText;
    document.getElementById('resultado').innerText = resultado.substring(0, resultado.length -1);
}

function calcular(){
    try{
        let resultado = document.getElementById('resultado').innerText;
        document.getElementById('resultado').innerText = eval(resultado);
    } catch (error) {
        document.getElementById('resultado').innerText = "Erro";
    }
}