let width = 1280;
let height = 720;
let cantidad = 1;
let agents = [];

function setup(){	
	canvas = createCanvas(width,height);
	for(let i = 0; i < cantidad; i++){
		agents.push(new Agent());	
	}	
}

function draw(){
	background(50);	
	for(let i = 0; i < cantidad; i++){
		agents[i].calc();		
	}
}

class Agent{
	constructor(){
		this.diam = 50;
		this.position = createVector(random(width) + (this.diam/2),random(height) + (this.diam/2));		
		this.velocity = p5.Vector.random2D();
		this.acceleration = p5.Vector.random2D();
	}

	drawAgent(){
		noStroke();
		this.color();
		ellipse(this.position.x,this.position.y,this.diam,this.diam);
	}

	calc(){				
		this.edges();
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);
		this.drawAgent();
		// console.log(" ");
		// console.log("Pos: " + this.position.x + ", " + this.position.y);
		// console.log("Vel: " + this.velocity.x + ", " + this.velocity.y);
		this.acceleration.mult(0); //reset each cycle
	}

	edges(){
		if(this.position.x + (this.diam/2) >= width){
			this.velocity.x = -1;
		}
		if(this.position.x - (this.diam/2) <= 0){
			this.velocity.x *= -1;
		}

		if(this.position.y + (this.diam/2) >= height){
			this.velocity.y *= -1;
		}
		if(this.position.y - (this.diam/2) <= 0){
			this.velocity.y *= -1;
		}
	}

	color(){
		console.log(this.velocity);
	}

	collision(){

	}
}