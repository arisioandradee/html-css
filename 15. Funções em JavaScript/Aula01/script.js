//1 - Criando uma função
function primeiraFuncao() {
    console.log("testando");
}

primeiraFuncao();

function funcaoComParametro(txt) {
    console.log(`Imprimindo: ${txt}`)
}

funcaoComParametro("Olá mundo!");
funcaoComParametro("Hello world!");

//2 - Retornando valores
function soma(a, b){
    return a + b;
}

soma1 = soma(5,5);
soma2 = soma(3,2);
somaTotal = (soma1 + soma2);

console.log(somaTotal);

//3 - Escopo das funções

const v = 10;

function imprimirV() {
    let v = 15;

    console.log(`Valor de V dentro da função: ${v}`)
}

console.log(`Valor de V fora da função: ${v}`)
imprimirV()

//4 - Arrow Function
const arrowFunction = () => {
    console.log("teste!")
}

const parImpar = (numero) => {
    if(numero % 2 == 0){
        console.log(`O número ${numero} é par!`)
    } else {
        console.log(`O número ${numero} é ímpar!`)
    }
}

parImpar(10);
parImpar(11);

//6 - Mais sobre Arrow Function
const raizQuadrada = (z) => z * z;  

console.log(raizQuadrada(4));

//7 - Parametro opicional
const multiplicacao = function(m,n){
    if (n === undefined) {
        return m * 2;
    } else {
        return m * n;
    }
}

console.log(multiplicacao(10));
console.log(multiplicacao(5, 2));

//8 - Valor default
const customGreeting = (name, greet = "Olá") => {
    return `${greet}, ${name}`
}

console.log(customGreeting("Arisio"));
console.log(customGreeting("Yasmim", "Oi"));

//9 - Closure
function someFunction() {
    let txt = "texto";

    function display() {
        console.log(txt);
    }

    display();
}

someFunction();
