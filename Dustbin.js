class Dustbin {
    constructor(){

        var opt = {
            isStatic: true,
            restitution: 0.3,
            friction: 0.5,
            density: 1.2

        }
      
        this.binL = Bodies.rectangle(820,565,15,150,opt)
        this.binR = Bodies.rectangle(1000,565,15,150,opt)
        this.binB = Bodies.rectangle(910,636,200,15,opt)
        //this.x=x;
        //this.y = y;
        //this.width = w;
       //this.height = h;

        World.add(world, this.binL);
        World.add(world, this.binR);
        World.add(world, this.binB);
    }

    display(){
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(820,555,15,150);
        rect(1000,555,15,150);
        rect(910,636,200,15);

    }
    
    /*display(){
        
        var leftpos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(leftpos.x,leftpos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(820,550,15,150);
        pop();
               
        
        var rightpos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(rightpos.x,rightpos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(1000,550,15,150);
        pop();
        
       
        var bottompos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(bottompos.x,leftpos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(3);
        fill("white");
        rect(910,620,200,15);
        pop();

    }*/
}