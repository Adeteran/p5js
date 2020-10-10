// let width = screen.width;
// let height = screen.height;
let width = 1560;
let height = 740;
let cantidad = 24;
let velocidad = 1;


function setup(){	
	canvas = createCanvas(width,height);
	filas = new Filas(width,cantidad);
	filas.gen();
}

function draw(){

	background(50);
	fill(200,100,54);	
	filas.draw(velocidad);	
}

window.onresize = function(){
	canvas.size(windowWidth,windowHeight);
}

class Barra {
	constructor(posX,posY,ancho){		
		this.ancho = ancho;
		this.centerX = posX;
		this.centerY = posY;		
	}

	draw(n){				
		fill(180);
		push();
		
		translate(this.centerX,this.centerY);
		rect(0,0,this.ancho,n * -height);		

		pop();
	}
}

class Filas{
	constructor(ancho_ventana,cantidad){
		this.ancho = ancho_ventana / cantidad;
		this.cantidad = cantidad;
		this.filas = [];
		this.t = 10;
	}

	gen(){
		for(let i = 0; i < this.cantidad; i++){
			filas[i] = new Barra(i * this.ancho,height,this.ancho);
		}
	}

	draw(rango){
		for(let i = 0; i < this.cantidad; i++){
			filas[i].draw(noise(this.t+i*0.1));
			this.t += rango * 0.0001;
		}	
	}


}