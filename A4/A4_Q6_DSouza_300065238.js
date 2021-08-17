function start(){
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");

    let region = new Path2D();
    region.moveTo(30, 90);
    region.lineTo(110, 20);
    region.lineTo(190, 90);
    region.closePath();

    var gradient = context.createLinearGradient(30, 20, 30, 90);
    gradient.addColorStop(0, 'red');
    gradient.addColorStop(0.5, 'blue');
    gradient.addColorStop(1, 'green');
    context.fillStyle = gradient;
    context.fill(region);
}

window.addEventListener("load", start);