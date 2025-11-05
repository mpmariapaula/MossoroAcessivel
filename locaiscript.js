let slideindice = 0;
mostrarslides();

function mostrarslides() {
let i;
let slides = document.getElementsByClassName("local");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}
slideindice++;

if (slideindice > slides.length) {
slideindice = 1;
}
for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
slides[slideindice-1].style.display = "block";
dots[slideindice-1].style.display += " active";
setTimeout(mostrarslides, 2000);
}