## Comandos básicos MongoDB

# Create

* O comando `use "nome_do_banco_de_dados"` serve para criar um novo banco de dados caso não possua

* Porém, ainda será necessário colocar algo nesse banco de dados para que possa ser visualizado no `show dbs`, e para adicionar, basta digitar `db.&lt;collection>.insert({})`

Obs: Para criar uma collection, digite `db.createCollection('qualquer-nome')`

# Show

* Ao digitar o `show dbs`, aparecerá todos os bancos de dados existentes na sua máquina

# Remove

* A função remove() deleta os documentos de uma coleção que obedecem a um determinado critério

    `db.NomeColeção.remove({nomeAtributo : valor do atributo})`

* Se nenhum atributo for informado todos os dados da coleção são excluídos

    `db.NomeColeção.remove({})`

* Para excluir uma coleção inteira usamos o método drop();

    `db.NomeColeção.drop()`

* Para excluir o banco de dados

    `db.dropDatabase()`

## Find

* Para buscar um documento dentro de uma collection, digite `db.clube.find({"nome":"São Paulo"})` 

Obs: Utilizei um exemplo nesse comando, onde o "clube" seria o nomde da tabela

## Edit

* Para editar um documento, usamos o código `db.clube.update({nome:"São Paulo"},{set:{nome: "Santos"}})`

Obs: Utilizei um exemplo nesse comando, onde o "clube" seria o nomde da tabela

