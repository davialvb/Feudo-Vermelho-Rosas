# Curso de JavaScript
## Variáveis 

Exemplo:
~~~JavaScript
var n = 1
console.log(n);
~~~

Saída
~~~JavaScript
1
~~~
## Funções:

Exemplo:
~~~JavaScript
n=5

function addnum(){
n=n+1
console.log(n)
}

addnum()
~~~

Saída:
~~~JavaScript
6
~~~

## Condicionais

Exemplo1:
~~~JavaScript
var idade = 12
console.log(`Você tem ${idade} anos`)
if(idade<16){
    console.log('Não vota')
} else if(idade< 18 || idade>65){
    
    console.log('Voto opcional')
    
} else{
    console.log('Voto obrigatório')
}
~~~
Saída
~~~JavaScript
Você tem 12 anos
Não vota
~~~

Exemplo 2:
~~~JavaScript
n = 0+1

switch (n){
    case 0:
       console.log('Domingo')
       break
    case 1:
        console.log('Brabo')
        break
    default:
        console.log('[ERRO]')
        break
}
~~~
Saída
~~~JavaScript
Brabo
~~~
## Vetores
~~~JavaScript
var num = [2,7,4,8,5,3]

console.log(`O índice do valor 8 é o ${num.indexOf(8)}`)
~~~

Saída
~~~JavaScript
O índice do valor 8 é o 3
~~~

## Estrutura de Repetição
Exemplo 1:
~~~JavaScript
var nome = 'Arthur' 
n=5
while (n>1) {
    console.log('fraco')
    n=n-1
  }
~~~
Saída
~~~JavaScript
fraco
fraco
fraco
fraco
~~~

Exemplo 2:

~~~JavaScript
var i = 5;

for (var i = 0; i < 10; i++) {
  console.log(i)
}
~~~

Saída
~~~JavaScript
0
1
2
3
4
5
6
7
8
9
~~~
