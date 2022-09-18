class Cuad {
    constructor(x, y, lado) {
        this.x = x;
        this.y = y;
        this.lado = lado;
        this.col;
        this.pasable = true;
    }

    display(col) {
        this.col = col;
        fill(this.col);
        rect(this.x, this.y, this.lado, this.lado);
    }
}

class Grid {

    constructor(lado) {
        this.x = width / lado;
        this.y = height / lado;
        this.lado = lado;
        this.cuad_grid = [];
        this.target = createVector(75,18);
        this.grid_gen();
        this.display_grid();        
        this.display_target();
        
    }

    get_target(){
        return this.target;
    }

    get_cuad(x, y) {
        // console.log(this.cuad_grid[x][y]);
        if (typeof this.cuad_grid[x][y] === 'undefined'){
            console.log("End");
            return;
        } else {
            return this.cuad_grid[x][y];
        }
    }

    grid_gen() {
        for (let i = 0; i < this.x; i++) {
            let col = [];
            for (let j = 0; j < this.y; j++) {
                col[j] = new Cuad(i * this.lado, j * this.lado, this.lado);
            }
            this.cuad_grid.push(col);
        }
    }

    display_grid() {
        
        for (let i = 0; i < this.x; i++) {
            for (let j = 0; j < this.y; j++) {
                this.cuad_grid[i][j].display(60);
            }
        }        
    }    

    display_target(){        
        this.cuad_grid[this.target.x][this.target.y].display(200,0,0);
    }

}