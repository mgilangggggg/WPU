// var angka = prompt('masukan angka : ');

// switch (angka) {
//     case '1' :
//         alert('anda memasukan angka 1');
//         break;
//     case '2' :
//         alert('anda memasukan angka 2');
//         break;
//     case '3' :
//         alert('anda memasukan angka 3');
//     default :
//         alert('angka yang anda masukan salah!');
//         break;
// }

// var item = prompt('Masukan nama Makanan / Minuman : \n (contoh : nasi, daging, susu, hamburger, softdrink');

// switch (item) {
//     case 'nasi' :
//     case 'daging' :
//     case 'susu' :
//         alert('makanan / minuman SEHAT!');
//         break;
//     case 'hamburger' :
//     case 'softdrink' :
//         alert('makanan / minuman TIDAK SEHAT!');
//         break;
//     default :
//         alert('anda memasukan nama makanan / minuman yang salah!');
//         break;
// }

let item = parseInt(prompt('Pilih Menu : \n (cth : [1] Odading, [2] Cireng, [3] Tahu Bulat, [4] Gehu)'));
const jmlBeli = prompt('mau berapa banyak!');

switch (item) {
    case 1 :
        alert('Mang... beli Odading ' + jmlBeli);
        break;
    case 2 :
        alert('Mang... beli Cireng ' + jmlBeli);
        break;
    case 3 :
        alert('Mang... beli Tahu Bulat ' + jmlBeli);
        break;
    case 4 :
        alert('Mang... beli Gehu ' + jmlBeli);
        break;
    default :
        alert('Maaf menu yang anda pilih tidak tersedia! \n silahkan coba lagi');
        break;
}