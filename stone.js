class Stone{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.stone = loadImage("sprites/stone.png");
        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
        var pos=this.body.position;
        image(this.stone,pos.x-15,pos.y,this.r,this.r);
        ellipseMode(RADIUS);
    }
}