<template>
  <div id="about">

<body>
<nav id="menu">
  <ul>
    <a><img style="float: left; margin-right: 25px; box-shadow: 3px 3px 3px;" src="./assets/imagens home/DesenSoft.png" alt="icone de pesquisa" class="imgpesquisa"></a>
		<li><a href="#">Notícias</a></li>
		<li><a href="#">Recomendações</a></li>
		<li><a href="#">Quem somos</a></li>
	</ul>
</nav>

</body>
<footer  class="rodape">
  <p><img style="box-shadow: 5px 5px 5px;" src="./assets/imagens home/DesenSoft.png" alt=""></p>
  <li class="lirod">© Copyright 2020-2022 Vermelho Rosas Comunicações e Participações S.A.</li>
    <li class="lirod" style="margin-left: 420px;"><a href="#" style="text-decoration: none;">princípios editoriais</a> | <a href="#" style="text-decoration: none;">política de privacidade</a> | <a href="#" style="text-decoration: none;">anuncie conosco</a></li>
</footer>

</template>

<script>
import axios from "axios"

export default {
  data() {
    return {
      newTask: "",
      tasks: [],
    }
  },
  mounted() {
    this.getTasks()
  },
  methods: {
    async addTask() {
      await axios.post("http://172.25.0.11:8000/api/tasks/", {
        title: this.newTask,
      })
      this.getTasks()
    },
    getTasks() {
      axios.get("http://172.25.0.11:8000/api/tasks/").then((res) => {
        this.tasks = res.data
      })
    },
  },
}
</script>

<style>

#menu ul {
	padding:0px;
	margin:0px;
	background-color:#ffffff;
	list-style:none;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
}
    
#menu ul li { display: inline; }

#menu ul li a {
	padding: 2px 19px;
	display: inline-block;

	/* visual do link */
	background-color:#ffffff;
	color: rgb(0, 0, 0);
	text-decoration: none;
	border-bottom:3px solid #ffffff;
    font-size: 25px;
    
}

#menu ul li a:hover {
	background-color:#D6D6D6;
	color: #000000;
	border-bottom:3px solid #0004ea;
}


/*-----------------------------------------------------*/

body{
    background-color: rgb(255, 255, 255);
    margin: 0;
    padding: 0;
}

p{
    font-size: 1.15rem;
    text-align: justify;
    line-height: 30px;
}

#container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 8px;
}

.item1{
    margin: 40px;
    width: 30%;
}

#container2{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    line-height: 8px;
}

.item2{
    margin: 40px;
    width: 30%;
}


.rodape{
    background-color: #C4C4C4;
    color: #000000;
    font-size: 15px;
    padding-left: 113px;
    padding-right: 113px;
    padding-top: 20px;
    padding-bottom: 20px;
}

.lirod {
    display: inline-block;
}

.nottema{
    font-size: 25px;
    
    
}

#Titulonoticias{
margin-top: 10px; 
font-size: 55px; 
text-align: center; 
display: block; 
font-family: Libre Baskerville; 
text-decoration: underline;
}

#filtrapesq{
    width: 3%; 
    margin-left: 1278px; 
    display: block; 
    margin-top: 15px; 
    margin-bottom: 20px;
}

#Autor,#Data{
    color: #d1cece;
    line-height: 5px;

}
</style>
