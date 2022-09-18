const group = [];
let width = 1280;
let height = 720;
let gravity, friction;
let att;

function setup(){
	att = new Attractor();
	createCanvas(width,height);    
    for(let i = 0; i < 80; i++){
        group.push(new Vehicle(width/2,random(height/2),random(3,10)));
    }
}

function draw(){	
	background(50);
	for(let i = 0; i < group.length; i++){    
    	let m = group[i].masa;    	
    	let c = 0.1;

    	let force = att.attract(group[i]);
    	group[i].applyForce(force);
    	att.display();
		gravity = createVector(0,1 * m);
		    	
    	for(let j = 0; j < group.length; j++){
    		if(i != j){
    			let force = group[j].attract(group[i]);
    			group[i].applyForce(force);
    		}
    	}
        
        group[i].update();        
        group[i].show();
    }
    att.display();
}