let cuad;
let off = 0.2;

function setup(){
	createCanvas(1280, 720);
	background(50);
	noStroke();
	grid = new Grid(10);
	grid.grid_gen();
	// frameRate(225);
	grid.render();
}

function draw(){
	
}

class Cuad{
	constructor(x,y,lado){
		this.x = x;
		this.y = y;
		this.lado = lado;
	}
	display(col){		
		fill(col);
		rect(this.x,this.y,this.lado,this.lado);
	}
}

class Grid{	

	constructor(lado){
		this.x = width/lado;
		this.y = height/lado;
		this.lado = lado;
		this.cuad_grid = [];
		this.tx = 0;
		this.ty = 0;		 
	}

	grid_gen(){
		
		for(let i = 0; i < this.x; i++){
			let col = [];
			for(let j = 0; j < this.y; j++){
				col[j] = new Cuad(i * this.lado,j * this.lado,this.lado);
			}
			this.cuad_grid.push(col);
		}
	}

	render(){
		let tx = 0;
		for(let i = 0; i < this.x; i++) {
			let ty = 0;
			for(let j = 0 ; j < this.y; j++){
				let noiseValue = noise(tx,ty) * 255;
				if(noiseValue < 90){
					let c = 'hsl(205,100%, '+ noiseValue +'%)';							
					noiseValue = c;
				}
				if(noiseValue > 90 && noiseValue < 110){
					let c = 'hsl(48,70%,73%)';							
					noiseValue = c;
				}
				if(noiseValue > 110 && noiseValue < 160){
					let c = 'hsl(106,80%,30%)';							
					noiseValue = c;
				}
				this.cuad_grid[i][j].display(noiseValue);
				ty += 0.1;				
			}
			tx += 0.1;
		}		
	}

}

