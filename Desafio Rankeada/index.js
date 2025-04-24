
/*  # Calculadora de partidas Rankeadas //
>> Objetivo:

Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

Se vitórias for menor do que 10 = Ferro
Se vitórias for entre 11 e 20 = Bronze
Se vitórias for entre 21 e 50 = Prata
Se vitórias for entre 51 e 80 = Ouro
Se vitórias for entre 81 e 90 = Diamante
Se vitórias for entre 91 e 100= Lendário
Se vitórias for maior ou igual a 101 = Imortal

## Saída

Ao final deve se exibir uma mensagem:
"O Herói tem saldo de **{saldoVitorias}** está no nível de **{nivel}**" */ 


function rankings(vitoria, derrota) {
    let saldo = vitoria - derrota
    let nivel = ""

    if (vitoria <= 10){
        nivel = "Ferro"
    } 
    else if (vitoria >= 11 && vitoria <= 20){
        nivel = "Bronze"
    } 
    else if (vitoria >= 21 && vitoria <= 50){
        nivel = "Prata"
    } 
    else if (vitoria >= 51 && vitoria <= 80){
        nivel = "Ouro"
    } 
    else if (vitoria >= 81 && vitoria <= 90){
        nivel = "Diamante"
    } 
    else if (vitoria > 91 && vitoria <= 100){
        nivel = "Lendário"
    } 
    else {
        nivel = "Imortal"
    }

    console.log (`O Herói tem saldo de ${saldo} está no nível de ${nivel}`);
}

rankings(41,20)

