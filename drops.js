class Drop {
    constructor(x,y){
        var options = {
            isStatic: false,
        }
      
        this.umbrella = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.umbrella)
        //load Image for BestMan
        
    }

    display(){
        var pos = this.umbrella.position;
        fill ("blue")
        ellipseMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
    updatey(){
        if(this.umbrella.position>height){
             Matter.Body.setPosition(this.umbrella,{x:random(0,400),y:random(0,400)})
        }
    }
}
