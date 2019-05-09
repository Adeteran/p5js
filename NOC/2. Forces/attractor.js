class Attractor{
	constructor(){
		this.location = createVector(width/2,height/2);
		this.mass = 90;
		this.G = 1;
	}

	display(){		
		noStroke(0);
		fill(190);		
		ellipse(this.location.x,this.location.y,this.mass, this.mass);
	}

	attract(m){
		let force = p5.Vector.sub(this.location,m.position);
		let distance = force.mag();
		distance = constrain(distance,5,25);
		force.normalize();
		let strength = (this.G * this.mass * m.masa)/(distance * distance);
		force.mult(strength);
		return force;
	}
}