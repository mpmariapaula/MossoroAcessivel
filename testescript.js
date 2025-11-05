let slideindice = 0;
mostrarslides();

function mostrarslides() {
let i;
let slides = document.getElementsByClassName("local");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

slideindice++;

if (slideindice > slides.length) {
slideindice = 1;
}
slides[slideindice-1].style.display = "block";
setTimeout(mostrarslides, 2000);
}