// DOM Selection
// document.getElementById()
// document.getElementByTagName()
// document.getElementsByClassName()

// document.querySelector() -> menghasilkan element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'red';
// p4.style.fontSize = '30px';

// const li2 = document.querySelector('section ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

// // document.querySelectorAll() -> 
// const p = document.querySelectorAll('p');
// for (let i = 0; i < p.length; i++) {
//     p[i].style.backgroundColor = 'lightblue';
// }



// cara target paragraf ke 4

// cara 1
// const p4 = document.getElementsByTagName('p');
// p4[3].style.backgroundColor = 'lightblue';

// cara 2
// const p4 = document.querySelectorAll('p');
// p4[3].style.backgroundColor = 'lightblue';

// cara 3
// const sectionB = document.getElementById('b');
// const p4 = sectionB.querySelector('p');
// p4.style.backgroundColor = 'orange';

// cara 4
// const sectionB = document.querySelector('section#b');
// const p4 = sectionB.getElementsByTagName('p')[0];
// p4.style.backgroundColor = 'orange';