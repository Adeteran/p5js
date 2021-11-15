let cuad;
let off = 0.2;

function setup(){
	createCanvas(1560, 740);
	background(50);
	grid = new Grid(25);
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
        this.margen = 20;
		this.x = (width/lado) - this.margen;
		this.y = (height/lado) - this.margen;
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
		let tx = 10;
		for(let i = 0; i < this.x; i++) {
			let ty = 0;
			for(let j = 0 ; j < this.y; j++){								
				this.cuad_grid[i][j].display(noise(ty, tx) * 255);
				ty += 0.1;				
			}
			tx += 0.1;
		}		
	}

}

