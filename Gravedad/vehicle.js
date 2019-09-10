class Vehicle{
    constructor(posx,posy,masa,vel){
        this.position = createVector(posx,posy);        
        this.velocity = vel;
        this.acceleration = createVector();             
        
        this.masa = masa;        
        this.maxspeed = 100;        
        this.G = 0.01;
        this.col = createVector(random(100,255),random(100,255),random(100,255));
    }

    show(){        
        noStroke();
        // fill(this.col.x,this.col.y,this.col.z);
        fill(220);
        rect(this.position.x,this.position.y,this.masa,this.masa);        
    }

    update(){        
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);

        this.acceleration.mult(0); //reset each cycle
    }

    checkEdges(){
        if(this.position.x > width){
            this.position.x = width;
            this.velocity.x *= -1;
        }else if(this.position.x < 0){
            this.position.x = 0;
            this.velocity.x *= -1;
        }

        if(this.position.y > height){
            this.position.y = height;
            this.velocity.y *= -1;
        }else if(this.position.y < 0){
            this.position.y = 0;
            this.velocity.y *= -1;
        }
    }

    applyForce(force){
        let f = p5.Vector.div(force,this.masa);        
        this.acceleration.add(f);
    }

    attract(m){
        let force = p5.Vector.sub(this.position,m.position);
        let distance = force.mag();
        distance = constrain(distance,5,25);
        force.normalize();
        let strength = (this.G * this.masa * m.masa)/(distance * distance);
        force.mult(strength);
        return force;
    }
}
