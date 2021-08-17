function is_prime(n){
    var arr = new Array(n);
    for (var i=0; i<n;i++)
        arr[i] = true;
    arr[0] = false;
    arr[1] = false;
    for(var i=2; i<n;i++){
        if (arr[i]){
            for(var j=i*2;j<n;j+=i){
                arr[j]=false;
            }
        }
    }
    return arr;
}

var arr = is_prime(1000);
for(var i = 1; i<arr.length;i++){
    document.writeln("<p>" + i + ": " + (arr[i] ? "Prime" : "Not Prime") + "</p>");
}