// SLIDE SHOW IMAGE PART JAVA SCRIPT 
slideIndex = 3;
slideShow(slideIndex);

// to show he slides of previous part 
function prevImage(x) {
	slideIndex = slideIndex + x;
	slideShow(slideIndex);
};

// to show slides of next part 
function nextImage(x) {
	slideIndex = slideIndex + x;
	slideShow(slideIndex);
};

// slideshow function to show overall slides 
function slideShow(num) {
	let sliderImage = document.getElementsByClassName('slider');
	for (y of sliderImage) {
		y.style.display = "none";
	}
	if (num == sliderImage.length) {
		num = 0;
		slideIndex = 0;
	}
	if (num < 0) {
		num = sliderImage.length - 1;
		slideIndex = sliderImage.length - 1;
	}
	sliderImage[num].style.display = 'block'
}


