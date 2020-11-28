## Treinamento Digital Innovation One - Exercicio - Ordenação de palavras por tamanho

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Introdução a busca e substituição em JavaScript.
(https://digitalinnovation.one)

#### Descrição do Desafio:

Crie um algoritmo para ordenar um conjunto de palavras pelo seu tamanho. Seu programa deve receber um conjunto de palavras e retornar este mesmo conjunto ordenado pelo tamanho das palavras decrescente, se o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.

#### Entrada:

A primeira linha da entrada possui um único inteiro N, que indica o número de casos de teste. Cada caso de teste poderá conter de 1 a 50 palavras inclusive, e cada uma das palavras poderá conter entre 1 e 50 caracteres inclusive. Os caracteres poderão ser espaços, letras, ou números.

#### Saída:

A saída deve conter o conjunto de palavras da entrada ordenado pelo tamanho das palavras e caso o tamanho das palavras for igual, deve-se ordernar por ordem alfabética.. Um espaço em branco deve ser impresso entre duas palavras.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
2 | midnight three four mond One at
One three four mond at midnight | three five one
one three five |

```javascript
// SOLUÇÃO 1
var listaPalavras = [];
let totalLinhas = gets();
/*Será lido a entrada, e separado cada caracter (split()) e armazedo no array (.push()),
a lista de caracter será ordenado em ordem crescente sort(ordenarLista), e depois será ordenado
em ordem decrescente*/
for (let i = 0; i < totalLinhas; i++) {
    var arrayAux = gets().split(' ');
    listaPalavras.push(arrayAux.sort(ordenarLista).reverse());
}
/*No primeiro bloco, irá validar o tamanho da string, se 'a' for maior que 'b' 
  retorna 1 e nao ocorrerá troca de posição.
  No segundo bloco, irá validar o tamanho da string, e tambem irá validar a propria palavra.
  se 'a' for menor que 'b' referente o tamanho, retorna -1, OU, se caso 'a' for maior que 'b' 
  referente a string, ocorrerá a troca de posição.*/
function ordenarLista(a, b) {
    return (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0;
}
/*Foi utilizado o join(), para que seja impresso o resultado em string e nao em array*/
listaPalavras.forEach(item => console.log(item.join(" ")));


//SOLUÇÃO 2 - Resumido
listaPalavras = [];
totalLinhas = gets();
/*Será lido a entrada, e separado cada caracter (split()) e armazedo no array (.push()),
a lista de caracter será ordenado em ordem crescente sort(ordenarLista), e depois será ordenado
em ordem decrescente*/
while (totalLinhas--) listaPalavras.push(gets().split(' ').sort(ordenarLista).reverse());
/*No primeiro bloco, irá validar o tamanho da string, se 'a' for maior que 'b' 
  retorna 1 e nao ocorrerá troca de posição.
  No segundo bloco, irá validar o tamanho da string, e tambem irá validar a propria palavra.
  se 'a' for menor que 'b' referente o tamanho, retorna -1, OU, se caso 'a' for maior que 'b' 
  referente a string, ocorrerá a troca de posição.*/
function ordenarLista(a, b) { return (a.length > b.length) ? 1 : (a.length < b.length || a > b) ? -1 : 0; };
/*Foi utilizado o join(), para que seja impresso o resultado em string e nao em array*/
listaPalavras.forEach(item => console.log(item.join(" ")));
```