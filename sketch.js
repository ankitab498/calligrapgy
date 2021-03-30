var canvas;
var drawing =[];
var curentPath = [];


function setup(){
    canvas = createCanvas(600,600);
    canvas.mousePressed(startPath);
    database = firebase.database();
    
}

function startPath(){
    currentPath=[];
    drawing.push(currentPath);
}

function draw(){
  background(255);

if(mouseIsPressed){
    var point = {
        x:mouseX,
        y:mouseY
    }
        currentPath.push(point);
    }


    if(drawing!==undefined){
    stroke(0,0,255);
    strokeWeight(4);
    noFill();
    for(i = 0;i < drawing.length; i++){
        var path = drawing[i];

        beginShape();
          for(j = 0; j < path.length; j++){
             vertex(path[j].x, path[j].y);
    }
    endShape();
}
}
}
