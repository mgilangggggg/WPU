const container = document.querySelector('.container');
const besar = document.querySelector('.besar');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {

    // cek apakah yang di klik adalah thumb
    if (e.target.className == 'thumb') {
        besar.src = e.target.src;
        besar.classList.add('fade');
        setTimeout(function() {
            besar.classList.remove('fade');
        }, 600);
        thumbs.forEach(function(thumb) {
            // if (thumb.classList.containst('active')) {
            //     thumb.classList.remove('active');
            // }
            thumb.className = 'thumb';
        });

        e.target.classList.add('active');
    }
});