class Cuad{
	constructor(x,y,lado){
		this.x = x;
		this.y = y;
		this.lado = lado;
		this.col;
		this.pasable = true;
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
		this.grid_gen();
		this.display_grid();
	}

    get_cuad(x,y){
		if(typeof this.cuad_grid[x][y] !== 'undefined'){
        	return this.cuad_grid[x][y];
		}else{
			return;
		}
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

    display_grid(){
        for(let i = 0; i < this.x; i++) {
			for(let j = 0 ; j < this.y; j++){
                let color_random = random(200) + 55;                
                this.cuad_grid[i][j].display(60);
            }
        }        
    }
}