function setup (){
    createCanvas(400,400);
    let boundary = new Rectangle(200,200,200,200);    
    let qt = new QuadTree(boundary);
    console.log(qt);
}