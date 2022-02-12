var botaoNome = document.getElementById("botao-nome");
var nomeUsuario = document.getElementById("nome-usuario");
var resetInicio = false;
botaoNome.onclick = function () {
    document.getElementById("nome-digitado").innerText = nomeUsuario.value;
    document.getElementById("textos-nome").style.display = "none";
    document.getElementById("seleciona-jogo").style.display = "flex";
    resetInicio = true;
}

var botaoJogo = document.getElementById("botao-jogo");
var jogos = document.getElementsByName("jogo-selecionado");
var jogoSelecionado = [];
botaoJogo.onclick = function () {
    for (const jogo of jogos) {
        if (jogo.checked) {
            jogoSelecionado = jogo.value;
            break;
        }
    }
    document.getElementById("seleciona-jogo").style.display = "none";
    document.getElementById("escolhe-numero").style.display = "flex";
}

var botaoNumero = document.getElementById("botao-numero");
var numero = document.getElementById("numero-escolhido");
botaoNumero.onclick = function () {
    if (numero.value < 1 || numero.value > 1000)
        alert("O número deve ser de 01 a 1000");
    else {
        comecaJogo();
    }

}

function comecaJogo() {
    document.getElementById("container-principal").style.display = "none";
    document.getElementById("container-jogos").style.display = "flex";
    if ((jogoSelecionado == "par-impar")) {
        document.getElementById("jogo-01").style.display = "flex";
        document.getElementById("user-jogo01").innerText = nomeUsuario.value;
        document.getElementById("numero-jogo01").innerText = numero.value;
        verificaPar(numero.value);
        return
    }
    else if ((jogoSelecionado == "primos")) {
        document.getElementById("jogo-02").style.display = "flex";
        document.getElementById("user-jogo02").innerText = nomeUsuario.value;
        document.getElementById("numero-jogo02").innerText = numero.value;
        verificaPrimo(numero.value);
        return
    }
    else if ((jogoSelecionado == "fibonacci")) {
        document.getElementById("jogo-03").style.display = "flex";
        document.getElementById("user-jogo03").innerText = nomeUsuario.value;
        document.getElementById("numero-jogo03").innerText = numero.value;
        verificaFib(numero.value);
        return
    }
    else if (jogoSelecionado == "multiplos-04") {
        document.getElementById("jogo-04").style.display = "flex";
        document.getElementById("user-jogo04").innerText = nomeUsuario.value;
        document.getElementById("numero-jogo04").innerText = numero.value;
        verificaPin(numero.value);
        return
    }
    else {
        console.log("Deu ruim");
    }
}
function verificaPar(num) {
    let parImpar = num % 2 === 0 ? 'par' : 'impar';
    document.getElementById("paridade").innerText = parImpar;
    return
}

function verificaPrimo(num) {
    let divisores = 0
    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            divisores++;
        }
    }
    if (divisores == 2) {
        document.getElementById("primalidade").style.display = "none";
    }
    else {
        document.getElementById("primalidade").style.display = "default";
    }
}

function verificaFib(num) {
    var arr = [];
    arr[0] = 0;
    arr[1] = 1;
    var iguais = [];
    for (var i = 2; i <= 19; i++) {
        arr[i] = arr[i - 2] + arr[i - 1];
        if (arr[i - 1] == num) {
            iguais++;
        }
    }

    if (iguais.length == 0) {
        document.getElementById("sequencia-fib").style.display = "default";
    }
    else {
        document.getElementById("sequencia-fib").style.display = "none";
    }
}

function verificaPin(num) {
    var arr = [];
    var arr2 = [];
    for (i = 1; i <= 1000; i++) {
        if (num == i && i % 4 === 0) {
            arr2.push('<a style="color:red; font-weight:600;"> ' + i + '-PIN</a>');
        }
        else if (num == i && i % 4 !== 0) {
            arr2.push('<a style="color:red; font-weight:600;"> ' + i + '</a>');
        }
        else if (i % 4 === 0) {
            arr2.push(' ' + i + '-PIN');
        }
        else {
            arr2.push(' ' + i);
        }
    }
    document.getElementById("sequencia-pin").innerHTML = arr2;
}

var botaoReset = document.getElementById("botao-reset");
botaoReset.onclick = function () {
    if (resetInicio == true) {
        document.getElementById("container-jogos").style.display = "none";
        document.getElementById("jogo-01").style.display = "none";
        document.getElementById("jogo-02").style.display = "none";
        document.getElementById("jogo-03").style.display = "none";
        document.getElementById("jogo-04").style.display = "none";

        document.getElementById("container-principal").style.display = "flex";
        document.getElementById("seleciona-jogo").style.display = "flex";
        document.getElementById("textos-nome").style.display = "none";
        document.getElementById("escolhe-numero").style.display = "none";
    }
    else {
        window.location.reload();
    }
}