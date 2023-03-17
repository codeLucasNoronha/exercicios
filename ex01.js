const lista = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]
let isOne = [];
let notOne = [];

for (let indice = 0; indice <lista.length; indice++) { //enquanto indice for menor que o tamanho da lista eu conto mais um
    if(lista[indice] === 1) {
        isOne.push(lista[indice])
        
    } else {
        notOne.push(lista[indice])
        
    }
}

isOne.push.apply(isOne, notOne);

console.log(isOne)