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
      "../assets/circle_beam/c_beam-1.png",
      "../assets/circle_beam/c_beam-2.png",
      "../assets/circle_beam/c_beam-3.png",
      "../assets/circle_beam/c_beam-4.png",
      "../assets/circle_beam/c_beam-5.png",
      "../assets/circle_beam/c_beam-6.png",
      "../assets/circle_beam/c_beam-7.png",
      "../assets/circle_beam/c_beam-8.png",
      "../assets/circle_beam/c_beam-9.png",
    );
    this.shipMain.addAnimation('beamTr',
    "../assets/triangle_beam/t_beam-1.png",
    "../assets/triangle_beam/t_beam-2.png",
    "../assets/triangle_beam/t_beam-3.png",
    "../assets/triangle_beam/t_beam-4.png",
    "../assets/triangle_beam/t_beam-5.png",
    "../assets/triangle_beam/t_beam-6.png",
    "../assets/triangle_beam/t_beam-7.png",
    "../assets/triangle_beam/t_beam-8.png",
    "../assets/triangle_beam/t_beam-9.png",
  );
    this.shipMain.addAnimation('zap',
    "../assets/bb_zap.png"
    );
    this.shootDelay = 0;
    this.maxShootDelay = firingRate;
    this.beamTrLife = 0;
    this.beamCLife = 0;
    this.beamZLife = 0;
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

    if (this.beamTrLife == 0 && this.beamCLife == 0 && this.beamZLife == 0){
      this.shipMain.changeAnimation('normal');
    }
    if (this.shootDelay > 0) {
      this.shootDelay--;
      if (this.beamZLife > 0) this.beamZLife--;
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
        this.beamZLife = 5;
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
      }
    }

    if (keyIsDown(50)){
      if (this.beamCLife == 0 )
      {
        this.shipMain.changeAnimation('beamTr');
        this.beamTrLife = 10;
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
