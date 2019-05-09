let width = 1560;
let height = 740;
let pol1,pol2,pol3;
let col1,col2,col3;

function setup(){		
	canvas = createCanvas(width,height);	
	background(50);

	pol1 = new Polar(width/2,height/2,80,20,212,0.020);
	pol2 = new Polar(width/2,height/2,110,20,41,0.025);
	pol3 = new Polar(width/2,height/2,140,20,106,0.030);
}

function draw(){				
	pol1.drawCircle();
	pol2.drawCircle();
	pol3.drawCircle();
}

class Polar{
	constructor(posX,posY,dist,diam,hue,countFactor){
		this.posX = posX;
		this.posY = posY;
		this.dist = dist;
		this.diam = diam;
		this.hue = hue;
		this.countFactor = countFactor;
		this.count = 0;
	}

	drawCircle(){		
		let colVariable = sin(this.count*0.5) * 10;
		let m = map(colVariable,-10,10,0,100);		
		let c = 'hsl('+ this.hue +', '+ m +'%, 50%)';		
		fill(color(c));
		noStroke();

		push();
		translate(this.posX,this.posY);
		rotate(PI/3.0 * this.count);
		ellipse(this.dist,0,this.diam,this.diam);		
		pop();
		
		this.count += this.countFactor;
	}
	
}