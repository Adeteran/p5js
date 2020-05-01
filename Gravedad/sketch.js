const group = [];
let width = 1280;
let height = 720;
let gravity, friction;
let att;

function setup(){		
	// att = new Attractor();
	createCanvas(width,height);
    // createCanvas(displayWidth,displayHeight);
    for(let i = 0; i < 20; i++){
        let heightGen = random(50,300);
        group.push(new Vehicle(random(width), random(height), random(10,50), createVector(0,0)));        
    }
}

function draw(){
    background(50);
	for(let i = 0; i < group.length; i++){    
    
    	let m = group[i].masa;    	
    	let c = 0.1;

    	// let force = att.attract(group[i]);
    	// group[i].applyForce(force);
    	// att.display();
    	
    	// friction = group[i].velocity.copy();
    	// friction.mult(-1);
    	// friction.normalize();
    	// friction.mult(c);
    	
    	gravity = createVector(0,1 * m);
    	
    	// group[i].applyForce(gravity);
    	// group[i].applyForce(friction);
    	for(let j = 0; j < group.length; j++){
    		if(i != j){
    			let force = group[j].attract(group[i]);
				group[i].applyForce(force);				
    		}
    	}
        
        group[i].update();        
        group[i].show();
        // group[i].checkEdges();


    }



    // att.display();
}