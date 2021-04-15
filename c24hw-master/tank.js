class tank {
    constructor(x, y) {
      var options = {
        isStatic:false
      }
      this.body = Bodies.rectangle(x, y, 200, 40, options);
      this.width=200;
      this.height=40;

      this.body = Bodies.circle(x, y, 40, options);
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("grey");
        strokeWeight(4);
        fill("brown");
        rect(0, 0, this.width, this.height);
        pop();

        push();
        fill("grey");
        ellipseMode(CENTER);
        ellipse(this.body.position.x, this.body.position.y+30);
        pop();

    }
  };
  