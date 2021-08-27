// let width = screen.width;
// let height = screen.height;
let width = 1200;
let height = 600;
let agentes = [];
let cantidad = 20;

function setup(){
	canvas = createCanvas(width,height);
	for(let i = 0; i < cantidad; i++){
		agentes[i] = new Agente(random(width/2),random(height/2));
	}
}

function draw(){
	background(50);	
	for(let i = 0; i < agentes.length; i++){
		agentes[i].recalcular();
		agentes[i].render();
		agentes[i].llegar(createVector(mouseX,mouseY));
	}
	
}

class Agente{
	constructor(x,y){
		this.posicion = createVector(x,y);
		this.velocidad = createVector(0,0);
		this.aceleracion = createVector(0,0);
		this.r = 6.0;
		this.fuerzaMax = 8;
		this.velMax = 6;
		console.log("ok");
	}

	aplicarFuerza(fuerza){
		this.aceleracion.add(fuerza);
	}

	recalcular(){
		this.velocidad.add(this.aceleracion);
		this.velocidad.limit(this.velMax);
		this.posicion.add(this.velocidad);
		this.aceleracion.mult(0);
	}

	buscar(objetivo){
		let rumbo = p5.Vector.sub(objetivo,this.posicion);
		rumbo.normalize();
		rumbo.mult(this.velMax);
		let doblar = p5.Vector.sub(rumbo,this.velocidad);
		doblar.limit(this.fuerzaMax);
		this.aplicarFuerza(doblar);
	}

	llegar(objetivo){
		let rumbo = p5.Vector.sub(objetivo,this.posicion);
		let d = rumbo.mag();
		rumbo.normalize();
		if(d < 100){
			let m = map(d,0, 100,0,this.velMax);
			rumbo.mult(m)
		}else{
			rumbo.mult(this.velMax);
		}	

		let doblar = p5.Vector.sub(rumbo,this.velocidad);
		doblar.limit(this.fuerzaMax);
		this.aplicarFuerza(doblar);
	}

	render(){
		let theta = this.velocidad.heading() + Math.PI/2;
		fill(175);
		stroke(0);
		push();
		translate(this.posicion.x,this.posicion.y);
		rotate(theta);
		beginShape();
		vertex(0, -this.r*2);
		vertex(-this.r, this.r*2);
		vertex(this.r, this.r*2);
		endShape(CLOSE);
		pop();
	}
}