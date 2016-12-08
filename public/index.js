var app = function(){
  var canvas = document.getElementById('main-canvas');
  // console.log('canvas', canvas);
  var context = canvas.getContext('2d');
  // console.log(context);

//x coord where it starts, y coord where is starts in y and height and width
var drawCircle = function(x, y){
 context.beginPath();
 context.arc(x, y, 2, 0, Math.PI*2, true);
 context.fill();
}

var xposition = 0;
var yposition = 0;


var keyChecker = function(e) {
  if(e.keyCode == '38'){
      yposition = yposition -3;
      }
  else if (e.keyCode == '40') {
      yposition = yposition +3;
      }
  else if (e.keyCode == '37') {
      xposition = xposition -3;
      }
  else if (e.keyCode == '39') {
      xposition = xposition +3;
      }
  }
    //onclick/onmousemove
    document.onkeydown = function(event) {
      keyChecker(event);
      drawCircle(xposition, yposition);
    // console.log('clicked', event);
    // console.log('location', event.layerX, event.layerY); 
  }
}

window.onload = app;


