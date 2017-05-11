//Arregos vacios para compañeras y para comentarios
var arr = [];
var arrComentarios = [];


//Constructor de Squad
function Squad(nombre,edad,hobbies,id,image){
	this.nombre = nombre;
	this.edad = edad;
  	this.hobbies = hobbies;
  	this.id = id;
  	this.image = image;
}


function Comentario(id_miembro, el_comentario, like){
  this.id_miembro = id_miembro;
  this.el_comentario = el_comentario;
  this.like = like;
 }


//Se construye el Squad
function mySquad(){

	var Marcela = new Squad("Marcela Cabello",31,["Cantar", "Yoga", "Cocinar"],1,"assets/img/perfil-marcela.jpg");
	var Marcelissa = new Squad("Melissa Pacheco",25,["Dormir", "Comer", "Matilda"],2,"assets/img/perfil-melissa.jpg");
	var Paulina = new Squad("Paulina Aros",28,["Hacer libretas", "Acariciar Gatos", "Manicure"],3,"assets/img/perfil-paulina.jpg");
	var Karla = new Squad("Karla Jeria",35,["Comer Chocolates", "Viajar","Ir al Cine"],4,"assets/img/perfil-karla.jpg");
	var Tanya = new Squad("Tanya Ramirez",29,["Gatos", "Viajar","Tomar tecito a las 4"],5,"assets/img/perfil-tanya.jpg");
	var Paula = new Squad("Paula Ponce",28,["Música", "Aves","Heroes of the storm"],6,"assets/img/perfil-paula.jpg");
	var Mariela = new Squad("Mariela Cubillos",36,["Tejer", "Comer chocolate","Cocinar"],7,"assets/img/perfil-mariela.jpg");
	var Valentina = new Squad("Valentina Amala Kamala",29,["Bordar", "Tejer","Dormir"],8,"assets/img/perfil-amala.jpg");

	arr.push(Marcela,Marcelissa,Paulina,Karla,Tanya,Paula,Mariela,Valentina);

	escribeEnHTML();
}
 
//Va que contiene el id de la etiqueda div desde el html
var escribir = document.getElementById('mi-squad');


//Function que crea todos los elementos: foto, datos, cuadro de comentario, boton y comentarios
function escribeEnHTML(el){
	arr.forEach(function(el){

		//TEXTO YA ESCRITO
		var contenedorTexto = document.createElement("div");

		//Foto Perfil
		var imgAux = document.createElement("div");
		imgAux.innerHTML += "<img class='foto-perfil' src= '" + el.image + "' >" + "<br>";
		escribir.appendChild(imgAux);

		//Nombre Apellido Edad Hobbies
		var squadAux = document.createElement("div");
		squadAux.innerHTML +=  '<b>Nombre:</b> ' + el.nombre + '<br><b>Edad:</b> ' + el.edad + '<br><b>Hobbies:</b><br>';
						
		//Detalle Hobbies
		var squadAux2 = document.createElement("ul");
		squadAux2.innerHTML = el.hobbies.forEach(function(h){squadAux.innerHTML += "<li>" + h + "</li>"});

		squadAux.innerHTML += "<br>";

		contenedorTexto.appendChild(squadAux);





		//ESCRIBIR COMENTARIOS
		var losComentarios = document.createElement("section");
		losComentarios.id = "seccion" + el.id;

		//Text Area
		var comAux = document.createElement("textarea");
		comAux.setAttribute("class", "caja-comentario");
		comAux.id = "text-area" + el.id;
		comAux.setAttribute("type", "text");
		comAux.setAttribute("placeholder","Escribe Comentario");
		losComentarios.appendChild(comAux);

		losComentarios.innerHTML += "<br><br>";

		//BOTON COMENTAR
		var botonAux = document.createElement("a");
		botonAux.innerHTML += "Comentar";
		botonAux.id = "boton-comentar" + el.id;
		botonAux.setAttribute("class", "el-boton");
		botonAux.setAttribute("onclick", "elBoton(" + el.id + ")");
		losComentarios.appendChild(botonAux); 



		var contenedorComentarios = document.createElement("div")
		contenedorComentarios.id = "contenedor" + el.id;
		losComentarios.appendChild(contenedorComentarios);
		contenedorComentarios.setAttribute("class","caja-final")

		losComentarios.innerHTML += "<br><br>";

		losComentarios.innerHTML += "<hr>";

		losComentarios.innerHTML += "<br><br>";



		escribir.appendChild(contenedorTexto);
		escribir.appendChild(losComentarios);

	});
}


//Function para boton de comentarios
function elBoton(elId){
	

	var delTextArea = document.getElementById("text-area" + elId).value;
	document.getElementById("text-area"+ elId).value= "";


	var likeCaja = document.createElement("div");
	likeCaja.id = "comentario-div" + elId;
	likeCaja.setAttribute("class", "caja-div-like");



	var post = document.createTextNode(delTextArea);
	var contenedorDePost = document.createElement('p');
	contenedorDePost.appendChild(post);

	if(delTextArea == ""){
		alert('Rellena el campo');
        return false;
	}	

	var botonLike = document.createElement("span");
	var botonLikeCo = document.createTextNode("❤");
	botonLike.appendChild(botonLikeCo)
	botonLike.setAttribute("class", "el-boton-like");
	botonLike.setAttribute("id", "boton");
	var click = 0;
	var contador = document.createElement("span");
	contador.setAttribute("class", "el-contador");
	botonLike.addEventListener("click", function contadorLikes(){
        click += 1;
        contador.innerHTML = " " + click;
    });

	likeCaja.innerHTML+= delTextArea + " ";
	likeCaja.appendChild(botonLike);
	likeCaja.appendChild(contador);



	var conFinal = document.getElementById("contenedor"+elId);
	conFinal.appendChild(likeCaja);
	(document.getElementById("text-area" + elId).value).innerHTML = "";


	var coment = new Comentario(elId,delTextArea,contador);
	arrComentarios.push(coment);
}


//Llama a function principal.
mySquad();

