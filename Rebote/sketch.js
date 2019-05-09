let width = 1280;
let height = 720;

function setup(){	
	canvas = createCanvas(width,height);	
	
	a1 = new Agent();
}

function draw(){				
	background(50);
	a1.calc();
}



class Agent{
	constructor(){
		this.position = createVector(width/2,height/2);
		this.velocity = createVector(0,0);
		this.acceleration = createVector(0,0.9);
		this.diam = 50;
	}

	drawAgent(){
		noStroke();
		fill(180);
		ellipse(this.position.x,this.position.y,this.diam,this.diam);
	}

	calc(){				
		this.edges();
		this.position.add(this.velocity);
		this.velocity.add(this.acceleration);				
		this.drawAgent();
		console.log(" ");
		console.log("Pos: " + this.position.x + ", " + this.position.y);
		console.log("Vel: " + this.velocity.x + ", " + this.velocity.y);
	}

	edges(){
		if(this.position.x >= width){
			this.velocity.x = -1;
		}
		if(this.position.x <= 0){
			this.velocity.x *= -1;
		}

		if(this.position.y >= height){
			this.velocity.y *= -1;
		}
		if(this.position.y <= 0){
			this.velocity.y *= -1;
		}
	}
}