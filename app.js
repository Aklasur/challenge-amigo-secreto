//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Declaração da lista e das variáveis
let nomeAmigo = document.getElementById("amigo").value; // Campo de texto para o nome
let listaAmigos = []; // Lista de nomes
let resultado = document.getElementById("resultado"); // Local onde aparecerá o sorteado

// Função para limpar o campo de entrada
function limparCampo() {
    nomeAmigo = document.querySelector("input");
    nomeAmigo.value = "";
}

// Função de validação do nome
function adicionarAmigo() {
    let nomeAmigo = document.querySelector("input").value;
    if (nomeAmigo == "") {
        alert("Por favor, insira um nome.");
    }
    else {
        listaAmigos.push(nomeAmigo);
        console.log(listaAmigos);
        limparCampo();
        exibirLista();
    } 
}

// Exibe lista na tela
function exibirLista() {
    // Seleciona a lista
    let exibirLista = document.getElementById("listaAmigos");
    // Limpa lista existente
    exibirLista.innerHTML = "";
    // Percorre o array e cria elementos <li> para cada amigo
    listaAmigos.forEach(
        amigo => {
            let item = document.createElement("li");
            item.textContent = amigo;
            exibirLista.appendChild(item);
        }
    )
}

function sortearAmigo() {
    // Verifica se a lista tem pelo menos um amigo
    if (listaAmigos.length === 0) {
        alert("A lista está vazia! Por favor, aicione amigos antes de sortear.");
        return;
    }
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let resultado = listaAmigos[indiceAleatorio];
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${resultado}`;
    console.log(sortearAmigo());
}