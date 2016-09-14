
//TP
/*Crear una funcion que agregue objetos peliculas

El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director.

Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores 
tendra que ir agregando uno a uno*/

function Pelicula(titulo,descripcion,ano,duracion,actores,director){
	
	//Atributos
	this.titulo = titulo;
	this.descripcion = descripcion;
	this.ano = ano;
	this.duracion = duracion,
	this.actores = actores,
	this.director = director;

	//Metodo editar

	this.editado = false;

	this.realizarEdicion = function(){
		
		this.editado = true;

	}

	this.editar = function(){

		if(this.editado === true){

			this.valor = prompt('Ingrese lo que desea editar(titulo, descripcion, ano, duracion, actores o director)');

			if(this.valor === 'titulo'){

				this.titulo = prompt('Ingrese el nuevo titulo de la pelicula');

			} else if (this.valor === 'descripcion'){

				this.descripcion = prompt('Ingrese la nueva descripcion de la pelicula');

			} else if (this.valor === 'año'){

				this.ano = prompt('Ingrese el año de la pelicula');

			} else if (this.valor === 'duracion'){

				this.duracion = prompt('Ingrese la duración de la pelicula');

			} else if (this.valor === 'actores'){

				 this.actores = prompt('Ingrese los actores de la película');

			} else if (this.valor === 'director'){

				this.director = prompt('Ingrese el director de la pelicula');

			} else {

				alert('No se pudo procesar su solicitud');

			}

		} else if (this.editado === false) {

			alert('No se puede realizar la edición');

		}

	}
	
}

var pulpFiction = new Pelicula('Pulp Fiction', 'pelicula de cine policiaco', '1994', '2h 58m', 'Uma Thurman', 'Quentin Tarantino');
Pelicula();

