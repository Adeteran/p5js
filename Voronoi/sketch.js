let width = 1600;
let height = 800;
let cantidad = 15;

function setup(){
	canvas = createCanvas(width,height);
}

function draw(){
	background(250);
	// for(let i = 0; i < cantidad; i++){		
	// 	circle(random(width),random(height),12);
	// 	line(0,0,random(width),random(height));
	// }	
	circle(random(width),random(height),12);
	line(0,0,random(width),random(height));
}