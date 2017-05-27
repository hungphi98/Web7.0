var Nakama = {};
Nakama.configs = {
  PLAYER_SPEED      : 500,
  BACKGROUND_SPEED  : 5,
  BULLET_SPEED:1500
};
Nakama.bulletList =[];
Nakama.bulletCounter=0;
Nakama.clashCheck=[];
Nakama.emLoc=[];

Nakama.enemy = new Array(5);
Nakama.moveRight=true;
for (var i = 0; i < 5; i++) {
  Nakama.enemy[i] = new Array(4);
  Nakama.emLoc[i]=new Array(4);
}

window.onload = function(){
  Nakama.game = new Phaser.Game(640,960,Phaser.AUTO,'',
    {
      preload: preload,
      create: create,
      update: update,
      render: render
    }, false, false
  );
}

// preparations before game starts
var preload = function(){
  Nakama.game.scale.minWidth = 320;
  Nakama.game.scale.minHeight = 480;
  Nakama.game.scale.maxWidth = 640;
  Nakama.game.scale.maxHeight = 960;
  Nakama.game.scale.pageAlignHorizontally = true;
  Nakama.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

  Nakama.game.time.advancedTiming = true;

  Nakama.game.load.atlasJSONHash('assets', 'Assets/assets.png', 'Assets/assets.json');
  Nakama.game.load.image('background', 'Assets/Map1.png');
}

// initialize the game
var create = function(){
  Nakama.game.physics.startSystem(Phaser.Physics.ARCADE);
  Nakama.keyboard = Nakama.game.input.keyboard;

  Nakama.background = Nakama.game.add.tileSprite(0, 0, 640, 960, 'background');

  Nakama.player = new ShipController(300, 400, 'Spaceship1-Player.png', {
    up    : Phaser.Keyboard.UP,
    down  : Phaser.Keyboard.DOWN,
    left  : Phaser.Keyboard.LEFT,
    right : Phaser.Keyboard.RIGHT,
    fire  : Phaser.Keyboard.CONTROL,
    cooldown:0.3
});

  Nakama.partner = new ShipController(400, 400, 'Spaceship1-Partner.png', {
    up   : Phaser.Keyboard.W,
    down : Phaser.Keyboard.S,
    left  : Phaser.Keyboard.A,
    right : Phaser.Keyboard.D,
    fire  : Phaser.Keyboard.SPACEBAR,
    cooldown:0.3
});
    for (let row=0;row<5;row++){
        let tempRow =row * 100;
        for (let col=0;col<4;col++){
            let tempCol = col*62;
            Nakama.enemy[row][col] = new EnemyController(tempRow,tempCol,'EnemyType3.png');

        }
    }



 /* Nakama.bullet = new BulletController(300,400,'BulletType1.png',Nakama.player);
  Nakama.bullet2 = new BulletController(600,400,'BulletType2.png',Nakama.partner);
  */
}

 function isDead(){
     for (let j=0;j<Nakama.clashCheck.length;j++){

         for (let row=0;row<5;row++){
             for (let col=0;col<4;col++){
                let rect1 = {xAxis: Nakama.clashCheck[j].xAxis, yAxis: Nakama.clashCheck[j].yAxis,
                      Width: Nakama.clashCheck[j].Width, Height: Nakama.clashCheck[j].Height};
                let rect2 = {xAxis: Nakama.emLoc[row][col].xAxis, yAxis: Nakama.emLoc[row][col].yAxis,
                     Width: Nakama.emLoc[row][col].Width, Height: Nakama.emLoc[row][col].Height};
                if (rect1.xAxis < rect2.xAxis + rect2.Width &&
               rect1.xAxis + rect1.Width > rect2.xAxis &&
               rect1.yAxis < rect2.yAxis + rect2.Height &&
               rect1.Height + rect1.yAxis > rect2.yAxis) {
                   console.log("Collision Detected!!!");
                    Nakama.enemy[row][col] = Nakama.game.add.sprite(0,0);
                    }

                }
            }
        }

}




// update game state each frame
var update = function(){
  Nakama.background.tilePosition.y += Nakama.configs.BACKGROUND_SPEED;
  Nakama.player.update('BulletType1.png');
  Nakama.partner.update('BulletType2.png');
  for (let row=0;row<5;row++){
      for (let col=0;col<4;col++){
          if (Nakama.enemy[row][col] == null){
              return null;
          }else{
               Nakama.enemy[row][col].update(row,col);
            }

        }

    }

  for (let i=0;i<Nakama.bulletList.length;i++){
      Nakama.bulletList[i].update(i);
  }
isDead();
}



// before camera render (mostly for debug)
var render = function(){}
