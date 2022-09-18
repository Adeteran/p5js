let width = 1280;
let height = 720;
let cantidad = 5;
let agents = [];

function setup() {
    canvas = createCanvas(width, height);
    for (let i = 0; i < cantidad; i++) {
        agents.push(new Agent(i,agents));
    }
}

function draw() {
    background(50);
    for (let i = 0; i < cantidad; i++) {
        agents[i].calc();
    }
}

class Agent {
    constructor(id,agents) {
        this.x = 0;
        this.y = 0;
        this.diam = 50;
        this.factVel = 3;
        this.position = createVector(random(width) + (this.diam / 2), random(height - this.diam) + this.diam / 2);
        this.velocity = p5.Vector.random2D().mult(random(this.factVel));
        this.acceleration = p5.Vector.random2D();
        this.id = id;
        this.otros = agents
    }

    drawAgent() {
        noStroke();
        this.color();
        ellipse(this.position.x, this.position.y, this.diam, this.diam);
    }

    calc() {
        this.edges();
        this.collide();
        this.position.add(this.velocity);
        this.velocity.add(this.acceleration);
        this.drawAgent();
        
        // console.log(" ");
        // console.log("Pos: " + this.position.x + ", " + this.position.y);
        // console.log("Vel: " + this.velocity.x + ", " + this.velocity.y);
        this.acceleration.mult(0); //reset each cycle
        
    }

    edges() {
        if (this.position.x + (this.diam / 2) >= width) {
            this.velocity.x *= -1;
        }
        if (this.position.x - (this.diam / 2) <= 0) {
            this.velocity.x *= -1;
        }

        if (this.position.y + (this.diam / 2) >= height) {
            this.velocity.y *= -1;
        }
        if (this.position.y - (this.diam / 2) <= 0) {
            this.velocity.y *= -1;
        }
    }

    collide() {
        for (let i = this.id + 1; i < cantidad; i++) {
            // console.log(others[i]);
            let dx = this.otros[i].position.x - this.position.x;
            let dy = this.otros[i].position.y - this.position.y;
            
            let distance = sqrt(dx * dx + dy * dy);
            let minDist = this.otros[i].diam / 2 + this.diam / 2;
            //   console.log(distance);
            //console.log(minDist);
            if (distance < minDist) {
                //console.log("2");
                let angle = atan2(dy, dx);
                
                let targetX = this.x + cos(angle) * minDist;
                let targetY = this.y + sin(angle) * minDist;
                
                let ax = (targetX - this.otros[i].x) * 0.01;
                let ay = (targetY - this.otros[i].y) * 0.01;
                
                this.velocity.x -= ax;
                this.velocity.y -= ay;

                this.otros[i].velocity.x += ax;
                this.otros[i].velocity.y += ay;
            }
        }
    }

    color() {
        let lento = color(4, 48, 17);
        let rapido = color(20, 199, 73);

        let vel = this.velocity.mag().toFixed(2)
        let factor = map(vel, 0, this.factVel, 0, 1);

        fill(lerpColor(lento, rapido, factor));
    }
}