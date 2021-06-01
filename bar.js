class Bar{
    constructor(x,y,w,h) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,w,h,options);
      this.w = w; 
      this.h = h;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("white");
    rect(pos.x, pos.y, this.w,this.h);

    bar=createSprite(400,100,80,15)



   
    if (run.isTouching(obstacle)){
      bar.width=bar.width-6
    }
    if(run.isTouching(Zombie)){
      bar.width=bar.width-5
    }
    if(run.isTouching(meat)){
      bar.width=80
    }
    
    
    if(run.isTouching(fox)){
  
      bar.width=bar.width-5
    }
    }
    }

