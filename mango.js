class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.mango=loadImage("sprites/mango.png");
        this.body=Bodies.circle(x,y,r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body);
    }
    display(){
    var pos=this.body.position;
    image(this.mango,pos.x,pos.y,this.r,this.r);
    ellipseMode(RADIUS);
    }
}