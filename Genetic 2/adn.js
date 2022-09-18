
function genBase() {
    let gen = [];
    for (let i = 0; i < 200; i++) {
        let num = parseInt(random(1, 5));
        gen[i] = num;
    }
    return gen;
}

function colorBase() {
    return color(random(255),random(255),random(255));
}

class DNA {
    constructor(grid, origin, target) {
        this.origin = origin;
        this.target = target;
        this.grid = grid;        
        this.fitness = 0;
        this.genes = genBase();
        this.color = colorBase();
        this.agente = new Agente(this.grid, this.origin.x, this.origin.y, this.color, this.genes);
    }

    display() {
        this.agente.display();
    }

    complete(){
        return this.agente.get_complete();
    }

    // Fitness function (returns floating point % of "correct" characters)
    calcFitness() {        
        let pos = this.agente.get_pos();
        let target = this.grid.get_target();
        console.log(pos.dist(target));
        
        
        // let score = 0;
        // for (let i = 0; i < this.genes.length; i++) {
        //     if (this.genes[i] == target.charAt(i)) {
        //     score++;
        //     }
        // }
        // this.fitness = score / target.length;
    }

    // Crossover
    crossover(partner) {
        // A new child
        let child = new DNA(this.genes.length);

        let midpoint = floor(random(this.genes.length)); // Pick a midpoint

        // Half from one, half from the other
        for (let i = 0; i < this.genes.length; i++) {
            if (i > midpoint) child.genes[i] = this.genes[i];
            else child.genes[i] = partner.genes[i];
        }
        return child;
    }

    // Based on a mutation probability, picks a new random character
    mutate(mutationRate) {
        for (let i = 0; i < this.genes.length; i++) {
            if (random(1) < mutationRate) {
                this.genes[i] = parseInt(random(1, 5));
            }
        }
    }
}