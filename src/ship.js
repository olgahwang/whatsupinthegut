class Ship {
  constructor(shipImage, x, y) {
    this.x = x;
    this.y = y;
    this.trashNum = 0;
    this.shipMain = createSprite(this.x, this.y);
    this.shipMain.addAnimation('normal',
      "../assets/char2.png"
    );
    this.shipMain.addAnimation('beamC',
      "../assets/new/claw-triangle.png"
    );
    this.shipMain.addAnimation('beamTr',
      "../assets/new/claw-circle.png"
    );
    this.shipMain.addAnimation('zap',
    "../assets/new/claw-square.png"
    );
    this.shootDelay = 0;
    this.maxShootDelay = firingRate;
    this.beamTrLife = 0;
    this.beamCLife = 0;
    this.sprite = this.shipMain;
    this.easing = 0.05;
  }

  draw(a) {
    if (this.beamTrLife > 0){
      this.beamTrLife--;
    }

    if (this.beamCLife > 0){
      this.beamCLife--;
    }

    if (this.beamTrLife == 0 && this.beamCLife == 0){
      this.shipMain.changeAnimation('normal');
    }
    if (this.shootDelay > 0) {
      this.shootDelay--;
    }

    push();
    if (keyIsDown(LEFT_ARROW)) {
      if (this.x >= innerWidth*0.15) {
        this.x -= 10;
      }
    }

    if (keyIsDown(RIGHT_ARROW)) {
      if (this.x <= innerWidth-innerWidth*0.15) {
        this.x += 10;
      }
    }

    if (keyIsDown(51)) {
      if (this.shootDelay === 0) {
        this.shipMain.changeAnimation('zap');
        this.shootDelay = this.maxShootDelay;
        lazers.push(new Lazer(this.x+35, this.y));
        zapSound.play();
      }
    }

    if (keyIsDown(49)){
      if (this.beamTrLife == 0 )
      {
        this.shipMain.changeAnimation('beamC');
        this.beamCLife = 10;
        beamSound.play();
      }
    }

    if (keyIsDown(50)){
      if (this.beamCLife == 0 )
      {
        this.shipMain.changeAnimation('beamTr');
        this.beamTrLife = 10;
        beamSound.play();
      }
    }
    /*if (a > 0) {
      //console.log('SENSOR1: ' + a + ' - X: ' + this.x);
      if (this.x >= 5) {
        this.x -= 10;
      }
    }

    if (a < 0) {
      //console.log('SENSOR2: ' + a + ' - X: ' + this.x);
      if (this.x <= (innerWidth - 60)) {
        this.x += 10;
      }
  }*/
  let shipW = 70;
  let shipH = 130;
  this.shipMain.position.x = this.x;
  this.shipMain.position.y = this.y;
  //image(shipImage, this.x, this.y, shipW, shipH);
  drawSprites();
  pop();
  }

  createLazer(){
    if (this.shootDelay === 0) {
      this.shootDelay = this.maxShootDelay;
      lazers.push(new Lazer(this.x+35, this.y));
    }
  }

  checkOverlap(x){
    if (this.shipMain.overlap(x)){
      return true;
    }
    else return false;
  }
}
