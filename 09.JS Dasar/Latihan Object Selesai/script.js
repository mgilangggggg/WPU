// Membuat Object Angkot
function Angkot(namaSopir, trayek, penumpang, kas) {
    this.namaSopir = namaSopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang) {
        this.penumpang.push(namaPenumpang);
        return this.penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar) {
        if (this.penumpang.length == 0) {
            alert('Angkot Masih Kosong!');
            return false;
        }

        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            }
        }
    }
}
// Inisialisasi Object baru
var angkot1 = new Angkot('Angga', ['Cicaheum', 'Cibiru'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);