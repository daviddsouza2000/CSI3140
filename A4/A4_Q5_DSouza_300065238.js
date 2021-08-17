function start(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    context.font = "30px Arial";
    context.shadowColor = 'gray';
    context.shadowBlur = 6;
    context.shadowOffsetX = 2;
    context.shadowOffsetY = 5;
    context.fillText("HTML5 Canvas", 50, 50);
}

window.addEventListener("load", start);