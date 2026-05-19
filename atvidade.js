// =========================
// Exercício 1
// =========================
let nome = "João";
console.log(nome);


// =========================
// Exercício 2
// =========================
let idade = 18;
console.log("Minha idade é " + idade);


// =========================
// Exercício 3
// =========================
let nomeUsuario = prompt("Digite seu nome:");
console.log("Olá, " + nomeUsuario);


// =========================
// Exercício 4
// =========================
let idadePessoa = Number(prompt("Digite sua idade:"));

if (idadePessoa >= 18) {
    console.log("Maior de idade");
} else {
    console.log("Menor de idade");
}


// =========================
// Exercício 5
// =========================
let nota = Number(prompt("Digite sua nota:"));

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}


// =========================
// Exercício 6
// =========================
let numero = Number(prompt("Digite um número:"));

if (numero >= 0) {
    console.log("Número positivo");
} else {
    console.log("Número negativo");
}


// =========================
// Exercício 7
// =========================
function mensagem() {
    console.log("Essa é uma mensagem no console!");
}

mensagem();


// =========================
// Exercício 8
// =========================
function mostrarNome(nome) {
    console.log(nome);
}

mostrarNome("Carlos");


// =========================
// Exercício 9
// =========================
function soma(num1, num2) {
    console.log("Resultado:", num1 + num2);
}

soma(10, 5);


// =========================
// DESAFIO FINAL
// =========================
let nomeFinal = prompt("Digite seu nome:");
let idadeFinal = Number(prompt("Digite sua idade:"));
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));

let media = (nota1 + nota2) / 2;

// Verificar idade
if (idadeFinal >= 18) {
    console.log(nomeFinal + " é maior de idade");
} else {
    console.log(nomeFinal + " é menor de idade");
}

// Verificar aprovação
if (media >= 7) {
    console.log("Aprovado com média " + media);
} else {
    console.log("Reprovado com média " + media);
}