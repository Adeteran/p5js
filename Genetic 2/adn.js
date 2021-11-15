
class DNA {
    constructor(grid, origin, target) {
        // The genetic sequence
        this.origin = origin;
        this.target = target;
        this.grid = grid;
        this.genes = [];
        this.fitness = 0;

        for (let i = 0; i < 100; i++) {
            let num = parseInt(random(1, 5));
            this.genes[i] = num;
        }
        console.log(this.origin.y);
        this.agente = new Agente(this.grid, this.origin.x, this.origin.y, "Green", this.genes);
    }

    display() {
        this.agente.display();
    }

    // Fitness function (returns floating point % of "correct" characters)
    calcFitness(target) {
        // let pos = this.grid.get_cuad(px,py);
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