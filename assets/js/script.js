// Mengambil elemen <nav> dari dokumen
const myNav = document.getElementById("navbar");
// Mengambil elemen <body> dari dokumen
const body = document.body;
// Mengambil elemen dengan kelas "navbar-collapse" dari dokumen
const navbarCollapse = document.querySelector(".navbar-collapse");
// Mengambil elemen dengan kelas "navbar-toggler" dari dokumen
const navbarToggler = document.querySelector(".navbar-toggler");

// Menambahkan event listener untuk event "scroll" pada elemen <body>
body.addEventListener("scroll", () => {
  if (body.scrollTop > 80) {
    // Jika posisi scroll lebih besar dari 80 piksel
    myNav.classList.add("nav-color"); // Menambahkan kelas "nav-color" ke elemen <nav>
  } else if (body.scrollTop < 80) {
    // Jika posisi scroll kurang dari 80 piksel
    myNav.classList.remove("nav-color"); // Menghapus kelas "nav-color" dari elemen <nav>
  }
});

navbarToggler.addEventListener("click", () => {
  // Menambahkan event listener untuk event "click" pada elemen dengan kelas "navbar-toggler"
  if (navbarToggler.classList.contains("collapsed") && body.scrollTop < 150) {
    // Jika elemen memiliki kelas "collapsed" dan posisi scroll kurang dari 150 piksel
    myNav.classList.remove("nav-color"); // Menghapus kelas "nav-color" dari elemen <nav>
  } else {
    myNav.classList.add("nav-color"); // Jika kondisi di atas tidak terpenuhi, menambahkan kelas "nav-color" ke elemen <nav>
  }
});
