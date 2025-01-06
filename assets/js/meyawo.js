
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});

function filterCertificates(category) {
    const buttons = document.querySelectorAll('.btn-filter');
    const certificates = document.querySelectorAll('.certificate');

    // Remove active class from all buttons
    buttons.forEach(button => button.classList.remove('active'));

    // Add active class to the clicked button
    event.target.classList.add('active');

    // Filter certificates
    certificates.forEach(cert => {
        if (category === 'all' || cert.classList.contains(category)) {
            cert.classList.add('active');
            cert.style.display = 'block'; // Show matching category
        } else {
            cert.classList.remove('active');
            cert.style.display = 'none'; // Hide others
        }
    });
}

// Show all certificates on page load
document.addEventListener('DOMContentLoaded', () => {
    filterCertificates('all');
});

 // Fungsi untuk memfilter elemen sertifikat berdasarkan kategori
 function filterCertificates(category) {
    // Dapatkan semua elemen sertifikat
    const items = document.querySelectorAll('#certificateGallery .col-md-4');

    // Iterasi setiap elemen
    items.forEach(item => {
        // Jika kategori adalah 'all', tampilkan semua elemen
        // Jika elemen memiliki kategori yang sesuai, tampilkan
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block'; // Tampilkan elemen
        } else {
            item.style.display = 'none'; // Sembunyikan elemen
        }
    });

    // Atur tombol aktif
    const buttons = document.querySelectorAll('.btn.btn-filter');
    buttons.forEach(button => button.classList.remove('active'));

    // Tambahkan kelas aktif pada tombol yang diklik
    event.target.classList.add('active');
}
