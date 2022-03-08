![](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/73a73682-61c2-4eac-b2ce-79f6ea794dc9/ddi9ikq-236d7f0a-475c-4026-ada5-3a2659bfc42c.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzczYTczNjgyLTYxYzItNGVhYy1iMmNlLTc5ZjZlYTc5NGRjOVwvZGRpOWlrcS0yMzZkN2YwYS00NzVjLTQwMjYtYWRhNS0zYTI2NTliZmM0MmMuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LEgvPGmPfGG9EG8jrX3mnDwpoAFQJdnMWyQv4rlUTkY) 
## Em primeiro lugar, instalamos o docker na máquina</br>

`sudo apt update` 
>Serve para atualizar a versão dos pacotes do linux

`sudo apt upgrade` 
>Serve para atualizar os pacotes do linux

* seguir os passos desse link para terminar de instalar https://www.hostinger.com.br/tutoriais/install-docker-ubuntu

## Depois de ter instalado, começa a segunda etapa
>sudo curl -L https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose

`sudo chmod +x /usr/local/bin/docker-compose`

`sudo service docker start` 
>vai startar o docker

`sudo service docker status` 
>output: docker is running

`sudo docker-compose -f nome_do_arquivo up` 
>para subir o docker

#### No navegador
`localhost:8081` 
>nesse caso a porta era 8081, mas se for outra basta alterar. Se tiver aparecido os bancos tudo certinho, quer dizer que deu certo

## Para entrar no container dentro do wsl
`sudo docker ps`
>para aparecer os containers

`sudo docker exec -it id_do_container bash`
>para abrir o container dentor do wsl

`mongo mongodb://localhost:27017 -u rootuser -p rootpass` 
>para abrir a imagem do mongodb dentro do container
