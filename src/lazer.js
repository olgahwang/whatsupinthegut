
class Lazer {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.vy = 10;
    this.image = loadImage("../assets/bb_object.png");
  }

  draw() {
    image(this.image, this.x-50, this.y - 20);
    //fill(255, 0, 0);
    //rect(this.x - 5, this.y - 20, 10, 40);
  }

  update() {
    this.y -= this.vy;
    if (this.y < 0) {
      return false;
    }
    return true;
  }
}
