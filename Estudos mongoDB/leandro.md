# Comandos MongoDB

show dbs: Mostra os bancos de dados existentes na sua máquina.

use nome-do-Bancodedados: Acessa o banco de dados e se o banco de dados não existir ele cria.

show collections: Mostra as collections que existem no banco dedados.

db.createCollection('qualquer-nome'): Cria uma collection.

db.nomedacollection.drop(): Apaga uma collection.

db.nomedatabela.insert({}): Insere dados(documentos) na collection.

db.alunos.update({nome: "Pedro"},{set:{nome: "joao"}}): Atualiza os dados(documentos) dentro das collections.

db.alunos.remove({'nome':'Lucas'}): Remove um dado(documento) de uma collection.

db.alunos.find( { "nome" : "bernado" } ): Procura um dado(documento) específico dentro de uma collection.

