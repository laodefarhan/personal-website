// ========== Konfigurasi efek typed JS membuat efek ketik secara real-time ==========
document.addEventListener('DOMContentLoaded', function() {
    var options = {
        strings: ["Web Developer", "Frontend Developer", "Freelancer"],
        typeSpeed: 100, // kecepatan mengetik (milidetik per karakter)
        backSpeed: 100, // kecepatan menghapus (milidetik per karakter)
        backDelay: 1000, // jeda setelah selesai mengetik sebelum menghapus (milidetik)
        loop: true // loop efek mengetik
    };

    var typed = new Typed(".multiple-text", options);
});

// ========== Konfigurasi efek hover lingkaran pada persentase ==========
document.addEventListener("DOMContentLoaded", () => {
    const skills = document.querySelectorAll(".skill");

    skills.forEach((skill) => {
        const progressCircle = skill.querySelector(".progress");
        const percentText = skill.querySelector(".percent");
        const percent = parseInt(percentText.textContent);

        // Hitung stroke-dashoffset
        const offset = 314 - (314 * percent) / 100;
        progressCircle.style.strokeDashoffset = offset;
    });
});

// ========== Konfigurasi tombol hanya muncul jika pengguna menggulir keluar dari bagian home ==========
document.addEventListener("DOMContentLoaded", function () {
    const backToTop = document.querySelector(".back-to-top");
    const homeSection = document.querySelector("#home");

    if (!homeSection || !backToTop) return; // Pastikan elemen ditemukan sebelum melanjutkan

    function checkScroll() {
        const homeHeight = homeSection.offsetHeight;
        
        // Jika pengguna menggulir melewati tinggi home section, tampilkan tombol
        if (window.scrollY > homeHeight) {
            backToTop.style.opacity = "1";
            backToTop.style.visibility = "visible";
        } else {
            backToTop.style.opacity = "0";
            backToTop.style.visibility = "hidden";
        }
    }

    // Event untuk memantau pergerakan scroll
    window.addEventListener("scroll", checkScroll);

    // Jalankan fungsi saat halaman dimuat untuk memastikan status awal tombol
    checkScroll();
});

// ========== Konfigurasi toggle menu icon ==========
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar ul li a");

// Toggle menu saat ikon diklik
menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("active");
});

// Tutup menu saat link diklik
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navbar.classList.remove("active"); // Menutup navbar
    });
});

// ========== Konfigurasi menampilkan pesan error pada form contact ==========
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Mencegah pengiriman data
        console.log("Formulir dihentikan, data tidak dikirim."); // Debugging

        let errors = [
            "Terjadi kesalahan pada sistem, silakan coba lagi nanti. Mohon maaf, permintaan Anda tidak dapat diproses saat ini. Formulir mengalami masalah, harap hubungi kami melalui media lain."
        ];

        // Menampilkan pesan error acak
        alert(errors[Math.floor(Math.random() * errors.length)]);
    });
});