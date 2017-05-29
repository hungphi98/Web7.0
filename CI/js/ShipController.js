class ShipController {
  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.playerGroup.create(x, y, 'assets', spriteName);
    // this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    // Nakama.game.physics.arcade.enable(this.sprite);

    this.sprite.body.collideWorldBounds = true;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);

    this.configs = configs;
    this.timeSinceLastFire = 0;
  }

  update(){
    if(Nakama.keyboard.isDown(this.configs.up)){
      this.sprite.body.velocity.y = -this.configs.speed;
    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
      this.sprite.body.velocity.y = this.configs.speed;
    }
    else{
      this.sprite.body.velocity.y = 0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
      this.sprite.body.velocity.x = -this.configs.speed;
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
      this.sprite.body.velocity.x = this.configs.speed;
    }
    else{
      this.sprite.body.velocity.x = 0;
    }

    // throtting
    this.timeSinceLastFire += Nakama.game.time.physicsElapsed;
    if(Nakama.keyboard.isDown(this.configs.fire)
        && this.timeSinceLastFire > this.configs.cooldown
      ){
      this.fire();
      this.timeSinceLastFire = 0;
    }
  }

  fire(){}
}
