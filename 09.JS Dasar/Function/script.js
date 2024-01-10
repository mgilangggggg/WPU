// Function declaration
function jumlahBilangan() {
    var total;
    total = 5 + 5;

    return total;
}
alert(jumlahBilangan(5, 5));

// Function expression
var jumlahBilangan = function() {
    var total;
    total = 1 + 2;

    return total;
}
alert(jumlahBilangan(1,2));

// Membuat dan Menjalankan Function
var a = 8;
var b = 3;
var volumeA;
var volumeB;
var total;

volumeA = a * a * a;
volumeB = b * b * b;

total = volumeA + volumeB;

console.log(total);

// Membuat dan Menjalankan Function
function jumlahVolumeDuaKubus(a, b) {
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;

    total = volumeA + volumeB;

    return total;
}

console.log(jumlahVolumeDuaKubus(5, 5));
console.log(jumlahVolumeDuaKubus(10, 3));