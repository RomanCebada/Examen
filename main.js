var punto = new puntos();
document.getElementById('cal').addEventListener('click',calcular);

function calcular(){
    var pntX=document.getElementById('x').value;
    var pntY=document.getElementById('y').value;
    document.getElementById('res').innerHTML = punto.Distancia(pntX,pntY);
}