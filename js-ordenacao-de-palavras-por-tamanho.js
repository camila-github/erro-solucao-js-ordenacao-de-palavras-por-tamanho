//SOLUCAO 1
let listaPalavras = [];
let entradaLinhas = gets();
/* No Operador Condicional Ternário, No primeiro bloco, irá validar o tamanho da string, 
  se 'a' for maior que 'b' retorna 1 e nao ocorrerá troca de posição.
  No segundo bloco, irá validar o tamanho da string, e tambem irá validar a propria palavra,
  se 'a' for menor que 'b' referente o tamanho, retorna -1, OU, se caso 'a' for maior que 'b' 
  referente a string, ocorrerá a troca de posição.*/
const ordenarLista = (a, b) => (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0;; 

/*Será lido a entrada (gets()), e separado cada caracter (split()) e armazedo no array (.push()),
a lista de caracter será ordenado em ordem crescente sort(ordenarLista), e depois será ordenado
em ordem decrescente (reverse())*/
while (entradaLinhas--) listaPalavras.push(gets().split(' ').sort(ordenarLista).reverse());

/*Utilizado join(), para que seja impresso o resultado em formato string e nao em formato de array.*/
listaPalavras.forEach(item => console.log(item.join(" ")));



//SOLUCAO 2 
var listaPalavras = [];
let totalLinhas = gets();
/*Será lido a entrada (gets()), e separado cada caracter (split()) e armazedo no array (.push()),
a lista de caracter será ordenado em ordem crescente sort(ordenarLista), e depois será ordenado
em ordem decrescente (reverse())*/
for (let i = 0; i < totalLinhas; i++) {
    var arrayAux = gets().split(' ');
    listaPalavras.push(arrayAux.sort(ordenarLista).reverse());
}
/* No Operador Condicional Ternário, No primeiro bloco, irá validar o tamanho da string, 
  se 'a' for maior que 'b' retorna 1 e nao ocorrerá troca de posição.
  No segundo bloco, irá validar o tamanho da string, e tambem irá validar a propria palavra,
  se 'a' for menor que 'b' referente o tamanho, retorna -1, OU, se caso 'a' for maior que 'b' 
  referente a string, ocorrerá a troca de posição.*/
function ordenarLista(a, b) {
    return (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0;
}
/*Utilizado join(), para que seja impresso o resultado em formato string e nao em formato de array.*/
listaPalavras.forEach(item => console.log(item.join(" ")));