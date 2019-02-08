/* HEADER */
window.onload = function() {scrollFunction()};
window.onscroll = function() {scrollFunction()};

// Scroll Function
function scrollFunction() {
    var header = document.getElementById('header');

    if(document.documentElement.scrollTop > 70) {
        if(!header.classList.contains('navbar-fixed')) {
            header.classList.add('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '70px';
            header.style.display = 'none';
            setTimeout(function(){
                header.style.display = 'block';
            }, 40);
        }
    } else {
        if(header.classList.contains('navbar-fixed')) {
            header.classList.remove('navbar-fixed');
            document.getElementsByTagName('body')[0].style.marginTop = '0';
        }
    }
}

// toggel Button 
function menuToggle() {
    document.getElementById('menu').classList.toggle('show');
}

document.getElementById('toggleBtn').addEventListener('click', menuToggle);

/* Image Slider Start */

/* WELCOME AREA */
var imageSlideIndex = 1;

//showImageSlides(imageSlideIndex);

plusImageSlides(1);

function plusImageSlides(n) {
	showImageSlides(imageSlideIndex += n);
}

function currentImageSlide(n) {
	showImageSlides(imageSlideIndex = n);
}

function showImageSlides(n) {
	var i;
	var slides = document.getElmentsByClassName('image-slide');
	var dots = document.getElmentsByClassName('dot');

	if(n > slides.length) { imageSlideIndex = 1 }
	if(n < 1) { imageSlideIndex = slides.length }
	
	for(i = 0; i < slides.length; i++) {
		slides[i].style.display = 'none';
	}

	for(i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(' active', '');
	}

	slides[imageSlideIndex-1].style.display = 'block';
	dots[imageSlideIndex-1].className += ' active';
}
/* Image Slider End */