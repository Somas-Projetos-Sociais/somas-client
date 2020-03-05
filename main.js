var carousel = document.getElementById("carousel")
var transition = document.getElementById("transition")
var nav = document.getElementById("navigation")
var bg = document.getElementById("home")
var letterChange = document.getElementById("letter-change")
var count = 1
var text = ['transformar', 'educar', 'ter voz', 'todos']
var imgs = ['imgs/img-a.png', 'imgs/img-b.png', 'imgs/img-c.png', 'imgs/img-d.png']

// setInterval(function(){ carousel.style.display = "none" }, 3000);
setInterval(function() {

    if (count > 3) {
        count = 0
        letterChange.innerHTML = `${text[count]}`
        bg.style.background = `url('${imgs[count]}')`
        bg.style.backgroundSize = "cover"
        count++
    } else {
        letterChange.innerHTML = `${text[count]}`
        bg.style.background = `url('${imgs[count]}')`
        bg.style.backgroundSize = "cover"
        count++
    }

}, 2000)


function navChange() {

    var x = window.innerHeight
    var y = window.scrollY

    if (y > x - 1) {
        document.getElementById("navigation").style.backgroundColor = "#3D348B"
    } else if (y < x) {
        document.getElementById("navigation").style.background = "#3D348B"
    }
}

function action() {
    document.getElementById("rect-a").classList.remove("st4")
    document.getElementById("rect-a").classList.add("st9")
}


var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}