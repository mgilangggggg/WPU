// Cara untuk membuat Object pada javascript


// 1. Object Literal
// PROBLEM : tidak efektik untuk object yang banyak
// let mahasiswa1 = {
//     nama : 'Gilang',
//     energy : 10,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Halo ${this.nama}, selamat makan!!!`);
//     }
// }


// let mahasiswa2 = {
//     nama : 'Dohn Joe',
//     energy : 15,
//     makan : function(porsi) {
//         this.energy = this.energy + porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!!!`);
//     }
// }


// 2. Function Declaration
// function Mahasiswa(nama, energy) {
//     let mahasiswa = {};
//     mahasiswa.nama = nama;
//     mahasiswa.energy = energy;

//     mahasiswa.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!!!`);
//     }
//     mahasiswa.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!!!`);
//     }

//     return mahasiswa;
// }

// let Gilang = Mahasiswa('Gilang', 10);
// let DohnJoe = Mahasiswa('DohnJoe', 20);


// 3. Constructor Function
// keyword new
function Mahasiswa(nama, energy) {
    this.nama = nama;
    this.energy = energy;

    this.makan = function(porsi) {
        this.energy += porsi;
        console.log(`Hallo ${this.nama}, selamat makan!!!`);
    }
    this.main = function(jam) {
        this.energy -= jam;
        console.log(`Hallo ${this.nama}, selamat bermain!!!`);
    }
}

let Gilang = new Mahasiswa('Gilang', 10);


// 4. Object.create
