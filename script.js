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
if(weight>bikes[i].peso){
    lowerWeight= bikes[i];
    weight= bikes[i].peso
}
}
console.log(lowerWeight);


// esercizio 2

//creo array di oggetti di squadre di calcio
let teams =[
    {
        nomeclub : 'Lazio',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nomeclub: 'Juventus',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nomeclub: 'Roma',
        puntifatti: 0,
        fallisubiti: 0,
    },
    {
        nomeclub: 'Milan',
        puntifatti: 0,
        fallisubiti: 0,
    }
]

//generare numeri random e inserirli in una funzione
const randomNumbers = () =>{
    return Math.floor(Math.random()*10) +1
}
// ciclare i numeri random nelle proprietà punti fatti e falli subiti
for(let i=0; i<teams.length; i++){
    teams[i].puntifatti= randomNumbers();
    teams[i].fallisubiti= randomNumbers();
}
// creare un nuovo array che contiene solo nomi e falli subiti
const newArray= [];
for(let i=0; i<teams.length;i++){
   newArray.push(teams[i].nomeclub)
   newArray.push(teams[i].fallisubiti)
}
// visualizzare il risultato in console
console.log(newArray);
