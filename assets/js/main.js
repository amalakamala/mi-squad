var arr = [];
var arrComentarios = [];

function Squad(nombre,edad,hobbies,id){
	this.nombre = nombre;
	this.edad = edad;
  	this.hobbies = hobbies;
  	this.id = id;
}


function mySquad(){

	var Marcela = new Squad("Marcela Cabello",31,["Cantar", "Yoga", "Cocinar"],1);
	var Marcelissa = new Squad("Melissa Pacheco",25,["Dormir", "Comer", "Matilda"],2);
	var Paulina = new Squad("Paulina Aros",28,["Hacer libretas", "Acariciar Gatos", "Manicure"],3);
	var Karla = new Squad("Karla Jeria",35,["Comer Chocolates", "Viajar","Ir al Cine"],4);
	var Tanya = new Squad("Tanya Ramirez",29,["Gatos", "Viajar","Tomar tecito a las 4"],5);
	var Paula = new Squad("Paula Ponce",28,["Música", "Aves","Heroes of the storm"],6);
	var Mariela = new Squad("Mariela Cubillos",36,["Tejer", "Comer chocolate","Cocinar"],7);
	var Valentina = new Squad("Valentina Amala Kamala",29,["Bordar", "Tejer","Dormir"],8);

	arr.push(Marcela,Marcelissa,Paulina,Karla,Tanya,Paula,Mariela,Valentina);

	escribeEnHTML();
}
 

var escribir = document.getElementById('mi-squad');

function escribeEnHTML(){
	arr.forEach(function(el){
		var squadAux = document.createElement("div");
		squadAux.innerHTML +=  '<b>Nombre:</b> ' + el.nombre + '<br><b>Edad:</b> ' + el.edad + '<br><b>Hobbies:</b><br>';
						
		var squadAux2 = document.createElement("ul");
		squadAux2.innerHTML = el.hobbies.forEach(function(h){squadAux.innerHTML += "<li>" + h + "</li>"});

		squadAux.innerHTML += "<br>";

		var comAux = document.createElement("textarea");
		comAux.setAttribute("class", "caja-comentario");
		comAux.setAttribute("name", "textarea" );
		comAux.setAttribute("id", el.id );
		comAux.setAttribute("value", " " );
		comAux.setAttribute("placeholder","Escribe Comentario");
		squadAux.appendChild(comAux);

		squadAux.innerHTML += "<br><br>";

		var botonAux = document.createElement("a");
		botonAux.innerHTML += "Comentar";
		botonAux.setAttribute("onclick", "elBoton(this.comAux,this," + el.id + ")");
		botonAux.setAttribute("id", "boton");
		botonAux.setAttribute("class", "el-boton");
		squadAux.appendChild(botonAux); 

		squadAux.innerHTML += "<br><br>";

		var divTextoAux = document.createElement("div");
		divTextoAux.setAttribute("class", "comentarios");
		divTextoAux.setAttribute("id", el.id);

		squadAux.appendChild(divTextoAux);

		squadAux.innerHTML += "<br><br>";

		escribir.appendChild(squadAux);
	});
}


function elBoton(comAux,botonAux,elId,divTextoAux,likeAux){

	comAux = document.getElementById(elId).value;
	divTextoAux = document.getElementsByClassName("comentarios");

	var recorre = arr.filter(function(r){
		return r.id == elId;
	})


	if(recorre[0].id == elId && comAux != ""){
		divTextoAux[recorre[0].id - 1].innerHTML += "· " + comAux + "    " + "<button onclick ='contLike(contador)'> ♥ </button><br>";

	}



	arrComentarios.push(divTextoAux[recorre[0].id - 1]);

	/*
	console.log(recorre[0].id);
	console.log(divTextoAux[recorre[0].id]);
	console.log(elId);	
	*/

}	

function contLike(contador){
	var contador = 0;
	contador++;
	return contador;
}


/*
function like(){

	elNum =  document.createElement("p");
	elNum.innerHTML += 0;

	var elLike =  document.createElement("button");
	elLike.innerHTML += "Me gusta ";
	elLike.appendChild(elNum);

	elLike.setAttribute("onclick","incrementar(elNum)");
	elLike.setAttribute("class","boton-like");

	console.log(elLike);
	console.log(elNum);

}
*/


/*
function suma(cantidad,elId){

}
*/


mySquad();

