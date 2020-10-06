let width = 1280;
let height = 720;

function setup(){
	canvas = createCanvas(width,height);
	background(50);	
	lab = new Maze(10,10);
	lab.carvePassages();
}

function draw(){
	
}

class Maze{
	constructor(ancho,alto){
		this.ancho = ancho;
		this.alto = alto;
		this.grid = this.createGrid(this.ancho,this.alto);
	}

	carvePassages(cx,ct,grid){
		let dir = ["N","S","E","O"];
		shuffle(dir,true);
		console.log(dir);
	}

	createGrid(x,y){
		let grid = new Array(x);
		for (var i = 0; i < x.length; i++) {
			grid[i] = new Array(y);
		}
		return grid;
	}
}