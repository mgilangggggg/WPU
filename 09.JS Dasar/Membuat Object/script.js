// Membuat Object
// Object Literal
var mhs1 = {
    nama : 'Muhamad Gilang Abdul Gani',
    nim : '10121177',
    email : 'gilang.10121177@mahasiswa.unikom.ac.id',
    jurusan : 'Teknik Informatika'
}

var mhs2 = {
    nama : 'Alex',
    nim : '10121188',
    email : 'alex.10121188@mahasiswa.unikom.ac.id',
    jurusan : 'Teknik Elektro'
}

// Function Declaration
function buatObjectMhs(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs3 = buatObjectMhs('Riza','10121199','riza.10121199@mahasiswa.unikom.ac.id', 'Teknik Sipil');

// Constructor
function Mahasiswa(nama, nim, email, jurusan) {
    // var this = {}
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
    // return this;
}

var mhs4 = new Mahasiswa('Erico', '10121112', 'erico.10121112@mahasiswa.unikom.ac.id', 'Teknik Arsitektur');