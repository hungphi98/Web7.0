class ShipController {

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    Nakama.game.physics.arcade.enable(this.sprite);
    this.sprite.body.collideWorldBounds=true;
    this.configs = configs;
    this.timeSinceLastFire=0;
    this.sprite.anchor = new Phaser.Point(0.5,0.5);
  }

  fire(spriteName){
      Nakama.bulletList.push (new BulletController(this.sprite.position.x,this.sprite.position.y, spriteName));


  }

  update(spriteName){
    if(Nakama.keyboard.isDown(this.configs.up)){
        this.sprite.body.velocity.y = -Nakama.configs.PLAYER_SPEED;
     // this.sprite.position.y = Math.max(this.sprite.position.y - Nakama.configs.PLAYER_SPEED, 0);

    }
    else if(Nakama.keyboard.isDown(this.configs.down)){
        this.sprite.body.velocity.y = Nakama.configs.PLAYER_SPEED;
      //this.sprite.position.y = Math.min(this.sprite.position.y + Nakama.configs.PLAYER_SPEED, Nakama.game.height - this.sprite.height);
    }
    else{
        this.sprite.body.velocity.y=0;
    }

    if(Nakama.keyboard.isDown(this.configs.left)){
        this.sprite.body.velocity.x = -Nakama.configs.PLAYER_SPEED;
      //this.sprite.position.x = Math.max(this.sprite.position.x - Nakama.configs.PLAYER_SPEED, 0);
    }
    else if(Nakama.keyboard.isDown(this.configs.right)){
        this.sprite.body.velocity.x = Nakama.configs.PLAYER_SPEED;
      //this.sprite.position.x = Math.min(this.sprite.position.x + Nakama.configs.PLAYER_SPEED, Nakama.game.width - this.sprite.width);
    }
    else{
        this.sprite.body.velocity.x=0;
    }
    //throttling
    this.timeSinceLastFire +=Nakama.game.time.physicsElapsed;
    if (Nakama.keyboard.isDown(this.configs.fire)
    && this.timeSinceLastFire>this.configs.cooldown){
            this.fire(spriteName);
            this.timeSinceLastFire=0;
        }

    }

  }
