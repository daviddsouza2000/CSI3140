function word_to_pig(str){
    if (str == "") return "";
    var first = str.charAt(0);
    var new_str = str.slice(1,str.length);
    new_str += first + "ay";
    return new_str;
}

function printLatinWord(){
    str = document.getElementById("word").value;
    var str_arr = str.split(" ");
    var latin_arr = [];
    str_arr.forEach(element => {
        latin_arr.push(word_to_pig(element));
    });
    document.getElementById("area").innerHTML += latin_arr.join(" ") + "\n";  
}