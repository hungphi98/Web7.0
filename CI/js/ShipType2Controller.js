class ShipType2Controller extends ShipController{
  constructor(x, y,spriteName, configs){
    configs.cooldown  = 0.5;
    configs.speed     = 400;
    super(x, y, spriteName, configs);
  }
  createBullet(direction){
    new BulletType2Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
  fire(){
      this.createBullet(new Phaser.Point(0, -1));
      this.createBullet(new Phaser.Point(1, -10));
      this.createBullet(new Phaser.Point(-1, -10));
      this.createBullet(new Phaser.Point(1, -2));
      this.createBullet(new Phaser.Point(-1, -2));
   }
  }
