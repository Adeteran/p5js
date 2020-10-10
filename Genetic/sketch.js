/*
Algoritmo Evolutivo
Etapas.

1. Crear una población N elementos con información al azar.
2. Calcular el fitness de cada elemento de la población (De acuerdo a un objetivo especifico).
3. Reproducción
	a. Seleccionar 2 elementos con mejor fitness.
	b. Crear nuevo elemento 
		1. Cruza
		2. Mutación
	b. Agregar a nueva población.
4. Nueva población a etapa 1.

*/

let width = 1280;
let height = 720;

function setup(){
	canvas = createCanvas(width,height);	
}

function draw(){
	background(50);	
}