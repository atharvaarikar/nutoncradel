class ball{
    constructor(x,y){
       
        var opp={
            density:2,
            fritionAir:1
        }
    
        this.ba=Bodies.rectangle(x,y,10,10,opp);
        World.add(world,this.ba);
        
    }

    display(){
        var pos=this.ba.position;
        rectMode(CENTER);
      
       rect(pos.x,pos.y,10,10);
    }
}
