let off = 0.2;

function setup(){
	createCanvas(1570,720);
	background(50);
	grid = new Grid(10);
	grid.grid_gen();
    grid.render();    
    grid.inicio();
}

function draw(){
	// grid.render();    
}

class Cuad{

	constructor(x,y,lado){
		this.x = x;
		this.y = y;
		this.lado = lado;
        this.estado = false;
	}

	display(){
        if(this.estado){
            fill("#fcba03");
        }else{
            fill("#d4d4d4");
        }		
		rect(this.x,this.y,this.lado,this.lado);
	}

    toggle_state(){
        this.estado = !this.estado;
    }
}

class Grid{	

	constructor(lado){        
		this.x = (width/lado);
		this.y = (height/lado);
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

    inicio(){
        this.cuad_grid[50][2].toggle_state();
    }

	render(){
		for(let i = 0; i < this.x; i++) {			
			for(let j = 0 ; j < this.y; j++){
				this.cuad_grid[i][j].display();

                // this.cuad_grid[i + 1][j + 1].display();
                // if(this.random_bit()){
                //     this.cuad_grid[i][j].toggle_state();
                // }
			}			
		}		
	}

    random_bit(){
        return (Math.random() < 0.5);
    }

}

