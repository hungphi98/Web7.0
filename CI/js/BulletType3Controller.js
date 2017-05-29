class BulletType3Controller extends BulletController{
  constructor(x, y, configs){
    configs.bulletSpeed = 1100;
    super(x, y, 'BulletType3.png', configs);
    this.sprite.anchor = new Phaser.Point(0.5 , 1);
  }
}
