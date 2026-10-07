const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");


// MENU MOBILE

menuBtn.addEventListener("click", function () {

navLinks.classList.toggle("active");

if (navLinks.classList.contains("active")) {
menuBtn.textContent = "✕";
} else {
menuBtn.textContent = "☰";
}

});


// FECHAR MENU AO CLICAR

document.querySelectorAll(".nav-links a").forEach(function(link) {

link.addEventListener("click", function() {

navLinks.classList.remove("active");

menuBtn.textContent = "☰";

});

});


// FORMULÁRIO DE CONTATO

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

event.preventDefault();

const nome = document.getElementById("nome").value;
const email = document.getElementById("email").value;
const telefone = document.getElementById("telefone").value;
const mensagem = document.getElementById("mensagem").value;


const assunto =
encodeURIComponent(
"Contato pelo portfólio - " + nome
);


const corpo =
encodeURIComponent(
"Nome: " + nome +
"\nE-mail: " + email +
"\nTelefone: " + telefone +
"\n\nMensagem:\n" + mensagem
);


window.location.href =
"mailto:pedroflucas7@gmail.com" +
"?subject=" + assunto +
"&body=" + corpo;

});
