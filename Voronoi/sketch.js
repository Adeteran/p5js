let width = 1600;
let height = 800;
let cantidad = 50;
let puntos = [];

function setup(){	
	canvas = createCanvas(width,height);
	background(50);
	noStroke();	
	for (let i = 0; i < cantidad; i++){
		puntos.push(createVector(random(width),random(height)));		
	}
	
	for (let i = 0; i < puntos.length; i++){
		fill(180);
		noStroke();
		circle(puntos[i].x,puntos[i].y,6);
		stroke(255,0,0);
		noFill();
		circle(puntos[i].x,puntos[i].y,100);
	}
}