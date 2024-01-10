// var angka = prompt('Masukan Angka : ');
// if (angka % 2 === 0) {
//     alert(angka + ' adalah bilangan GENAP');
// } else if (angka % 2 === 1) {
//      alert(angka + ' adalah bilangan GANJIL');
// } else {
//      alert('Maaf yang anda masukan bukan angka silahkan Coba Lagi !');
// }


var jmlAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {

    if (noAngkot <= 6) {
        console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik.');
    } else {
        console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi.');
    }
}
