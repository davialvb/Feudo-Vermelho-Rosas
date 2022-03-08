###Em primeiro lugar, instalamos o docker na máquina
$ sudo apt update <para atualizar a versão dos pacotes do linux>
$ sudo apt upgrade <É para atualizar os pacotes do linux>
*seguir os passos desse link https://www.hostinger.com.br/tutoriais/install-docker-ubuntu

###Aqui começou a dar certo
$ sudo curl -L https://github.com/docker/compose/releases/download/v2.2.3/docker-compose-`uname -s`-`uname -m` -o /usr/local/bin/docker-compose <pesquisar depois>
$ sudo chmod +x /usr/local/bin/docker-compose

$ sudo service docker start <vai startar o docker>
$ sudo service docker status <output: docker is running>
$ sudo docker-compose -f nome_do_arquivo up <para subir o docker>

#No navegador
localhost:8081 <nesse caso a porta era 8081, mas se for outra basta alterar. Se tiver aparecido os bancos tudo certinho, quer dizer que deu certo>

##Para entrar no container dentro do wsl
$ sudo docker ps <vai aparecer os containers>
$ sudo docker exec -it id_do_container bash <para abrir o container dentor do wsl>
$ mongo mongodb://localhost:27017 -u rootuser -p rootpass <para abrir a imagem do mongodb dentro do container>