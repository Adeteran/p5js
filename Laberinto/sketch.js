let width = 1200;
let height = 600;

function setup(){	
	canvas = createCanvas(width,height);	
	background(190);
	grid = new Grid(20);
	grid.grid_gen();
	grid.margenGeneral();	
	grid.laberinto(3,3);
	grid.render();
	grid.inicio_fin();	
}

class Cuad{
	constructor(x,y,lado){
		this.lado = lado;
		this.x = x;
		this.y = y;
		this.e = true;
		this.s = true;
		this.visitado = false;
		this.resuelto = false;
	}

	display(){
		strokeWeight(2);
		stroke(20);
		if(this.e){
			line(this.x + this.lado,this.y,this.x + this.lado,this.y + this.lado); //E
		}
		if(this.s){
			line(this.x,this.y + this.lado,this.x + this.lado,this.y + this.lado); //S
		}
		if(this.resuelto){
			rect(this.x + this.lado,this.y + this.lado,5,5);
		}
	}

	toggleE(){
		this.e = !this.e;
	}

	toggleS(){
		this.s = !this.s;
	}

	toggleVisita(){
		this.visitado = !this.visitado;
	}

	toggleSolucion(){
		this.resuelto = !this.resuelto;
	}

	inicio(){
		noStroke();
		fill(40,40,200);
		ellipse(this.x + this.lado/2,this.y + this.lado/2,this.lado - (this.lado/4));
	}

	fin(){
		noStroke();
		fill(40,150,40);
		ellipse(this.x + this.lado/2,this.y + this.lado/2,this.lado - (this.lado/4));
	}
}

class Grid{	

	constructor(lado){
		this.x = width/lado;
		this.y = height/lado;
		this.lado = lado;
		this.cuad_grid = [];
		this.inicio = [];
		this.fin = [];
		this.stack = [];
		this.listaSolucion = [];
		this.ix;
		this.iy; 
		this.fx;
		this.fy;		
	}

	grid_gen(){		
		for(let i = 0; i < this.x; i++){
			let col = [];
			for(let j = 0; j < this.y; j++){
				col[j] = new Cuad(i * this.lado,j * this.lado,this.lado);
			}
			this.cuad_grid.push(col);
		}
	}

	render(){		
		for(let i = 0; i < this.x; i++) {			
			for(let j = 0 ; j < this.y; j++){
				let color = '#dedede';				
				this.cuad_grid[i][j].display();
			}
		}		
	}

	laberinto(cx,cy){
		this.cuad_grid[cx][cy].toggleVisita();
		let nx,ny;
		let dir = ["N","E","S","O"];
		shuffle(dir,true);
		for(let i = 0; i < dir.length; i++){			
			if(dir[i] == "N"){
				nx = cx;
				ny = cy - 1;
			}
			if(dir[i] == "E"){
				nx = cx + 1;
				ny = cy;			
			}
			if(dir[i] == "S"){
				nx = cx;
				ny = cy + 1;
			}
	
			if(dir[i] == "O"){
				nx = cx - 1;
				ny = cy;
			}			
			if(nx >= 0 && nx < this.x && ny >= 0 && ny < this.y && this.cuad_grid[nx][ny].visitado == false){
				if(dir[i] == "N"){
					this.cuad_grid[nx][ny].toggleS();
				}
				if(dir[i] == "E"){
					this.cuad_grid[nx-1][ny].toggleE();
				}
				if(dir[i] == "S"){
					this.cuad_grid[nx][ny-1].toggleS();
				}		
				if(dir[i] == "O"){
					this.cuad_grid[nx][ny].toggleE();
				}
				this.laberinto(nx,ny);
			}
		}
	}

	margenGeneral(){
		strokeWeight(8);
		stroke(20);
		line(0,0,width,0);
		line(0,0,0,height);
		line(width,0,width,height);
		line(0,height,width,height);
	}

	change(x,y,tipo){
		if(tipo == "e"){
			this.cuad_grid[x][y].toggleE();
		}
		if(tipo == "s"){
			this.cuad_grid[x][y].toggleS();
		}
	}

	toggleE(x,y){
		this.cuad_grid[x][y].toggleE();
	}

	toggleS(x,y){
		this.cuad_grid[x][y].toggleS();
	}

	inicio_fin(){
		this.ix = parseInt(random(2));
		this.iy = parseInt(random(2));
		this.fx = parseInt(random(this.x - 2,this.x));
		this.fy = parseInt(random(this.y - 2,this.y));
		this.inicio = [this.ix,this.iy];
		this.stack.push(this.cuad_grid[this.inicio[0]][this.inicio[1]]);		
		this.fin = [this.fx,this.fy];
		this.cuad_grid[this.ix][this.iy].inicio();
		this.cuad_grid[this.fx][this.fy].fin();

		this.solucion(this.ix,this.iy);
		
		this.renderSolucion();
	}

	solucion(cx,cy){
		//console.log("(" + cx + "," + cy + ") | (" + this.fx + "," + this.fy + ")");

		if(cx == this.fx && cy == this.fy){
			console.log("Fin");
			return true;
		}

		if(this.cuad_grid[cx][cy].resuelto == true){
			return false;
		}

		this.cuad_grid[cx][cy].toggleSolucion;

		let nx,ny;
		let dir = ["N","E","S","O"];
		for(let i = 0; i < dir.length; i++){

			if(dir[i] == "N"){
				nx = cx;
				ny = cy - 1;
			}
			if(dir[i] == "E"){
				nx = cx + 1;
				ny = cy;
			}
			if(dir[i] == "S"){
				nx = cx;
				ny = cy + 1;
			}
			if(dir[i] == "O"){
				nx = cx - 1;
				ny = cy;
			}

			if(nx >= 0 && nx < this.x && ny >= 0 && ny < this.y){
				if(this.solucion(nx, ny)){
					this.listaSolucion.push(this.cuad_grid[cx][cy]);
					return true;
				}
					
				if(this.solucion(nx, ny)){
					this.listaSolucion.push(this.cuad_grid[cx][cy]);
					return true;
				}
				
				if(this.solucion(nx, ny)){
					this.listaSolucion.push(this.cuad_grid[cx][cy]);
					return true;
				}
				
				if(this.solucion(cx, ny)){
					this.listaSolucion.push(this.cuad_grid[cx][cy]);
					return true;
				}
			}
			return false;
		}
		
		
		
		// let nx,ny;		
		// let dir = ["N","E","S","O"];
		// // shuffle(dir,true);
		// for(let i = 0; i < dir.length; i++){			

		// 	if(dir[i] == "N"){
		// 		nx = cx;
		// 		ny = cy - 1;
		// 	}
		// 	if(dir[i] == "E"){
		// 		nx = cx + 1;
		// 		ny = cy;
		// 	}
		// 	if(dir[i] == "S"){
		// 		nx = cx;
		// 		ny = cy + 1;
		// 	}
		// 	if(dir[i] == "O"){
		// 		nx = cx - 1;
		// 		ny = cy;
		// 	}
			
		// 	if(nx >= 0 && nx < this.x && ny >= 0 && ny < this.y && this.cuad_grid[nx][ny].resuelto === false){
		// 		if(dir[i] == "N"){					
		// 			if(this.cuad_grid[nx][ny].s === false){					
		// 				this.stack.push(this.cuad_grid[nx][ny]);
		// 			}else{
		// 				this.stack.pop();
		// 			}					
		// 		}
		// 		if(dir[i] == "E"){
		// 			if(this.cuad_grid[cx][cy].e === false){
		// 				this.stack.push(this.cuad_grid[nx][ny]);
		// 			}else{
		// 				this.stack.pop();
		// 			}
		// 		}
		// 		if(dir[i] == "S"){					
		// 			if(this.cuad_grid[cx][cy].s === false){
		// 				this.stack.push(this.cuad_grid[nx][ny]);
		// 			}else{
		// 				this.stack.pop();
		// 			}
		// 		}
		// 		if(dir[i] == "O"){
		// 			if(this.cuad_grid[nx][ny].e === false){
		// 				this.stack.push(this.cuad_grid[nx][ny]);
		// 			}else{
		// 				this.stack.pop();
		// 			}
		// 		}
		// 		return false;
		// 		// this.solucion(nx,ny);
		// 	}
		// }
	}

	renderSolucion(){
		console.log(this.listaSolucion);
		for(let i = 1; i < this.listaSolucion.length; i++){
			strokeWeight(4);
			stroke(200,40,40);			
			line(this.listaSolucion[i].x + this.lado/2,this.listaSolucion[i].y + this.lado/2,this.listaSolucion[i - 1].x + this.lado/2,this.listaSolucion[i - 1].y + this.lado/2);
		}		
	}
}