var puntos=[];
var distancia = new Distancia();
document.getElementById('ing').addEventListener('click',ingresar());

function ingresar(){
    var x=document.getElementById('x').value;
    var y=document.getElementById('y').value;
    puntos.push(new Punto(x,y));
    console.log(puntos);
}

document.getElementById('Cal').addEventListener('click',calcular());

function calcular(){
    distancia.agregar=(puntos);
    console.log(distancia);
}