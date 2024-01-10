// this (adalah sebuah keyword spesial yang secara otomatis didefinisikan pada setiap function)
var a = 10;
console.log(this.a);


// membuat object

// cara 1 - function declaration
function halo() {
    console.log(this);
    console.log('halo');
}
this.halo();
// this mengembalikan object Global


// cara 2 - object literal
var object = {a : 10, nama : 'Gilang'};
object.halo = function() {
    console.log(this);
    console.log('halo');
}
object.halo();
// this mengembalikan object yang bersangkutan


// cara 3 - constructor
function Halo() {
    console.log(this);
    console.log('halo');
}
var obj1 = new Halo();
var obj2 = new Halo();
// mengembalikan object yang baru dibuat