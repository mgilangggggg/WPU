// 2.1 EXECUTION CONTEXT, HOISTING & SCOPE

// var nama = 'Gilang';
// console.log(nama);

// creation phase pada Global Context
// nama var = undefined
// nama function = function()
// hoisting
// windows = global object
// this = windows

// execution phase


// var nama = 'Gilang';
// var umur = 21;

// console.log(sayHello());

// function sayHello() {
//     return (`Hello, nama saya ${nama}, saya ${umur} tahun,`);
// }


// function membuat Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// window
// arguments
// hoisting


// var nama = 'Gilang';
// var username = '@mgilangggggg';

// function cetakURL() {
//     var instagramURL = 'http://www.instagram.com/';
//     return instagramURL + username;
// }

// console.log(cetakURL('DohnJoe', 'JohnDoe'));


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }

//         c();
//     }

//     b();
// }

// a();


function satu() {
    var nama = 'Gilang';
    console.log(nama);
}

function dua() {
    console.log(nama);
}

console.log(nama);
var nama = 'JohnDoe';
satu();
dua('DoeJohn');
console.log(nama);