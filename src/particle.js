class Particle {
  constructor(x, y) {
    this.partType = getRnd(0, 3);
    this.x = x;
    this.y = y;
    //this.img = img;
    this.sprite = createSprite(this.x, this.y);
    // console.log(this.sprite);
    this.sprite.addAnimation(
      "normal",
      "../assets/1.png",
      "../assets/2.png",
      "../assets/3.png"
    );
    this.sprite.velocity.y = getRnd(1,2);
    this.scaleVal = 1;
  }

  remove() {
    this.sprite.remove();
  }

  update() {
    //pressed = -1;
    //logic = false;
    //this.sprite.position.y += this.gravity;
    //this.yVelocity *= 0.87;
    //this.y += 10;
    /*if (this.hasBeenHit) {
      this.scaleVal = max(0, this.scaleVal - 0.1);
      if (this.scaleVal <= 0){
        this.hasExplosionCompleted = true;
      }
    }
    print (ship.x, ship.y);
    if (collideCircleCircle(this.x, this.y, 100, ship.x, shipY-50, 200)){
      logic = true;
      pressed = this.partType;
    }*/
  }

  getPositionY() {
    return this.sprite.position.y;
  }

  getPositionX() {
    return this.sprite.position.x;
  }

  draw() {
    push();
    scale(this.scaleVal);
    drawSprites();
  }
}
