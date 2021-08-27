class Agente{
    constructor(grid,posX,posY,col,gen){
        this.gen = gen;
        this.pos = createVector(posX,posY);
        this.grid = grid        
        this.col = col
        this.tick = 0;        
    }

    display(){
        let px,py;
        let dir = this.gen[this.tick];        

        if(this.tick >= this.gen.length){            
            return "End";
        } 

        if(dir == 1) {
            px = this.pos.x;
            py = this.pos.y + 1;
        }
        if(dir == 2) {
            px = this.pos.x + 1;
            py = this.pos.y;
        }
        if(dir == 3) {
            px = this.pos.x;
            py = this.pos.y - 1
        }
        if(dir == 4) {
            px = this.pos.x - 1;
            py = this.pos.y;
        }

        if(typeof this.grid.get_cuad(px,py) !== 'undefined'){
            let cuad = this.grid.get_cuad(px,py);
            cuad.display(this.col);
            this.pos.x = px;
            this.pos.y = py;
            if(this.tick < this.gen.length){
                this.tick++;
            }
        }else{
            return;
        }
    }
}