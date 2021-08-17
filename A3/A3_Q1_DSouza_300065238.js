function celsius(f){
    c = 5.0 / 9.0 * (f - 32)
    return Math.round(c * 100) / 100
}

function fahrenheit(c){
    f = 9.0 / 5.0 * c + 32
    return Math.round(f * 100) / 100
}