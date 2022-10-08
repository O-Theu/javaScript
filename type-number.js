// tipo number

const meuNumero = 3;

const primeiroNumero = 1;
const segundoNumero = 2;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

// ponto flutuante

const numeroPontoFlutuante = 3.3;
const PontoFlutuanteSemZero = .5;

const novaOperacao = primeiroNumero / numeroPontoFlutuante;

console.log(novaOperacao);

// NaN -> Not a Number

const texto = "Ola";

console.log(novaOperacao * texto);

// Formatando Numeros: https://www.alura.com.br/artigos/formatando-numeros-no-javascript 

function ganhoPorHora(salario, horasTrabalhadasNoMes) {

    const salarioHora = (salario / horasTrabalhadasNoMes); 
  
    console.log(Math.round(salarioHora));;
    
  }

  ganhoPorHora(3000,176); 

  var lista = [10,1, 5, 9, 8, 12, 15];

  lista.sort();

  console.log(lista);