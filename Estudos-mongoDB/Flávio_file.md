### Iniciar No cmd
`mongo`
>para startar o mongodb  
<br>

`use nome_do_banco`
>para criar um database vazio
<br>

`cls` 
>para limpar os comandos escritos
<br>

### Colections
`db.nome_da_collection.drop()`
>vai deletar uma collection
<br>

`db.nome_da_collection.insertOne({ nome: "Flávio", idade: 18, profissao: "estudante" }` 
>As {} são para criar um 'document' dentro do banco
<br>

`db.nome_da_collection.insertMany([ </br>
	{ nome: "Melo", idade: 20, profissao: "programador" },</br>
	{ nome: "Clara", idade: 22, profissao: "designer" }
])`
>os colchetes [] são pra criar um array
<br>

>para mostrar os banco de dados existentes

`show dbs`

>para mostrar as collections existentes

`show collections`

* db.nome_da_collection.find() <para mostrar todos os documents da collection>
* db.nome_da_collection.find().pretty() <vai mostrar os documents de uma forma mais organizada>
* db.nome_da_collection.find({ idade: 20}) <vai mostrar todos os documents que tem idade = 20>
* db.nome_da_collection.find({ nome: "Melo"}).count() <vai contar quantos tem o nome Melo>
* db.nome_da_collection.find().count() <vai contar quantos documents tem na collections>
* db.nome_da_collection.findOne() <vai pegar o primeiro document da collection>
* db.nome_da_collection.findOne({ idade: 18 }) <vai pegar o primeiro document com idade = 18>

* db.nome_da_collection.updateOne({ nome: "Flávio" }, { $set: { profissao: "programador" } }) <vai alterar a field profissao do "Flávio">
* db.nome_da_collection.updateOne({ nome: "Flávio" }, { $set: { cor_cabelo: "Castanho" }) <serve para adicionar um field também>
* db.nome_da_collection.updateMany({}, { $set: { salario: 2500 } }) <vai alterar o de todo mundo, já que não foi identificado no primeiro document>>

* db.nome_da_collection.deleteOne({ nome: "Clara"}) <vai exluir o document da collection>
* db.nome_da_collection.deleteMany({}) <vai deletar vários documents>


### Operadores
* db.nome_da_collection.find({ idade: { $gt: 18 } }) <vai pegar os maiores de 18 (greater than)>
* db.nome_da_collection.find({ idade: { $gte: 20 } }) <vai pegar os maiores ou iguais (greater than or equal)>
* db.nome_da_collection.find({ idade: { $lt: 20 } }) <vai pegar os menores de 20 (less than)>
* db.nome_da_collection.find({ idade: { $lte: 20 } }) <vai pegar os menores ou iguais (less than or equal)>

* db.pessoas.updateMany({ idade: { $gte: 21} }, { $set: { pode_beber: true } }) <nesse caso, só vai acrescentar o pode_beber em quem for maior ou igual a 21>

* db.pessoas.updateOne({ nome: "Flávio" }, { $inc: { idade: 2 } }) <O $inc serve para incrementar um valor na property>
* db.pessoas.updateOne({ nome: "Flávio" }, { $inc: { idade: -2 } }) <ele também serve para decrementar um valor>



#### Dados no vscode.
* db.nome_da_collection.insertOne({
	nome: "Jorge",                  <para definir dados mais organizados utilizando o vscode ou similar> </br>
	idade: 70,						<após copiar tudo, basta clicar com o botão direito do mouse no mongodb para colar> </br>
	personalidade: "calmo", </br>
	hobbies: ["Dar comida para os pombos", "fazer caminhada", "ler jornal"], </br>
	caracteristicas: { </br>
		cabelo: "branco",
		fisico: "magro",
		altura: 1.70,
		cor_dos_olhos: "verdes"
	} </br>
})
