/* <script> */
// var c = document.getElementById("myCanvas");
// var c1 = document.getElementsByClassName("triangle");
// var ctx = c1.getContext("2d");
// ctx.moveTo(100, 20);
// // ctx.lineTo(700, 500);
// ctx.stroke();
// </script>

// var c = document.getElementById("myCanvas");
// var ctx = c.getContext("2d");
// ctx.font = "30px Arial";
// ctx.fillText("Hello World", 10, 50);

var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

// Create gradient
var grd = ctx.createLinearGradient(0, 0, 200, 0);
grd.addColorStop(0, "red");
grd.addColorStop(1, "white");

// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(10, 10, 150, 80);


function dragStart(event) {
    event.dataTransfer.setData("Text", event.target.id);
    document.getElementById("demo").innerHTML = "Started to drag the p element";
  }
  
  function dragEnd(event) {
    document.getElementById("demo").innerHTML = "Finished dragging the p element.";
  }
  
  function allowDrop(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("Text");
    event.target.appendChild(document.getElementById(data));
  }