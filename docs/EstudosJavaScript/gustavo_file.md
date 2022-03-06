### JavaScript's guide

## Variáveis em JS

# Definição de variáveis

Usamos 'var' ou 'let' para definir uma nova variável

* Exemplo1: `var nome = Gustavo`

* Exemplo2: `var numero = 18`
> Obs: Em variáveis numéricas, podemos fazer contas matemáticas com esses dados.

## Tipos primitivos

# Fundamentais

Existem três tipos primitivos primordiais, que são o **number**, **string** e o **boolean**

* Podemos utilizar o comando `typeof {variável}` para descobrir qual é o tipo da variável

## Tratamento de dados

# Concatenação

Para concatenar uma frase com uma variável qualquer, é necessário a utilização do '+' com o nome da variável a seguir:

* Exemplo1: 

`var nome = Gustavo`
`window.alert('Você é novo por aqui, ' + nome + '?')

Neste exemplo, adota-se um template mais "agradável" na concatenação: 

* Exemplo2 (mais adaptável):

`nome = Gustavo`
`window.alert(`Você é novo por aqui, ${nome}`)`
> Obs: Quando for colocar o texto com a variável, deve-se utilizar a crase normal ( ` ).

# Formatação de números

Caso queiramos transformar uma string em um número, devemos utilizar alguns comandos que são: `Number.parseInt(n)` para inteiros, e o `Number.parseFloat(n)` para reais

Existe também o `Number(n)`, que tem como função generalizar a saída do número, sem a necessidade de colocar os comandos que foi demonstrados recentemente, porém, caso o usuário queira forçar um número inteiro, por exemplo, deverá utilizar o `Number.parseInt(n)`
> Obs: Podemos também converter um número para string, utilizando tanto o `String(n)` quanto o `n.toString()`.

Se o seu objetivo é fazer com que o número tenha mais de uma casa decimal, basta digitar `n1.toFixed(2)`
>Obs: O "n1" é uma variável totalmente arbitrária, e o "2" é um exemplo, onde o total de casas decimais que teríamos é justamente duas.

E se quisermos mudar algo nesse "n1", basta digitar `replace()`

* Exemplo1: `n1.toFixed(2).replace('.', ',')`
>Obs: Caso o "n1" seja por exemplo 1545.5, ele se transformou no 1545,50 devido ao comando acima.

Um comando bem legal que aborda valor monetário é esse: 

`n1.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})`
`R$: 1.545,50`

Tá, mas o que significa isso tudo? Simples! Ele pega o valor do "n1" e transforma em um valor do país solicitado, que no exemplo acima foi do Brasil (BRL), mas poderíamos também mudar para um outro país, como o do EUA (USD) que ficaria em dólar

# Formatação de strings

Para formatar strings conseguimos usar diversos métodos, como por exemplo o `nome.toLowerCase` que fará a string ser totalmente minúscula
> Obs: O "nome" é uma variável totalmente arbitrária.

## Operadores

Aqui, os operadores que vão ser mais utilizados serão: **aritméticos**, **atribuição**, **relacionais**, **lógicos** e o **ternário**

# Aritméticos

5 + 2 = 7 
5 - 2 = 3 
5 * 2 = 10 
5 / 2 = 2.5 
5 % 2 = 1  
5 ** 2 = 25

<!-- 
Cuidado com a precedência dos operadores! Segue a lista de prioridade:

1. ()
2. **
3. * | / | %
4. + | - 
-->

# Atribuição

Definição de **atribuição simples**:

var a = 5 + 3          | 8
var b = a % 5          | 3 
var c = 5 * b ** 2     | 45
var d = 10 - a / 2     | 6
var e = 6 * 2 / d      | 2
var f = b % e + 4 / e  | 3

Definição de **auto-atribuição** com uma simplificação bastante usada:

var n = 3
n = n + 4   ou   n += 4    | 7  
n = n - 5   ou   n -= 5    | 2   
n = n * 4   ou   n *= 4    | 8  
n = n / 2   ou   n /= 2    | 4  
n = n ** 2  ou   n **= 2   | 16 
n = n % 5   ou   n %= 5    | 1  

Definição de **incremento**:

var x = 5
x = x + 1   ou   x += 1  ={Incremento}=  x++ 
x = x - 1   ou   x -= 1  ={Incremento}=  x--

> Obs: Digitei o "={Incremento}=" apenas para simular uma transformação que ocorre quando decidimos optar por esse operador.

Definição de **relacionais** e um pouco de **identidade** que segue a mesma lógica:

*relacionais*:

5 > 2   --> True
7 < 4   --> False
8 >= 8  --> True
9 <= 7  --> False
5 == 5  --> True
4 != 4  --> False

*identidade*:

5 == 5    --> True
5 == '5'  --> True 
5 === '5' --> False
5 === 5   --> True

Definição de **lógicos**:

!   --> *negação*
> "Quero uma caneta mas ela NÃO pode ser azul
&&  --> *conjunção*
> "Quero uma caneta azul e uma vermelha"
||  --> *disjunção*
> "Quero uma caneta azul ou uma vermelha, mas se eu ganhar as duas estou satisfeito também"

*Negação*

!true   -->  false
!false  -->  true

*Conjunção*

true && true    -->  true
true && false   -->  false
false && true   -->  false
false && false  -->  false

*Disjunção*

true || true    -->  true
true || false   -->  true
false || true   -->  true
false || false  -->  false

__________________________________________________

Lista de precedência atualizada:

1. Lista de aritméticos
2. Lista de relacionais 
> No relacionais, não existe uma ordem de precedência
3. Lista de lógicos
<!-- 
3.1. !
3.2. &&
3.3. || 
-->
__________________________________________________

Definição de **ternário**:

`teste ? true : false`

Segue o exemplo:

média >= 7.0 ? "Aprovado" : "Reprovado"

Se a variável foi maior ou igual que 7, significa que foi aprovado, e reprovado se for menor

## DOM (Document Object Model)

# Árvore DOM

                   window
                     |
                     |
         -------------------------
        /            |            \
    Location      document      history
                     |
                     |
                    html
                     |
                     |
                 ---------
                /         \
              head       body
               |           |
               |           |
            -------        |
           /       \       |
         meta     title    |
                           |
                           |
                   -----------------
                  /      /    \     \
                  h1    p      p    div
                               |
                               |
                             strong

# Selecionando elementos

Podemos fazer isso por **Marca**, **Id**, **Nome**, **Classe** e **Seletor**

Por *Marca*:

`getElementsByTagName()`

Exemplo:

var p1 = window.document.getElementsByTagName("p")[0]
> Obs: O [0] significa que vai pegar o primeiro "p", mas se fosse [1], pegaria o segundo "p".

Por *Id*:

`getElementById()`

Por *Nome*:

`getElementsByName()`

Por *Classe*:

`getElementsByClassName()`

Por *Seletor* (recomendável):

`querySelector()`
`querySelectorAll()`

Neste comando, é bom lembrar uma pequena observação: Se for selecionar uma div, por exemplo, usa-se o "#" para *id* e "." para *Classe*.

# Eventos DOM

É tudo que possa acontecer com algum elemento. Por exemplo, passar o mouse sobre a div e mostrar algo diferente.

O que é uma função (function):

Conjunto de códigos JS que só serão acionados de acordo com determinado evento na página Web.

function ação(parâmetro) {
  'códigos aqui'
}

Dois grandes exemplos que abordam os eventos DOM é o "ex006.html" e "ex007.html"

## Condições em JS

# Sequências

var n = 3  -->  n += 2  -->  window.alert(n)

# Condições

Exemplo de condição:

                  {VS}
                   |
                   |
                  {VS}
                   |
                   |
            ---- {EVS} -----
            |              |
            |              |
          {EVS1}         {EVS2}
            |              |
            |              |
            ---- {EVSD} ----
                   |
                   |
              {VS1 ou VS2}


VS == Variável Sequencial
EVS == Escolha de Variável Sequencial
EVSD == Escolha de Variável Sequencial Definida

No esquema apresentado, podemos assumir que caso o usuário esteja em uma sequência e opte por escolhas diferentes, o resultado vai ser definido por meio delas. 

* Exemplo: Estamos em uma VS e aparecem duas EVS (EVS1 e EVS2), caso o usuário opte pela *EVS1*, irá chegar na EVSD, que por sua vez vai determinar qual VS foi escolhida, que no caso é a *VS1*.

# Estrutura da condição

~~~JavaScript

if (EVS1) {
  VS1
} else {
  VS2
}

~~~

# Tipos de condição

~~~ JavaScript

if (condição) {     |
  true              |-> Condição simples
}                   |


if (condição) {     |
  true              |
} else {            |-> Condição composta
  false             |
}                   |

~~~

# Condições aninhadas

Exemplo de condição aninhada:

                  {VS}
                   |
                   |
                  {VS}
                   |
                   |
           ------- {EVS} --------
           |                    |
           |                    |
         {EVS1}               {EVS2}
          |                     |
          |                     |
          |               ----{EVS}----
          |               |            |
          |               |            |
          |            {EVS2.1}     {EVS2.2}
          |               |            |
          |               |            |
          |               ----{EVSD}---
          |                     |
          |                     |
          |--------{EVSD}-------|
                     |
                     |
                     |
                {VS1 ou VS2}


VS == Variável Sequencial
EVS == Escolha de Variável Sequencial
EVSD == Escolha de Variável Sequencial Definida    

No esquema apresentado, podemos assumir que caso o usuário esteja em uma sequência e opte por escolhas diferentes, o resultado vai ser definido por meio delas. 

* Exemplo: Estamos em uma VS e aparecem duas EVS (EVS1 e EVS2), caso o usuário opte pela *EVS2*, irá chegar em uma nova EVS (EVS2.1 e EVS2.2). Suponhamos, então, que ele decida pela *EVS2.1*, ou seja, vai resultar em uma EVSD, que por sua vez vai determinar qual VS foi escolhida, que no caso é a *VS2.1*.

# Estrutura da condição aninhada

~~~ JavaScript

if (EVS1) {
  VS1
} else if (EVS2) {
  VS2.1
} else {
  VS2.2
}

~~~

Um exemplo que aborda essa estrutura está no "ex012.js"

# Condição Múltipla

Exemplo:

                         {VS}
                          |
                          |
                         {VS}
                          |
                          |
         ---------------{EVS}--------------
         |          |          |          | 
         |          |          |          |
       {EVS1}     {EVS2}     {EVS3}     {EVS4}
         |          |          |          |
         |          |          |          |
         ---------------{EVSD}-------------
                          |
                          |
               {VS1, VS2, VS3 OU VS4}

VS == Variável Sequencial
EVS == Escolha de Variável Sequencial
EVSD == Escolha de Variável Sequencial Definida

No esquema apresentado, podemos assumir que caso o usuário esteja em uma sequência e opte por escolhas diferentes, o resultado vai ser definido por meio delas. 

* Exemplo: Estamos em uma VS e aparecem quatro EVS (EVS1, EVS2, EVS3 e EVS4), caso o usuário opte pela *EVS3*, irá chegar na EVSD, que por sua vez vai determinar qual VS foi escolhida, que no caso é a *VS3*.

# Estrutura da condição múltipla

~~~JavaScript

switch (expressão) {
  case valor 1:
    EVS1
    break
  case valor 2:
    EVS2
    break
  case valor 3:
    EVS3
    break
  default:         // O "default" é como se fosse o "else"
    EVS4
    break          
}

~~~

> Todos os "break" são necessários, mas o último é opcional, porém nós iremos utilizar.

Um exemplo que aborda essa estrutura está no "ex013.js"

## Repetições

Em um exemplo de comer 8 pedaços de uma pizza, requer uma repetição:

function comerPizza() {
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
  comerFatia()
}

# Repetições

Exemplo
         
          {VS}
           |
           |
 ------->{EVS}--------
 |         |         |
 |         |         |
 |         |         |
 --------{EVS1}      |
                     |
                     |
           |<---------
           |
          { }

# Estrutura da repetição

while (EVS1) {
  EVS
}

Tendo o exemplo da pizza usando o `while`:

~~~JavaScript

function () {
  while(temFatia()) {
    comerFatia()
  }
}

~~~

Outro exemplo de repetição:

         {VS}
          |
          |
         { }<--------        
          |         |
          |         |
        {EVS1}      |
          |         |
          |         |
        {EVS}--------                 

Estrutura:

~~~JavaScript

do {
  EVS1
} while (EVS)

~~~

# Estrutura de repetição com variável de controle

Exemplo: 

            {Ini}
              |
              |
   -------->{Test}---------
   |          |           |
   |          |           |
   |          |           |
   ---------{Inc}         |
                          |
                          |
                          |
              { }<---------

Estrutura:

~~~JavaScript

for (inicio; teste; incr) {
  Inc
}

// Caso o "teste" for verdadeiro, ocorrerá um incremento, se não, o código irá pular essa parte

~~~

## Variáveis compostas (arrays)

# Variáveis simples

Só conseguem armazenar um valor por vez

# Variáveis compostas

Devem ser capazes de armazenar vários valores em uma mesma estrutura

Exemplo: vaga a = [c1,c2,c3]

                             | <------- {elementos}
    | --------> a            | 
    |           { c1 , c2 , c3 } <--- |                 
    |       | ---> 0    1    2        |
 {vetor}    |                         |
            |                         |
            |                         |
      {ídice chave}            {conteúdo valor}

> Usei as chaves "{}" para mostrar o array, porém usa-se colchetes "[]"

No esquema apresentado, mostra que um vetor, array ou variável composta é uma variável que tem vários elementos, cada elemento é composto por seu valor e por uma chave de identificação.

# Adicionando valores

var num = [5,8,4]

num[3] = 6  -----> num = [5,8,4,6]

Pode-se de outra forma, também:

num.push(9) -----> num = [5,8,4,6,9]

Para ver a quantidade de elementos em uma array, usa-se o `num.length`

Exemplo de manipulação de array com o *for*:

~~~JavaScript

var num = [2,7,4,8,5,3]

console.log(num)

for (var pos = 0; pos<num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)

~~~

"Saída:

(6) [2, 7, 4, 8, 5, 3]

A posição 0 tem o valor 2

A posição 1 tem o valor 7

A posição 2 tem o valor 4

A posição 3 tem o valor 8

A posição 4 tem o valor 5

A posição 5 tem o valor 3"

Porém, é possível simplificar aquela função do *for* assim:

~~~JavaScript

for(var pos in num) {
  console.log(num[pos])
}

~~~

# Procurando valores

Usa-se o comando `num.indexOf()`

Seguindo com o mesmo exemplo anterior:

~~~JavaScript

var num = [2,7,4,8,5,3]

console.log(`O índice do valor 8 é o ${num.indexOf(8)}`)

~~~

Mas e se não tiver o valor solicitado? Simples, irá aparecer um `-1` na saída, demonstrando que o comando apresentado não localizou o valor no array.

## Funções em JS

São ações executadas assim que são chamadas ou em decorrência de algum evento.

Uma função pode receber parâmetro e retornar um resultado.

Ao fazer um botão, é necessário a criação de uma função para fazer com que esse botão funcione. Segue a estrutura:

~~~JavaScript

function ação (paramêtro) {
  return res
}

ação(5)

~~~

Um exemplo mais "real", tendo como objetivo verificar se o número é par ou ímpar:

~~~JavaScript

function parimp(n) {
  if (n%2 == 0) {
    return "par"
  } else {
  return "ímpar"
  }
}

let res = parimp(12)

console.log(`12 é um número ${res}`)

~~~

Saída:

"12 é um número par"