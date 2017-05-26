class EnemyController{
    constructor(x,y,spriteName){
        this.sprite = Nakama.game.add.sprite(x,y,'assets',spriteName);
    }


    moveAround(){

        if (Nakama.moveRight){
            this.sprite.position.x+=2;
            if (this.sprite.position.x>=Nakama.game.width-this.sprite.width ){
                Nakama.moveRight=false;
            }
        }
            if(Nakama.moveRight==false){
                this.sprite.position.x-=2;
                if(this.sprite.position.x<=0){
                    Nakama.moveRight=true;
                }
            }
    }




    update(row,col){


                this.moveAround();
                Nakama.emLoc[row][col]={
                    xAxis:this.sprite.position.x,
                    yAxis:this.sprite.position.y,
                    Width:this.sprite.width,
                    Height:this.sprite.height
                }
                //Nakama.clash.push([this.sprite.position.x,this.sprite.position.y,this.sprite.height,this.sprite.width]);
                //this.isDeath();
        }
    }
