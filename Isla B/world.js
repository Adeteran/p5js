class Cuad{
	constructor(x,y,lado){
		this.x = x;
		this.y = y;
		this.lado = lado;
		this.col;		
	}
	display(col){
		this.col = col;		
		fill(this.col);
		rect(this.x,this.y,this.lado,this.lado);
	}
}

class Grid{	

	constructor(lado){
		this.x = width/lado;
		this.y = height/lado;
		this.lado = lado;
		this.cuad_grid = [];
		this.noise_grid = [];
		this.random_grid = [];
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

	renderNoise(){
		let tx = 0;		
		for(let i = 0; i < this.x; i++) {
			let ty = 0;
			for(let j = 0 ; j < this.y; j++){
				let noiseValue = noise(tx * 1,ty * 1) * 255;
				let grass = map(noiseValue,0,255,10,50);
				if(noiseValue < 90){
					let c = 'hsl(205,100%, '+ noiseValue +'%)';							
					noiseValue = c;
				}
				if(noiseValue > 90 && noiseValue < 110){
					let c = 'hsl(48,70%,73%)';							
					noiseValue = c;
				}
				if(noiseValue > 110 && noiseValue < 160){
					let c = 'hsl(106,80%,'+ grass +'%)';							
					noiseValue = c;
				}
				this.cuad_grid[i][j].display(noiseValue);
				// noise_grid.push(this.cuad_grid[i][j]);
				// noise_grid[i][j].display(noiseValue);
				ty += 0.04;				
			}
			tx += 0.04;
		}		
	}

	renderMask(){
		for(let i = 0; i < this.x; i++) {			
			for(let j = 0 ; j < this.y; j++){
				this.cuad_grid[i][j].display(random(200,255));
				// this.random_grid.push(this.cuad_grid[i][j]);
				// this.random_grid[i][j].display(random(200,255));				
			}
		}
	}

	

}