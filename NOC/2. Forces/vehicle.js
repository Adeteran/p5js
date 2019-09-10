class Vehicle{
    constructor(posx,posy,masa){
        this.position = createVector(posx,posy);
        // this.velocity = p5.Vector.random2D();
        this.velocity = createVector(10,0);
        this.acceleration = createVector();
        this.desired = createVector();
        this.steer = createVector();
        this.target = createVector(0,height);
        this.masa = masa;
        this.r = 10;
        this.maxspeed = 6;
        this.maxforce = 0.1;
        this.G = 0.01;
    }

    show(){
        strokeWeight(16);
        stroke(255);
        ellipse(this.position.x,this.position.y,this.r,this.r);        
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
