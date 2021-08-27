let cuad;
let off = 0.2;

function setup(){
	createCanvas(1200, 600);
	background(50);
	
	// noStroke();
	grid = new Grid(20);
	grid.grid_gen();
	grid.borde();	
}

function draw(){
	grid.render();
}

class Cuad{
	constructor(x,y,lado){
		this.x = x;
		this.y = y;
		this.lado = lado;
		this.muro = false;
	}

	display(){
		if(this.muro){
			fill("#555");
		}else{
			fill("#fff");
		}
		
		stroke("#ccc");
		rect(this.x,this.y,this.lado,this.lado);
	}

	esMuro(){
		return this.muro;
	}

	toggleMuro(){
		this.muro = !this.muro;
	}
}

class Grid{	
	constructor(lado){
		this.x = width/lado;
		this.y = height/lado;
		this.lado = lado;
		this.cuad_grid = [];		 
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

	borde(){
		for(let i = 0; i < this.x; i++){
			this.cuad_grid[i][0].toggleMuro();
			this.cuad_grid[i][this.y - 1].toggleMuro();
		}
		for(let i = 1; i < this.y - 1; i++){
			this.cuad_grid[0][i].toggleMuro();
			this.cuad_grid[this.x - 1][i].toggleMuro();
		}
	}

	render(){		
		for(let i = 0; i < this.x; i++) {			
			for(let j = 0 ; j < this.y; j++){
				this.cuad_grid[i][j].display();				
			}
		}		
	}
}