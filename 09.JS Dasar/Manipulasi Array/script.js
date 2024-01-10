// Manipulasi Array

// 1. Menambah isi Array
// var array = [];
// array[0] = 'Muhamad';
// array[1] = 'Gilang';
// array[2] = 'Abdul';
// array[3] = 'Gani';

// console.log(array);

// 2.  Menghapus isi Array
// var array = ['Muhamad', 'Gilang', 'Abdul', 'Gani'];
// array[1] = undefined;
// console.log(array);

// 3. Menampilkan isi array
// var array = ['Muhamad', 'Gilang', 'Abdul', 'Gani', 'Justin'];

// for (var i = 0; i < array.length; i++) {
//     console.log('Mahasiswa ke - ' + (i + 1) + ' : ' + array[i]);
// }

// Method pada array
// 1. join(menggabungkan seluruh isi array dan mengubahnya menjadi string)
// var array = ['Muhamad', 'Gilang', 'Abdul', 'Gani'];
// console.log(array.join(' - '));

// 2. push(menambah elemen array di akhir array) & pop(menghilangkan elemen terakhir dari sebuah array)
// array.push('Alex', 'Bizer');
// array.pop();
// array.pop();
// console.log(array.join(' - '));

// 3. unshift(menambahkan elemen baru di awal array) & shift(menghilangkan elemen pertama)
// array.unshift('Alex');
// array.shift();
// console.log(array.join(' - '));

// var array = ['Muhamad', 'Gilang', 'Abdul', 'Gani'];
// 4. splice(menyisipkan elemen array di tengah)
// splice(indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
// array.splice(1, 2, 'Alex', 'Bizer');
// console.log(array.join(' - '));

// 5. slice(mengiris sebuah array menjadi array baru)
// sclice(awal, akhir);
// var array = ['Muhamad', 'Gilang', 'Abdul', 'Gani', 'Alex'];
// var array2 = array.slice(1,4);
// console.log(array2.join(' - '));

// Method foreach & map ini (melakukan looping pada array lebih keren dari pada for biasa)
// 6. foreach
// var angka = [1,2,3,4,5,6,7,8];
// var nama = ['Muhamad', 'Gilang', 'Abdul', 'Gani'];
// for (var i = 0; i < angka.length; i++) {
//     console.log(angka[i]);
// }
// angka.forEach(function(e) {
//     console.log(e);
// });

// nama.forEach(function(e, i) {
//     console.log('Mahasiswa ke- ' + (i + 1) + ' adalah : ' + e)
// });

// 7. map (mengembalikan array)
// var angka = [1,2,5,3,6,8,4];
// var angka2 = angka.map(function(e) {
//     return e * 2;
// });
// console.log(angka2.join(' - '));

// 8. sort(mengurutkan isi array)
// var angka = [1,2,10,5,15,20,3,6,8,4,7];
// console.log(angka.join(' - ')); //sebelum di urutakan
// angka.sort(function(a,b) {
//     return a-b;
// });
// console.log(angka.join(' - ')); //sesudah di urutkan

// 2 method ini di gunakan untuk mencari elemen pada array
// 9. filter(mengembalikan banyak nilai)
var angka = [1,2,10,5,15,20,3,6,8,4,7];
var angka2 = angka.filter(function(x) {
    return x > 5;
});
console.log(angka2.join(' - '));

// 10. find(mengembalikan 1 nilai)
var angka = [1,2,10,5,15,20,3,6,8,4,7];
var angka2 = angka.find(function(x) {
    return x > 5;
});
console.log(angka2);