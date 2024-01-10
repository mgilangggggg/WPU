//alert
// alert('Hello');
// alert('nama');
// alert('saya');
// alert('Gilang');

//prompt
// var nama = prompt('Masukan Nama : ');
// alert(nama);

//confirm
// var tes = confirm('kamu yakin??');

//pengkondisian / percabangan
// if (tes === true) {
//     alert('user menekan tombol OK!');
// } else {
//     alert('user menekan tombol Cancel!');
// }

//pengulangan
alert('selamat datang');
var lagi = true;

while (lagi) {
    var nama = prompt('masukan nama:');
    alert('halo' + nama);

    lagi = confirm('coba lagi');
}

alert('terima kasih...');