function generated(lon) {
    var array = '0';
    for (let a = 1; a < lon; a++) {
        array = array + a.toString();
    }
    return array;
}

var a = generated(10);

console.log(a[3]);