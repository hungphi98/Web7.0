class EnemyController{
    constructor(x,y,spriteName){
        this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    }


    moveAround(){

        if (Nakama.moveRight){
            this.sprite.position.x+=3;
            if (this.sprite.position.x>=Nakama.game.width-this.sprite.width ){
                Nakama.moveRight=false;
            }
        }
            if(Nakama.moveRight==false){
                this.sprite.position.x-=3;
                if(this.sprite.position.x<=0){
                    Nakama.moveRight=true;
                }
            }





    }

    update(){
                this.moveAround();
        }
    }
