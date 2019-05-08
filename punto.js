class puntos{
    constructor(){
        this.x=null;
        this.y=null;
        this.distancia=0;
    }
    Distancia(x,y){
        if(this.x==null && this.y==null){
            this.x=x;
            this.y=y;
            return this.distancia;
        }
        else{
            this.distancia += Math.sqrt((x-this.x)+(y-this.y));
            this.x=x;
            this.y=y;
            return this.distancia;
        }
    }
}