class Distancia{
    constructor(){
        this.puntos=this.puntos;
        this.distancia=0;
    }
    agregar(puntos){
        this.puntos=puntos;
    }
    calcular(){
        if(this.puntos.length==2){
            var p1=this.puntos[0];
            var p2=this.puntos[1];
            this.distancia += sqrt((p2.x-p1.x)+(p2.y-p1.y));
        }
        else{
        }
    }
}