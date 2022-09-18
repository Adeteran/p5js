let width = 1200;
let height = 600;
let agente; 

function setup(){	
	canvas = createCanvas(width,height,"WEBGL");
    agente = new Agente(600,300);
}

function draw(){
    background(50);
    agente.recalcular();
    agente.render();
    agente.llegar(createVector(mouseX,mouseY));
}

function colorBase() {
    return color(random(120) + 100,random(120) + 100,random(120) + 100);
}

class Agente{
    constructor(x,y) {
        this.color = colorBase();        
        this.posicion = createVector(x,y);
        this.velocidad = createVector(0,0);
        this.aceleracion = createVector(0,0);
        this.r = 6.0;
        this.fuerzaMax = 8;
        this.velMax = 6;
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
		fill(this.color);
        noStroke();
		push();
		translate(this.posicion.x,this.posicion.y);
		rotate(theta);		
        triangle(-10,20,0,-20,10,20);
        pop();
	}
}