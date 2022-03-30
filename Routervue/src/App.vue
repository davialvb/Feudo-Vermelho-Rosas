<template>
  

  <nav id="menu">
  <ul>
    <a><img style="float: left; margin-right: 25px; box-shadow: 3px 3px 3px;" src="./static/home/DesenSoft.png" alt="icone de pesquisa" class="imgpesquisa"></a>
		<li><a><router-link to="/">Notícias</router-link></a></li>
		<li><a><router-link to="/about">Recomendações</router-link></a></li>
		<li><a><router-link to="/sobre">Quem somos</router-link></a></li>
	</ul>
</nav>


  <router-view/>


<footer  class="rodape">
  <p><img style="box-shadow: 5px 5px 5px;" src="./static/home/DesenSoft.png" alt=""></p>
  <li class="lirod">© Copyright 2020-2022 Vermelho Rosas Comunicações e Participações S.A.</li>
    <li class="lirod" style="margin-left: 420px;"><a href="https://g1.globo.com/principios-editoriais-do-grupo-globo.html#principios-editoriais" target="_blank" style="text-decoration: none;">princípios editoriais</a> | <a href="https://privacidade.globo.com/privacy-policy/" target="_blank" style="text-decoration: none;">política de privacidade</a> | <a href="https://globoads.globo.com/" target="_blank" style="text-decoration: none;">anuncie conosco</a></li>
</footer>

</template>

<style>

</style>
