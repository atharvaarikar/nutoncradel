class rope{
    constructor(body1,body2,pofx){
        var opp={
            bodyA:body1,
            bodyB:body2,
            length:100
           

        }     
        this.a=Matter.Constraint.create(opp);
        World.add(world,this.a);
        this.p=pofx

    }

    display(){
        var po=this.a.bodyA.position;
        var pos=this.a.bodyB.position;

        line(po.x+this.p,po.y,pos.x,pos.y);
    }
   
}