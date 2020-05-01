let cuad;
let off = 0.2;

function setup(){
	createCanvas(1280, 720);
	background(50);
	noStroke();

	//Grid
	// grid = new Grid(10);
	// grid.grid_gen();
	// grid.render();
	// console.log(grid.cuad_grid[0][15]);

	//Agent
	agent = new Agent(grid);
	agent.render();
}

function update(){

}

class Cuad{
	constructor(x,y,lado,altura,posX,posY){
		this.posX = posX;
		this.posY = posY;
		this.x = x;
		this.y = y;
		this.lado = lado;
		this.altura = altura;
		this.color;
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
				col[j] = new Cuad(i * this.lado,j * this.lado,this.lado,0,i,j);
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
				let c = 'hsl(205,100%,'+ noiseValue +'%)';
				let ligthness = 0;

				//Agua
				if(noiseValue < 90){
					ligthness = map(noiseValue, 0, 90, 0, 90);
					c = 'hsl(205,60%,'+ Math.round(ligthness) +'%)';
				}

				//Arena
				if(noiseValue > 90 && noiseValue < 110){
					ligthness = map(noiseValue, 90, 110, 85, 70);
					c = 'hsl(48,70%,'+ Math.round(ligthness) +'%)';
				}

				//Pasto
				if(noiseValue > 110 && noiseValue < 160){
					ligthness = map(noiseValue, 110, 160, 30, 40);
					c = 'hsl(106,80%,'+ Math.round(ligthness) +'%)';
				}

				//Montañas
				if(noiseValue > 160 && noiseValue < 190){
					ligthness = map(noiseValue, 160, 190, 60, 80);
					c = 'hsl(0,0%,'+ Math.round(ligthness) +'%)';
				}

				//Nieve
				if(noiseValue > 190){
					ligthness = map(noiseValue, 190, 255, 90, 100);
					c = 'hsl(0,0%,'+ Math.round(ligthness) +'%)';
				}

				let altura = Math.round(ligthness);
				this.cuad_grid[i][j].display(c);
				this.cuad_grid[i][j].altura = altura;
				this.cuad_grid[i][j].color = c;
				ty += 0.09;				
			}
			tx += 0.09;
		}		
	}
}

class Agent{
	constructor(grid){
		this.grid = grid;
		this.gridPosX = random();
		this.gridPosY;
	}
	render(){
		fill(200,50,50);
        rect(this.gridPosX * 20,this.gridPosY * 20,20,20);
	}
}

