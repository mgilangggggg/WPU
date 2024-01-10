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

const methodMhs = {
    makan: function(porsi) {
        this.energy += porsi;
        console.log(`Hallo ${this.nama}, selamat makan!!!`);
    },

    main: function(jam) {
        this.energy -= jam;
        console.log(`Hallo ${this.nama}, selamat bermain!!!`);
    },

    tidur: function(jam) {
        this.energy += jam * 2;
        console.log(`Hallo ${this.nama}, selamat tidur!!!`);
    }

}

function Mahasiswa(nama, energy) {
    let mahasiswa = Object.create(methodMhs);
    mahasiswa.nama = nama;
    mahasiswa.energy = energy;

    return mahasiswa;
}

let Gilang = Mahasiswa('Gilang', 10);
let DohnJoe = Mahasiswa('DohnJoe', 20);


// 3. Constructor Function
// keyword new
// function Mahasiswa(nama, energy) {
//     this.nama = nama;
//     this.energy = energy;

//     this.makan = function(porsi) {
//         this.energy += porsi;
//         console.log(`Hallo ${this.nama}, selamat makan!!!`);
//     }
//     this.main = function(jam) {
//         this.energy -= jam;
//         console.log(`Hallo ${this.nama}, selamat bermain!!!`);
//     }
// }

// let Gilang = new Mahasiswa('Gilang', 10);


// 4. Object.create
