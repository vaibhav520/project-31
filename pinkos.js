class Pinkos {
    constructor(x, y, r) {
        var options = {
            restituion: 1,
            friction: 0,
            isStatic: true
        }
        this.body = Bodies.circle(x, y, r, options);
        this.r = r;
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle)
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r)
        pop();
    }
}