<template>
  <div class="home">

<body>
 
<div style="text-align: center;">
<img src="../static/home/carrobrabo.png" alt="notícia importante" style="text-align: center;"><br>
</div>

<p id="Titulonoticias" style="margin-top: 35px">Notícias</p>

<div id="container">
  
  <div style="text-align: center;" class="item1"><img style="height: 300px; width: 450px;" src="../static/home/seguro-cibernetico.png" alt="">
      
      <p class="nottema"><a style="text-decoration: none;" href="#">Malware ataca servidores do Google</a></p>
      <p style="font-size: 18px;">kshdjkas sdijdassad kaskdjaskjasd ksadjasdkjasd ksadjaskd asdkasjdkasd kasdjsakdjsda kasdjsdkjdas kasdjasdkdjas dshjkasdhkasjd</p>
      <p id="Autor">Leandro</p>
      <p id="Data">25/10/2022</p>

  </div>

  <div style="text-align: center;" class="item1"><img style="height: 300px; width: 450px;" src="../static/home/seguro-cibernetico.png" alt="">
      
      <p class="nottema"><a style="text-decoration: none;" href="#">Malware ataca servidores do Google</a></p>
      <p style="font-size: 18px;">CEO do google disse: Perdi tudo CEO do google disse: Perdi tudo CEO do google disse: Perdi tudo djhasdjkasdhjkasd7 dsjsdajdasjasd kjhdjkdhjkasd dsjdaskasd asdkjdasjksda</p>
      <p id="Autor">Leandro</p>
      <p id="Data">25/10/2022</p>
  </div>
  
</div>

<div id="container2">

  <div style="text-align: center;" class="item2"><img style="height: 300px; width: 450px;" src="../static/home/seguro-cibernetico.png" alt="">
      <p class="nottema"><a  style="text-decoration: none;" href="#">Malware ataca servidores do Google</a></p>
      <p style="font-size: 18px;">CEO do google disse: Perdi tudo adjshasdjsd daskjdhaskasdh sadkjsdakhasd skadjskadjasdk adsjshadjkasdh asdhgjhsad jasdhasdjhsda askjhasdjk</p>
      <p id="Autor">Leandro</p>
      <p id="Data">25/10/2022</p>
  </div>

  <div style="text-align: center;" class="item2"><img style="height: 300px; width: 450px;" src="../static/home/seguro-cibernetico.png" alt="">
      <p class="nottema"><a  style="text-decoration: none;" href="#">Malware ataca servidores do Google</a></p>
      <p style="font-size: 18px;">CEO do google disse: Perdi tudo sadjhasdjhasd sadjkhasdjkhsdjkasd sadjkasdhjkasdhjkasd asdkasdkjasdhjkasd asjhjkasddsasadhjdas sadjhasdjhasd adshjgsdajhgasd asdjhasdgjhasdgasd asjdasdjhsgad sdajhasdgjhasd</p>
      <p id="Autor">Leandro</p>
      <p id="Data">25/10/2022</p>
  </div>
</div>


</body>




  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView'
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
