class Iron {
    constructor(x, y, width, height) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':30
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('orange')
      fill('pink')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };
  