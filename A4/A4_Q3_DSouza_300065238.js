function clickedElement(event) {
    var pressedShift = event.shiftKey;
    var pressedCtrl = event.ctrlKey
    if(pressedShift && pressedCtrl){
        alert("Event name: " + event.type + "\n Element name: " + event.srcElement.id);
    }
    else if(pressedShift) {
        alert("Event name: " + event.type);
    }
    else if (pressedCtrl) {
        alert("Element name: " + event.srcElement.id);
    }
}

function start() {
    document.getElementById("h11").addEventListener("click", clickedElement);
    document.getElementById("p1").addEventListener("click", clickedElement);
    document.getElementById("a1").addEventListener("click", clickedElement);
    document.getElementById("ul1").addEventListener("click", clickedElement);
    document.getElementById("li1").addEventListener("click", clickedElement);
    document.getElementById("li2").addEventListener("click", clickedElement);
}

window.addEventListener("load", start, false);