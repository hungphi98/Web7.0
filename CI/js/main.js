var Nakama = {};
Nakama.configs = {
  BACKGROUND_SPEED  : 5,
  PLAYER_SPEED      : 500,
  BULLET_SPEED      : 1500
};

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
  Nakama.bulletGroup = Nakama.game.add.physicsGroup();
  Nakama.playerGroup = Nakama.game.add.physicsGroup();


  var playerConfigs= {
    up      : Phaser.Keyboard.UP,
    down    : Phaser.Keyboard.DOWN,
    left    : Phaser.Keyboard.LEFT,
    right   : Phaser.Keyboard.RIGHT,
    fire    : Phaser.Keyboard.CONTROL
};

  var partnerConfigs= {
    up      : Phaser.Keyboard.W,
    down    : Phaser.Keyboard.S,
    left    : Phaser.Keyboard.A,
    right   : Phaser.Keyboard.D,
    fire    : Phaser.Keyboard.SPACEBAR
};
  do{
   var userInput = prompt("Please choose your spacecraft\n1:\n2:\n3:");
   switch(userInput){
     case '1':
         Nakama.player   = new ShipType1Controller(400, 600,'Spaceship1-Player.png', playerConfigs);
         Nakama.partner  = new ShipType1Controller(300,600,'Spaceship1-Partner.png', partnerConfigs);
       break;
     case '2':
         Nakama.player   = new ShipType2Controller(400, 600,'Spaceship2-Player.png', playerConfigs);
         Nakama.partner  = new ShipType2Controller(300,600,'Spaceship2-Partner.png', partnerConfigs)
       break;
     case '3':
         Nakama.player   = new ShipType3Controller(400, 600,'Spaceship3-Player.png', playerConfigs);
         Nakama.partner  = new ShipType3Controller(300,600,'Spaceship3-Partner.png', partnerConfigs)
       break;
     default:
       alert('Invalid');
       break;
   }
 }while(userInput < '1' || userInput > '3');
}


// update game state each frame
var update = function(){
  Nakama.background.tilePosition.y += Nakama.configs.BACKGROUND_SPEED;

  Nakama.player.update();
  Nakama.partner.update();
}

// before camera render (mostly for debug)
var render = function(){}
