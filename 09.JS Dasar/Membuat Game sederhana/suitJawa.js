var tanya = true;
while (true) {
    // menangkap plihan player
    var player = prompt('Silahkan Pilih : gajah, semut, orang');

    // menangkap pilihan computer

    // membangkitkan bilangan random
    var comp = Math.random();

    if (comp < 0.34) {
        comp = 'gajah';
    } else if (comp >= 0.34 && comp < 0.67) {
        comp = 'orang';
    } else {
        comp = 'semut';
    }

    var hasil = '';
    // menentukan rules
    if (player == comp) {
        hasil = 'SERI!';
    } else if (player == 'gajah') {
        // if (comp == 'orang') {
        //     hasil = 'MENANG!';
        // } else {
        //     hasil = 'KALAH!';
        // }
        hasil = (comp == 'orang') ? 'MENANG!' : 'KALAH!';
    } else if (player == 'orang') {
        hasil = (comp == 'gajah') ? 'KALAH!' : 'MENANG!';
    } else if (player == 'semut') {
        hasil = (comp == 'orang') ? 'KALAH!' : 'MENANG!';
    } else {
        hasil = 'Anda Memasukan Pilihan Yang Salah!!';
    }

    // tampilkan hasilnya
    alert('Kamu Memilih : ' + player + ' dan Komputer Memilih : ' + comp + '\nMaka Hasilnya : Kamu ' + hasil);

    tanya = confirm('Lagi?');
}

alert('Terima Kasih Sudah Bermain.');