var toTopButton = document.getElementById("to-top-button");

// When the user scrolls down 200px from the top of the document, show the button
window.onscroll = function () {
	if (
		document.body.scrollTop > 200 ||
		document.documentElement.scrollTop > 200
	) {
		toTopButton.classList.remove("hidden");
	} else {
		toTopButton.classList.add("hidden");
	}
};

// When the user clicks on the button, smoothy scroll to the top of the document
function goToTop() {
	window.scrollTo({ top: 0, behavior: "smooth" });
}

//carousel
var cont = 0;

function loopSlider() {
	var xx = setInterval(function () {
		switch (cont) {
			case 0: {
				$("#slider-1").fadeOut(400);
				$("#slider-2").delay(400).fadeIn(400);
				$("#sButton1").removeClass("bg-slate-900");
				$("#sButton1").addClass("bg-slate-300");
				$("#sButton2").addClass("bg-slate-900");

				cont = 1;
				break;
			}
			case 1: {
				$("#slider-2").fadeOut(400);
				$("#slider-3").delay(400).fadeIn(400);
				$("#sButton2").removeClass("bg-slate-900");
				$("#sButton2").addClass("bg-slate-300");
				$("#sButton3").addClass("bg-slate-900");
				cont = 2;
				break;
			}
			case 2: {
				$("#slider-3").fadeOut(400);
				$("#slider-1").delay(400).fadeIn(400);
				$("#sButton3").removeClass("bg-slate-900");
				$("#sButton3").addClass("bg-slate-300");
				$("#sButton1").addClass("bg-slate-900");
				cont = 0;
				break;
			}
		}
	}, 5000);
}

function reinitLoop(time) {
	clearInterval(xx);
	setTimeout(loopSlider(), time);
}

function sliderButton1() {
	$("#slider-2").fadeOut(400);
	$("#slider-3").fadeOut(400);
	$("#slider-1").delay(400).fadeIn(400);
	$("#sButton2").removeClass("bg-slate-900");
	$("#sButton3").removeClass("bg-slate-900");
	$("#sButton1").addClass("bg-slate-900");
	reinitLoop(4000);
	cont = 0;
}

function sliderButton2() {
	$("#slider-1").fadeOut(400);
	$("#slider-3").fadeOut(400);
	$("#slider-2").delay(400).fadeIn(400);
	$("#sButton1").removeClass("bg-slate-900");
	$("#sButton3").removeClass("bg-slate-900");
	$("#sButton2").addClass("bg-slate-900");
	reinitLoop(4000);
	cont = 1;
}

function sliderButton3() {
	$("#slider-1").fadeOut(400);
	$("#slider-2").fadeOut(400);
	$("#slider-3").delay(400).fadeIn(400);
	$("#sButton1").removeClass("bg-slate-900");
	$("#sButton2").removeClass("bg-slate-900");
	$("#sButton3").addClass("bg-slate-900");
	reinitLoop(4000);
	cont = 2;
}

$(window).ready(function () {
	$("#slider-2").hide();
	$("#slider-3").hide();
	$("#sButton1").addClass("bg-slate-900");
	loopSlider();
});
