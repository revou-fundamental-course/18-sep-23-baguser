// toggle class active
const navbarNav = document.querySelector(".navbar-menu");

//ketika hamburger di klik
document.querySelector("#hamburger-menu").onclick = (e) => {
  //   console.log("sudah masuk");
  e.preventDefault();
  navbarNav.classList.toggle("active");
};

// klik diluar side bar untuk menghilangkan nav
const hamburger = document.getElementById("hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.targert)) {
    navbarNav.classList.remove("active");
  }
});

// validasi form

const form = document.querySelector(".contact-form form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const optionSelect = document.getElementById("option");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Validasi nama (minimal 3 karakter)
  if (nameInput.value.trim().length < 3) {
    alert("Nama harus minimal 3 karakter");
    return;
  }

  // Validasi email dengan pola regex
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!emailPattern.test(emailInput.value)) {
    alert("Email tidak valid");
    return;
  }

  // Validasi pilihan yang dipilih
  if (optionSelect.value === "") {
    alert("Pilih salah satu opsi");
    return;
  }

  // Jika semua validasi berhasil
  alert("Formulir berhasil dikirim!");

  // Mengosongkan formulir setelah pengiriman berhasil
  nameInput.value = "";
  emailInput.value = "";
  optionSelect.selectedIndex = 0; // Mengembalikan pilihan ke "Select Option"
});
