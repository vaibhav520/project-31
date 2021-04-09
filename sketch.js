const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground, division1, division2, division3, division4, division5, division6;
var particles = [];
var pinko = [];

function preload() {

}

function setup() {
    createCanvas(800, 700);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(400, 680, 800, 20);


    //divisions:-
    division1 = new Division(50, 520, 10, 300);
    division2 = new Division(200, 520, 10, 300);
    division3 = new Division(350, 520, 10, 300);
    division4 = new Division(500, 520, 10, 300);
    division5 = new Division(650, 520, 10, 300);
    division6 = new Division(790, 520, 10, 300);

    //pinkos:-
    for (var i = 40; i <= width; i = i + 50) {
        pinko.push(new Pinkos(i, 100, 10));
    }
    for (var i = 15; i <= width - 10; i = i + 50) {
        pinko.push(new Pinkos(i, 150, 10))
    }
    for (var i = 30; i <= width - 10; i = i + 50) {
        pinko.push(new Pinkos(i, 200, 10))
    }
    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background("black");
    ground.display();
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    division5.display();
    division6.display();

    if (frameCount % 60 === 0) {
        particles.push(new Particle(random(100, 700), 10, 10));
    }
    for (var i = 0; i < particles.length; i++) {
        particles[i].display();
    }
    //display pinkos:-
    for (var i = 0; i < pinko.length; i++) {
        pinko[i].display();
    }
    drawSprites();
}