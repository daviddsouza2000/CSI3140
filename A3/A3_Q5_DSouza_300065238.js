function getRandomInt() {
    return Math.floor(Math.random() * 10) + 1;
}

function tortoise_move(tortoise){
    var n = getRandomInt();
    if (1 <= n && n <= 5) return Math.min(tortoise + 3, 70);
    else if (6 <= n && n <= 7) return Math.min(tortoise + 6, 70);
    else if (8 <= n && n <= 10) return Math.min(tortoise + 1, 70);
}

function hare_move(hare){
    var n = getRandomInt();
    if (1 <= n && n <= 2) return hare;
    else if (3 <= n && n <= 4) return Math.min(hare + 9, 70);
    else if (n == 5) return Math.max(hare - 12, 1);
    else if (6 <= n && n <= 8) return Math.min(hare + 1, 70);
    else if (9 <= n && n <= 10) return Math.max(hare - 2, 1);
}

function generate_line(hare, tortoise){
    str = "<p>";
    for(var i=1;i<= 70;i++){
        if (i == 36) str += "</p><p>";

        if (hare == i && tortoise == i) str += " <u>OUCH!!!</u> ";
        else if (hare == i) str += " <u>H</u> ";
        else if (tortoise == i) str += " <u>T</u> ";
        else if (i % 5 == 0) str += " <u>" + i + "</u> ";
        else str += " __ ";
    }
    str += "</p>"; //"<hr>";

    if (hare == 70 && tortoise == 70) {
        str += "<p>IT'S A TIE.</p>";
    }
    if (hare == 70) {
        str += "<p>HARE WINS. YUCK!</p>";
    }
    if (tortoise == 70) {
        str += "<p>TORTOISE WINS!!! YAY!!!</p>";
        str += "<p>Time Elasped: " + count + " seconds</p>";
    }
    str += "<hr>";
    return str;
}

function race(){
    hare = hare_move(hare);
    tortoise = tortoise_move(tortoise);
    count++;

    if (hare == 70 && tortoise == 70) {
        clearInterval(timer);
    }
    if (hare == 70) {
        clearInterval(timer);
    }
    if (tortoise == 70) {
        clearInterval(timer);
    }

    document.writeln(generate_line(hare, tortoise));
}

function start() {
    setTimeout(() => {  document.writeln("<h2>ON YOUR MARK, GET SET</h2>"); }, 1000);
    setTimeout(() => {  document.writeln("<h2>BANG!!!</h2>"); }, 2000);
    setTimeout(() => {  document.writeln("<h2>AND THEY'RE OFF!!!</h2>"); }, 3000);
    setTimeout(() => { timer = setInterval(race, 1000); }, 4000);
}

var hare = 1;
var tortoise = 1;
var count = 0;

var timer;