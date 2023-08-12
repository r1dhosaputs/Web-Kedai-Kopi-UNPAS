// toggle class active hamburger menu
const navbarNav = document.querySelector('.navbar-nav');

//ketika hamburger menu di klik
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchBtn = document.querySelector('#search-btn');
const sForm = document.querySelector('.search-form');
const sBox = document.querySelector('#search-box'); // biar langsung ke klik searchnya


hamburgerMenu.addEventListener('click', function(d){
    navbarNav.classList.toggle('active');
    d.preventDefault()
});

// klik diluar sidebar untuk menghilangkan nav
// ketika di klick dimanapun di halaman
document.addEventListener('click', function(f){
    // jika klik dilaur hamburger menu dan diluar navbar
    if (!hamburgerMenu.contains(f.target) && !navbarNav.contains(f.target)) {
        navbarNav.classList.remove('active');
    }


});



// toggle class active utk search form

document.querySelector('#search-btn').onclick = (e) => { // e matikan aksi jika di klick teke atas lagi
    sForm.classList.toggle('active')
    sBox.focus()
    e.preventDefault()
}

document.addEventListener('click', function(c){
    if (!searchBtn.contains(c.target) && !sForm.contains(c.target)) {
        sForm.classList.remove('active')
    }
})


// Shopping cart
const shoppingCartIcon = document.querySelector("#shopping-cart-btn");
const shoppingCartAction = document.querySelector('.shopping-cart');

shoppingCartIcon.addEventListener('click', function(z){
    shoppingCartAction.classList.toggle('active')
    z.preventDefault()
});


document.addEventListener('click', function(x){
    if (!shoppingCartAction.contains(x.target)&& !shoppingCartIcon.contains(x.target)) {
        shoppingCartAction.classList.remove('active')
    }
});


// Shopping cart meliati 
const eyeIconBtn = document.querySelectorAll('.eye-icon');
const modalClass = document.querySelector('.modal')




eyeIconBtn.forEach(function(e) {
    
    e.addEventListener('click', function(epent) {
        modalClass.style.display = 'flex';
        epent.preventDefault()
    });
});


const closeBtn = document.querySelectorAll('.close-icon');

closeBtn.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        event.preventDefault();
        modalClass.style.display = 'none';
    });
});

// const cta = document.querySelectorAll('.cta');

// cta.forEach(function(element) {
//     element.addEventListener('click', function(event) {
//         event.preventDefault();
//         // Tambahkan kode aksi yang diinginkan di sini
//     });
// });

console.log(cta)

const pico = document.querySelector('.p-icon');
pico.addEventListener('click', function(df){
    df.preventDefault()
})

// Dalam contoh di atas, kita menggunakan metode forEach pada NodeList eyeIconBtn untuk mengiterasi melalui setiap elemennya dan menambahkan event listener ke masing-masing elemen.

// Dengan perubahan ini, setiap elemen dengan kelas eye-icon akan memiliki event listener yang ditetapkan, dan ketika salah satu elemen diklik, gaya tampilan modal akan diubah menjadi flex.











// const submitBtn = document.querySelector('.btn')

// const divPopUpBox = document.querySelector('.popupbox');
// const divBaru = document.createElement('div'); // stelah dibuat element div lalu masukkan class nya
// divBaru.classList.add('alert-box'); // yang ini class nya
// // buat text dalam div tadi
// const textBaru = document.createTextNode('Pesanmu Terkirim!');

// const closeDiv = document.createElement('div');
// const closeTextBaru = document.createTextNode('Close?');
// closeDiv.appendChild(closeTextBaru);

// divBaru.appendChild(textBaru);
// divBaru.appendChild(closeDiv);
// // style text baru di js aja
// divBaru.style.fontSize = '20px';
// divBaru.style.fontWeight = 'bold';
// divBaru.style.textAlign = 'center';
// divPopUpBox.style.marginTop = '76px';
// // close div 
// closeDiv.style.marginTop = '25px';
// closeDiv.style.border = '1px solid black'
// closeDiv.style.borderRadius = '15px';
// closeDiv.style.cursor = 'pointer';



// closeDiv.addEventListener('click', function(){

//     divPopUpBox.style.display = 'none';
//     window.location.reload(); // reload page setiap diklik button close jadi bisa submit pesan kita lagi.
// });

// submitBtn.addEventListener('click', function(){
//     divPopUpBox.appendChild(divBaru)
//     console.log("hi")
// });
