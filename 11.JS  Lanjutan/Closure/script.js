// function init() {
//     // let nama = 'Gilang';
//     return function (nama) {
//         console.log(nama);
//     }

// }
// let panggilNama = init();
// panggilNama('Gilang');
// panggilNama('JohnDoe');


// function ucapSalam(waktu) {
//     return function(nama) {
//         console.log(`Hallo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapSalam('Pagi');
// let selamatSiang = ucapSalam('Siang');
// let selamatMalam = ucapSalam('Malam');

// console.dir(selamatMalam('Gilang'));


let add = (function () {
    let counter = 0;
    return function () {
        return ++counter;
    } 
})();

counter = 100;

console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());
console.log(add());