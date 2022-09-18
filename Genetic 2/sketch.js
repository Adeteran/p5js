/*
Algoritmo Evolutivo
Etapas.

1. Crear una población N elementos con información al azar.
2. Calcular el fitness de cada elemento de la población (De acuerdo a un objetivo especifico).
3. Reproducción
    a. Seleccionar 2 elementos con mejor fitness.
    b. Crear nuevo elemento 
        1. Cruza
        2. Mutación
    b. Agregar a nueva población.
4. Nueva población a etapa 1 reemplazando información al azar por la de la generación anterior.

*/

let width = 1580;
let height = 740;

let target;
let popmax;
let mutationRate;
let population;

let agentes = [];

let grid;

function setup() {
    canvas = createCanvas(width, height);

    pobmax = 1;
    mutationRate = 0.01;
    grid = new Grid(20);
    pob = new Poblacion(mutationRate, pobmax, grid);

    // for(let i = 0; i < popmax; i++){
    //   agentes[i] = new Agente(grid,40,20,color(random(255), random(204), random(255)));
    // }
}

function draw() {
    pob.display();
    // for(let i = 0; i < popmax; i++){
    //   agentes[i].display();
    // }

    // if(agente.display() == "End"){
    //   noLoop();
    // }
    // background(50);
    // // Generate mating pool
    // population.naturalSelection();
    // //Create next generation
    // population.generate();
    // // Calculate fitness
    // population.calcFitness();

    // population.evaluate();

    // // If we found the target phrase, stop
    // if (population.isFinished()) {
    //   //println(millis()/1000.0);
    //   noLoop();
    // }
}
