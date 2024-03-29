let cuad;
let off = 0.2;
let fuego;
let listaParticulas = [];

function setup(){    
	createCanvas(1280, 720);    
    fuego = new Fuego(width/2, 3*(height/4),80,50);    
}

function draw(){
    background(30);
    fuego.correr();    
}

class Fuego{
    constructor(x,y,diam,total){
        this.posX = x;
        this.posY = y;
        this.tam = diam;
        this.total = total;
        // listaParticulas.length = total;
    }

    correr(){
        this.base();        
        listaParticulas.push(
            new Particula(
                createVector(this.posX,this.posY),
                createVector(random(-0.01,0.01),random(0,-0.1)),
                255,
                random(20,80)
            )
        );
        this.particulas();                
        console.log(listaParticulas.length);
    }

    particulas(){        
        for(let i = 0; i < listaParticulas.length; i++){
            listaParticulas[i].correr();
            if(listaParticulas[i].isDead()){
                listaParticulas.splice(i,1);
            }
        }           
    }

    base(){
        fill(200);
        ellipse(this.posX,this.posY,this.tam,this.tam);
    }
}

class Particula{
    constructor(pos,acc,life,diam){
        this.pos = pos;
        this.vel = createVector(0,0);
        this.acc = acc;        
        this.lifespan = life;
        this.diam = diam;
    }

    correr(){
        this.update();
        this.display();
    }

    update(){
        this.vel.add(this.acc);
        this.pos.add(this.vel);
        this.lifespan -= 2.0;
        this.diam -= 0.5;
    }

    display(){
        noStroke();        
        fill(120,this.lifespan);
        ellipse(this.pos.x,this.pos.y,this.diam,this.diam);
    }

    isDead(){
        if(this.lifespan < 0.0){
            return true;
        }else{
            return false;
        }
    }
}