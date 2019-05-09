const group = [];

function setup(){  
    createCanvas(displayWidth,displayHeight);
    for(let i = 0; i < 20; i++){
        group.push(new Vehicle(random(width),random(height)));
    }
    
}

function draw(){  
    background(50);
    for (let vehicle of group){
        vehicle.update();        
        vehicle.show();        
    }
}