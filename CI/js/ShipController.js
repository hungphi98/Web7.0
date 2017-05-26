class ShipController {

  constructor(x, y, spriteName, configs){
    this.sprite = Nakama.game.add.sprite(x, y, 'assets', spriteName);
    this.configs = configs;
  }

  fire(spriteName){
      Nakama.bulletList.push (new BulletController(this.sprite.position.x,this.sprite.position.y, spriteName)) ;



     


    //  console.log(Nakama.emLoc.toString());
      Nakama.bulletCounter++;
  }

  update(spriteName){


    if(Nakama.keyboard.isDown(this.configs.UP)){
      this.sprite.position.y = Math.max(this.sprite.position.y - Nakama.configs.PLAYER_SPEED, 0);

    }
    else if(Nakama.keyboard.isDown(this.configs.DOWN)){
      this.sprite.position.y = Math.min(this.sprite.position.y + Nakama.configs.PLAYER_SPEED, Nakama.game.height - this.sprite.height);
    }

    if(Nakama.keyboard.isDown(this.configs.LEFT)){
      this.sprite.position.x = Math.max(this.sprite.position.x - Nakama.configs.PLAYER_SPEED, 0);
    }
     if(Nakama.keyboard.isDown(this.configs.RIGHT)){
      this.sprite.position.x = Math.min(this.sprite.position.x + Nakama.configs.PLAYER_SPEED, Nakama.game.width - this.sprite.width);
    }
    else if (Nakama.keyboard.isDown(this.configs.FIRE)){
            this.fire(spriteName);

                //Nakama.bullet.update();


        }

    }
  }
