class ShipType3Controller extends ShipController{
  constructor(x, y,spriteName, configs){
    configs.cooldown  = 0.7;
    configs.speed     = 700;
    super(x, y, spriteName, configs);      //base class
  }
  createBullet(direction){
    new BulletType3Controller(
      this.sprite.position.x,
      this.sprite.position.y,
      {
          direction: direction
      }
    );
  }
  fire(){
     this.createBullet(new Phaser.Point(0,-1));
   }
  }
