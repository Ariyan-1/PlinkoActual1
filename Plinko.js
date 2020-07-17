class Plinko {
    constructor(x,y) {
        var options = {
            restitution:1,
            friction:1,
            isStatic:true
        }
        this.x = x;
        this.y = y;
        this.r = 10;
        this.body=Bodies.circle(x,y,this.r,options);
        
        World.add(world,this.body);
    }

    display() {
        var pose = this.body.position; 
        var angle = this.body.angle;

        push();
        translate(pose.x,pose.y);
        rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        pop();
    }
}