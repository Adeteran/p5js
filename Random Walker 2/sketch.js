let width = 1280;
let height = 720;
let cantidad = 10;
let paso = 20;
let num_walkers = 5;
let walkers = [];

function setup(){
	canvas = createCanvas(width,height);
	background(50);
	for(let i = 0; i < num_walkers; i++){
		let col = createVector(random(255),random(255),random(255));
		// let col = createVector(40,84,134);
		walkers[i] = new Walker(col,20,width/2,height/2);	
	}
}

function draw(){				
	for(let i = 0; i < num_walkers; i++){
		walkers[i].walk();
	}
}

class Walker{
	constructor(col, diametro,posX, posY){
		this.col = col;				
		this.diam = diametro;
		this.pos = createVector(posX,posY);
	}

	drawWalker(x,y){
		noStroke();
		fill(this.col.x,this.col.y,this.col.z);
		rect(x,y,this.diam,this.diam);
	}

	walk(velocidad){				
		let direccion = Math.floor(random(4));
		if(direccion == 0){
			this.pos.x += paso;
		}
		if(direccion == 1){
			this.pos.y += paso;
		}
		if(direccion == 2){
			this.pos.x -= paso;
		}
		if(direccion == 3){
			this.pos.y -= paso;
		}
		this.drawWalker(this.pos.x,this.pos.y);
	}
}