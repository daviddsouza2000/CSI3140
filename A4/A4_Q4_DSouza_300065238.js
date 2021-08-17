function start() {
    var xcoord1;
    var ycoord1;
    var xcoord2;
    var ycoord2;
    var image = document.getElementById("image");
    image.addEventListener("mousedown", imageMouseDown);

    function imageMouseUp(event) {
        event.preventDefault();
        image.removeEventListener("mousemove", imageMouseMove);
        image.removeEventListener("mouseup", imageMouseUp);
    }
    
    function imageMouseMove(event) {
        event.preventDefault();
        xcoord2 = xcoord1 - event.clientX;
        ycoord2 = ycoord1 - event.clientY;
        xcoord1 = event.clientX;
        ycoord1 = event.clientY;
        image.style.left = image.offsetLeft - xcoord2 + "px";
        image.style.top = image.offsetTop -  ycoord2 + "px";
    }
    
    function imageMouseDown(event) {
        event.preventDefault();
        xcoord1 = event.clientX;
        ycoord1 = event.clientY;
        image.addEventListener("mousemove", imageMouseMove);
        image.addEventListener("mouseup", imageMouseUp);
    }
}

window.addEventListener("load", start, false);