class Stone{
	constructor(x,y,)
	{
		var options = {
			'density':12,
			'friction': 0.8,
			'restitution':0.9
		  };
	// assign options to the rubber ball
	this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 150;
    this.height = 40;
    World.add(world, this.body);

	}
	display()
	{
		push();
		//translate(pos.x, pos.y);
		strokeWeight(3);
		stroke('white')
		fill('blue')
		rectMode(CENTER)
		rect(0, 0, this.width, this.height);
		pop();
	}

}
