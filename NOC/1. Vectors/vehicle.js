class Vehicle{
    constructor(posx,posy){
        this.position = createVector(posx,posy);
        this.velocity = p5.Vector.random2D();        
        this.acceleration = createVector();
        this.desired = createVector();
        this.steer = createVector();
        this.target = createVector(0,height);
        this.r = 6;
        this.maxspeed = 4;
        this.maxforce = 0.1;
    }

    show(){
        strokeWeight(16);
        stroke(255);
        rect(this.position.x,this.position.y,5,5);        
    }

    update(){
        let mouse = createVector(mouseX,mouseY);        
        let dir = p5.Vector.sub(mouse,this.position);
        dir.normalize();
        dir.mult(0.5);
        this.acceleration = dir;

        
        this.velocity.add(this.acceleration);
        this.velocity.limit(this.maxspeed);
        this.position.add(this.velocity);

        this.acceleration.mult(0); //reset each cycle
    }
}
