//Carne => 4 hrs de churrasco => Adultos = 400g. + de 6hrs de churrasco:=> Adultos 600g.
//Cerveja => 4 hrs de churrasco => Adultos=1250ml de cerveja. +de 6hrs de churrasco:=> 2000ml
//Refrigerante/agua/suco => 4 hrs de churrasco =>Adultos=1250ml. + de 6hrs:=>2000ml.
//Crianças valem por 0,5, exceto cálculo de cerveja!!

alert("Seu churrasco na medida certa!")

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
let qtdecarne = carnepp(duracao) * adultos + (carnepp(duracao) / 2 * criancas);
let qtdecerveja = cervejapp(duracao) * adultos ;
let qtdebebida  = bebidaspp(duracao) * adultos + (bebidaspp(duracao) / 2 * criancas);

resultado.innerHTML = `<p>${Math.ceil(qtdecarne/1000)} Kgs de carne.</p>`
resultado.innerHTML += `<p>${Math.ceil(qtdecerveja/355)} latas de cerveja de 355ml.</p>`
resultado.innerHTML += `<p>${Math.ceil(qtdebebida/2000)} garrafas PET de refrigerante/água.</p>`


function carnepp(duracao){
    
    if(duracao >= 6){
        return 600;
    
    }else{
        return 400
    }
}
function cervejapp(duracao){
    
    if(duracao >= 6){
        return 2000;
    
    }else{
        return 1250
    }
}
function bebidaspp (duracao){
    
    if(duracao  >= 6){
        return 2000;
    
    }else{
        return 1250
    }
}
}