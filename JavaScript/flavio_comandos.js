//Entrada e saída
var nome = "Flávio Gustavo Araújo de melo" //Declara uma varável
console.log(`Seu nome completo é ${nome}`) //O console.log() serve mostrar o valor na tela, semelhante ao print do python


//Vetores
let lista = [1, 2, 3, 4, 5, 6] //Para criar uma lista
console.log(lista)
console.log(lista[1]) //Monstrar o valor da posição 1 da lista
lista[6] = 2 //Var acrescentar o 2 na posição 6
console.log(lista)


//Estruturas de Repetição
for(i = 1; i < 11; i++){        //O a=1 vai servir para declara o início da variável, a<11 vai ser pra repetir o bloco de comando enquanto o
    console.log(`Número ${i}`)  //a for menor do que 11, e o 'a++' é o incremento do laço, ou seja, a variável a recebe mais 1 a cada
}                               // vez que o bloco é rodado

/*
var a = 1
while(a < 11){ //Enquanto a variável a(1) for menor do que 11, ele vai repetir o comando passado
    console.log(`Número ${a}`)
    a++;
}
*/


//Condicional
var nome = "Flávio";
if(nome === "Flávio"){ //Aqui tem 3 iguais '=' porque em javascript quando coloca apenas 2, ele irá levar em conta apenas o conteúdo dentro da variável, e não o tipo
    console.log(`Bom dia ${nome}, prazer em te conhecer`); //Por exemplo: x = "3" (string)   x == 3(int) -> True   x === 3(false)
}
else{
    console.log(`Você não é o Flávio, mas mesmo assim prazer em te conhecer`)
}


//Função
function soma(){ //Função sem parametro
    var a = 2
    var b = 3
    var s = a + b
    console.log(`A soma de ${a} com ${b} é ${s}`)
}
soma()

function produto(a,b){
    p = a * b
    console.log(p)
}
produto(3, 3)

