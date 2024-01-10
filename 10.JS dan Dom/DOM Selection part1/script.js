// DOM Selection
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'salmon';
judul.style.backgroundColor = 'lightskyblue';
judul.innerHTML = 'M. Gilang Abdul Gani';

// document.getElementByTagName() -> mengembalikan HTMLColection
const p = document.getElementsByTagName('p');
// p[0].style.backgroundColor = 'lightblue';
// p[1].style.backgroundColor = 'lightblue';
// p[2].style.backgroundColor = 'lightblue';
// p[3].style.backgroundColor = 'lightblue';
for (let i = 0; i < 4; i++) {
    p[i].style.backgroundColor = 'lightblue';
}

const h1 = document.getElementsByTagName('h1')[0];
h1.style.fontSize = '40px';

// document.getElementsByClassName() -> mengembalikan HTMLCollection
const p1 = document.getElementsByClassName('p1')[0];
p1.innerHTML = 'ini diubah dari javascript';