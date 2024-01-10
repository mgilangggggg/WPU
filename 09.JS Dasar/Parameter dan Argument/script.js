function tambah(a, b) {
    return a + b;
}

var a = parseInt(prompt('Masukan Nilai Bilangan Ke 1 : '));
var b = parseInt(prompt('Masukan Nilai Bilangan ke 2 : '));
var hasil = tambah(a*2, b*2);
console.log(hasil);


// Menyimpan argumen macam - macam
function tambah(a, b) {
    return a + b;
}

function kali(a, b) {
    return a * b;
}

var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);

// Psudo var arguments yang ada pada function di javascript
function tambah() {
    var hasil = 0;
    for (var i = 0; i  < arguments.length; i++) {
        hasil += arguments[i];
    }
    return hasil;
}
var cobaHasil = tambah(1,4,45,6,7);
console.log(cobaHasil)


// Belajar Refactoring
function jumlahVolumeDuaKubus(a, b) {
    return a * a * a + b * b * b;
}

alert(jumlahVolumeDuaKubus(8, 3));