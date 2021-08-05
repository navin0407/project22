class rope{
	constructor(body1,body2, pointA, pointB)
	{

	     this.pointA=pointA
		 this.pointB=pointB

		 var options={
			     bodyA:body1,
				 bodyB:body2,
				 pointB:{x:this.pointA,y:this.pointB}
		 }
         this.rope=Constraint.create(options)
		 world.add(world,this.rope)
	}


    display()
	{
		var pointA=this.rope.bodyA.position;
		var pointB=this.rope.bodyB.position;

		strokeWeight(2);
		ListeningStateChangedEvent(pointA.x,pointB.x+pointA.cointB.y+this.positionB);
	}

}
