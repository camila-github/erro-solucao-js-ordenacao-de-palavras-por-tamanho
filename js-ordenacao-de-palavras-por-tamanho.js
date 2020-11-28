// SOLUCAO 1
var listaPalavras = [];
let totalLinhas = gets();

for (let i = 0; i < totalLinhas; i++) {
    var arrayAux = gets().split(' ');
    listaPalavras.push(arrayAux.sort(ordenarLista).reverse());
}

function ordenarLista(a, b) {
    return (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0;
}
listaPalavras.forEach(item => console.log(item.join(" ")));


//SOLUCAO 2 - Resumido
listaPalavras = [];
totalLinhas = gets();

while (totalLinhas--) listaPalavras.push(gets().split(' ').sort(ordenarLista).reverse());

function ordenarLista(a, b) { return (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0; };

listaPalavras.forEach(item => console.log(item.join(" ")));