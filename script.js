//esercizio 1
// creo l'array di oggetti
const bikes = [
    {
        nome : 'Bici da passeggio',
        peso: 13
    },
    {
        nome: 'Mountain bike',
        peso : 20
    },
    {
        nome: 'Bici per bambino',
        peso: 8
    }
]
// definisco variabili
let weight = bikes[0].peso
let lowerWeight;

//ciclo l'array di oggetti
for(let i =0; i<bikes.length; i++){
if(weight<bikes[i].peso){
    lowerWeight= bikes[i];
    weight= bikes[i].peso
}
}
console.log(lowerWeight);
