# Comandos Git

## git init 

* Inicia-se um novo repositório

## git add

* Prepara os seus arquivos para que fiquem em "staging", ou seja, prontos para serem commitados

* Caso o usuário queira adicionar vários arquivos novos/modificados, utiliza-se o comando `git add .`

## git status 

* Serve para verificar em qual branch o usuário está, além de monitorar o estado atual dos arquivos

## git commit

* É esse comando que de fato irá commitar os seus arquivos no repositório, além de adicionar uma mensagem para registrar o commit

* Exemplo: `git commit -m "Mensagem"`

## git remote

* Utiliza-se este comando para conectar o nosso repositório com o do Github

* Exemplo: `git remote add origin https://github.com/davialvb/Feudo-Vermelho-Rosas`

* Obs: O `origin` é um apelido que estamos dando para o repositório do Github

## git checkout

* Além de servir para criar-se uma nova branch com o comando `git checkout -b "nova_branch"`, é possível alternar de branchs utilizando o mesmo comando anterior, apenas retirando o "-b" e inserindo qual branch o usuário deseja ir

## git merge

* Caso o usuário terminou o que tinha para fazer em uma branch e deseja colocar ela na master/main, é necessário que faça o seguinte procedimento: vá para o lugar onde deseja-se utilizando o comando `"git checkout master"`, por exemplo, e logo em seguida, digitar `"git merge nova_branch"`. Pronto, a branch "nova_branch" juntou-se com a "master"

## git clone

* Este comando faz com que um repositório seja clonado, obtendo assim seus arquivos na máquina do usuário

* Exemplo: `git clone https://github.com/davialvb/Feudo-Vermelho-Rosas`

## git pull

* Serve para atualizar um repositório na máquina, tornando-se assim mais prático o acesso de novos dados

## git push 

* Utilizado para transferir commits do seu repositório local para um remoto

* Exemplo: `git push -u origin master`





