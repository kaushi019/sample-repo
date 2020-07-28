var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90

setInterval(drawClock, 1000);

function drawClock() {
    ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
    ctx.fillStyle = "white";
    ctx.fill();

    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
    drawTime(ctx, radius);
  }

  function drawFace(ctx, radius){
    ctx.beginPath();
    ctx.arc(0, 0, radius, 0, 2 * Math.PI);
    ctx.fillStyle = '#e8faff';
    ctx.fill();

    grad = ctx.createRadialGradient(0, 0, radius * 0.95, 0, 0, radius * 1.05);
    grad.addColorStop(0, '#269be2');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#1a88de');

    ctx.strokeStyle = grad;
    ctx.lineWidth = radius * 0.05;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.04, 0, 2 * Math.PI);
    ctx.fillStyle = '#004aaf';
    ctx.fill();
  }

 function drawNumbers(ctx, radius){
    var ang;
    var num;
    var str;
    ctx.font = "(radius*0.15)px Comic Sans MS";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";

    for(num = 1; num < 13; num++) {
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius * 0.85);
        ctx.rotate(-ang);
        if(num%3==0){
            str=num.toString().bold().fontsize(5);
            ctx.fillText(str, 0, 0);
        }
        else{
            str=num.toString();
            ctx.fillText(str, 0, 0);
        }
        ctx.rotate(ang);
        ctx.translate(0, radius * 0.85);
        ctx.rotate(-ang);
      }
 }
 function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();

    hour = hour%12;
    hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
    drawHand(ctx, hour, radius*0.5, radius*0.06);

    minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
    drawHand(ctx, minute, radius*0.8, radius*0.06);

    second = (second*Math.PI/30);
    drawHand(ctx, second, radius*0.85, radius*0.02);
 }

 function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0,0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.stroke();
    ctx.rotate(-pos);
  }