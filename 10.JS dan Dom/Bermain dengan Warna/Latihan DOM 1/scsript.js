const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function() {
    // document.body.style.backgroundColor = 'green';
    // document.body.setAttribute('class', 'biru-muda');
    document.body.classList.toggle('biru-muda');
}




const tRandomWarna = document.createElement('button');
const textTombol = document.createTextNode('Random Warna');
tRandomWarna.appendChild(textTombol);
tRandomWarna.setAttribute('type', 'button');
tUbahWarna.after(tRandomWarna);

tRandomWarna.addEventListener('click', function() {
    const r = Math.round(Math.random() * 255 + 0);
    const g = Math.round(Math.random() * 255 + 0);
    const b = Math.round(Math.random() * 255 + 0);
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});




const sliderMerah = document.querySelector('input[name=sliderMerah]');
const sliderHijau = document.querySelector('input[name=sliderHijau]');
const sliderBiru = document.querySelector('input[name=sliderBiru]');

sliderMerah.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sliderHijau.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});

sliderBiru.addEventListener('input', function() {
    const r = sliderMerah.value;
    const g = sliderHijau.value;
    const b = sliderBiru.value;
    document.body.style.backgroundColor = 'rgb('+ r +','+ g +','+ b +')';
});


document.body.addEventListener('mousemove', function(event) {
    // posisis mouse
    // console.log.(clientY);
    // ukuran browser
    // console.log(window.innerWidth);
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +',100)';
});