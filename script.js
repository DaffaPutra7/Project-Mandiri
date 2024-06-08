$(document).ready(function() {
    // Menambahkan smooth scrolling ke semua link
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            // Menghentikan aksi default
            event.preventDefault();

            // Menyimpan hash
            var hash = this.hash;

            // Menggunakan metode animate() jQuery untuk menambahkan scrolling halaman yang halus
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                // Menambahkan hash (#) ke URL ketika selesai scrolling (perilaku klik default)
                window.location.hash = hash;
            });
        }
    });

    // Fungsi pencarian destinasi
    $("#search").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $(".carousel-item").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
    });
});