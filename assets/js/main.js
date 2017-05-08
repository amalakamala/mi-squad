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


/*
Para que se cuenten los like vi en una web que se crea un objeto contructor, 
pero contenia el atributo 'data-bind' en las etiquetas para que incrementar el valor.
Hubo cosas que intente comprender, pero solo pude sumar un número al like del primer comentario.

Adjunto link donde vi ese forma de crear el boton y hacer una suma:
http://jsfiddle.net/rniemeyer/3Lqsx/
*/
function LikeClick(){
	this.numberOfClicks = ko.observable(0);
	this.registerClick = function() {
        this.numberOfClicks(this.numberOfClicks() + 1);
    };
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
function escribeEnHTML(){
	arr.forEach(function(el){
		var imgAux = document.createElement("div");
		imgAux.innerHTML += "<img class='foto-perfil' src= '" + el.image + "' >" + "<br>";
		escribir.appendChild(imgAux);

		var squadAux = document.createElement("div");
		squadAux.innerHTML +=  '<b>Nombre:</b> ' + el.nombre + '<br><b>Edad:</b> ' + el.edad + '<br><b>Hobbies:</b><br>';
						
		var squadAux2 = document.createElement("ul");
		squadAux2.innerHTML = el.hobbies.forEach(function(h){squadAux.innerHTML += "<li>" + h + "</li>"});

		squadAux.innerHTML += "<br>";

		var comAux = document.createElement("textarea");
		comAux.setAttribute("class", "caja-comentario");
		comAux.setAttribute("id", el.id );
		comAux.setAttribute("type", "text");
		comAux.setAttribute("placeholder","Escribe Comentario");
		squadAux.appendChild(comAux);

		squadAux.innerHTML += "<br><br>";

		var botonAux = document.createElement("a");
		botonAux.innerHTML += "Comentar";
		botonAux.setAttribute("onclick", "elBoton(this.comAux,this," + el.id + ", this.divTextoAux)");
		botonAux.setAttribute("id", "boton");
		botonAux.setAttribute("class", "el-boton");
		squadAux.appendChild(botonAux); 

		squadAux.innerHTML += "<br><br>";

		var divTextoAux = document.createElement("div");
		divTextoAux.setAttribute("class", "comentarios");
		divTextoAux.setAttribute("id", el.id);

		squadAux.appendChild(divTextoAux);



		squadAux.innerHTML += "<br><br>";
		squadAux.innerHTML += "<hr/>";
		squadAux.innerHTML += "<br>";


		escribir.appendChild(squadAux);
	});
}

//Var contador like
var elNum =0;


//Function para boton de comentarios
function elBoton(comAux,botonAux,elId,divTextoAux){

	comAux = document.getElementById(elId).value;
	divTextoAux = document.getElementsByClassName("comentarios");

	var recorre = arr.filter(function(r){
		return r.id == elId;
	})

	var likeCaja = document.createElement("div");
	likeCaja.setAttribute("class", "caja-div-like");
	likeCaja.setAttribute("align", "right");	
	likeCaja.setAttribute("id", arrComentarios.length + 1);

	var botonLike = document.createElement("a");
	botonLike.innerHTML += "❤";
	botonLike.setAttribute("class", "el-boton-like");
	botonLike.setAttribute("id", arrComentarios.length + 1);
	botonLike.setAttribute("onclick", "contLike('"+ elNum +"')");


	var contador = document.createElement("a")
	contador.innerHTML += " ";
	var numEdit = document.createTextNode(elNum);
	contador.appendChild(numEdit)
	contador.setAttribute("type", "number");
	contador.setAttribute("class", "el-contador");
	contador.setAttribute("id", "num");

	botonLike.appendChild(contador);

	likeCaja.appendChild(botonLike);

	var losCom = document.createElement("div");
	losCom.setAttribute("id", elId);
	losCom.innerHTML = "<b>~</b> " + document.getElementById(elId).value;


	if(recorre[0].id == elId && comAux != ""){
		arrComentarios.push(losCom);
		divTextoAux[recorre[0].id - 1].appendChild(losCom);
		divTextoAux[recorre[0].id - 1].appendChild(likeCaja);
		divTextoAux[recorre[0].id - 1].innerHTML += "<br><br>";
		document.getElementById(elId).value = "";

	//divTextoAux[recorre[0].id - 1].innerHTML += "<button onclick='contLike(contador)'> ♥ "+ contador +"</button><br>";
	}

}

	/*
	console.log(recorre[0].id);
	console.log(divTextoAux[recorre[0].id]);
	console.log(elId);	
	*/


//Function del contador de like
function contLike(elNum,elId){
var igualC = document.getElementById(arrComentarios.length + 1).value;	
var contadorAux = document.getElementById("num");

console.log(contadorAux);

var recorreLike = arrComentarios.filter(function(c){
	return c.id = igualC;
})
		var elNum = parseInt(elNum);
		var contador = elNum + 1;


	return contadorAux.innerHTML = " " + contador;
}	


//Llama a function principal.
mySquad();
