let width = 1600;
let height = 800;
let world,grid;

function setup(){
	// noStroke();
	canvas = createCanvas(width,height);
	// canvas = createCanvas(displayWidth,displayHeight);
	background(50);

	grid = new Grid(5);
	grid.grid_gen();
	// grid.renderMask();
	grid.renderNoise();
}
function draw(){	
				
}
