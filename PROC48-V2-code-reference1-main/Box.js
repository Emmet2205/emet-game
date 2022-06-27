class Box{
    constructor(x,y,w,h){
     this.x = x;
     this.y = y;
     this.w = w;
     this.h = h;

     this.sprite = createSprite(x,y,w,h);

    }
    display(){
        rect(this.x,this.y,this.w,this.h);
    }
}

