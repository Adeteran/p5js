
let grid;
let diametro = 40;

function setup(){
	noStroke();	
	angleMode(DEGREES);
	background(50);
	canvas = createCanvas(displayWidth,displayHeight);
	
	grid = new Grid(windowWidth,windowHeight,diametro);	
	grid.gen();	
}

function draw(){	
	grid.update();			
}

class Hex {
	constructor(diametro,posX,posY){		
		this.diam = diametro;
		this.centerX = posX;
		this.centerY = posY;
	}

	draw(col){		
		fill(col);
		push();
		
		translate(this.centerX,this.centerY);
		beginShape();	
		vertex(this.diam,0);
		vertex(this.diam/2,(sin(60) * this.diam));
		vertex(-(this.diam/2),(sin(60) * this.diam));
		vertex(-this.diam,0);
		vertex(-this.diam/2,-(sin(60) * this.diam));
		vertex(this.diam/2,-(sin(60) * this.diam));
		vertex(this.diam,0);	
		endShape();

		pop();
	}
}

class Grid{

	constructor(width,height,diam){				
		this.diam = diam;
		this.cantidadX = width/diam + 1;
		this.cantidadY = height/diam + 1;
		this.grid = [];
		this.off = 0.0;
		this.offX = 0;
		this.offY = 0;		
	}

	gen(){
		angleMode(DEGREES);	
		let state = true;	
		for(let i = 0; i < this.cantidadX; i++) {
			let col = [];			
			for(let j = 0 ; j < this.cantidadY; j++){
				let hex;
				if(state){
					hex = new Hex(this.diam,
						i * this.diam * 1.5,
						j * 2 *(this.diam*sin(60)));					
				}else{
					hex = new Hex(this.diam,
						i * this.diam * 1.5,
						j * 2 *(this.diam*sin(60))+ this.diam - (this.diam - (this.diam * sin(60))));					
				}
				col.push(hex);				
			}
			state = !state;
			this.grid.push(col);
		}		
	}

	draw(x,y){				
		let tx = x;
		for(let i = 0; i < this.cantidadX; i++) {
			let ty = y;
			for(let j = 0 ; j < this.cantidadY; j++){
				let noiseValue = noise(tx,ty);
				let col = map(noiseValue,0,1,0,255);
				this.grid[i][j].draw(col);
				ty += 0.1;
			}
			tx+= 0.1
		}
	}

	update(){		
		this.draw(this.offX,this.offY);
		this.offX -= 0.0025;
		this.offY += 0.0025;
	}
}
