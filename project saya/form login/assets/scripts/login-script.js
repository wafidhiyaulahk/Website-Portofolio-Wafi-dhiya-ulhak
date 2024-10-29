

/* membuat variabel untuk setiap elemen view*/
const loginFormElement = document.querySelector('#loginForm');
const inputEmailElement = document.querySelector('#inputEmail');
const inputPasswordElement = document.querySelector('#inputPassword');

/* memuat variabel untuk menyimpan informasi email dan password */
const expectedEmail = 'admin@unpam.com';
const expectedPassword = '123';

/* menambah aksi klik pada button*/
loginFormElement.addEventListener('submit', function(event) {
    event.preventDefault();
    // TODO 1 : Mendapatkan input email dan password pengguna dari form.
    const email = inputEmailElement.value;
    const password = inputPasswordElement.value;
  
    
    /* jika sesuai program akan pidah ke home*/
       if (email == expectedEmail && password == expectedPassword) {
        goToHome();
    } else { /* dan jika tidak sesuai akan menampilkan informasi false*/ 
        showPopUp();
    }
});
