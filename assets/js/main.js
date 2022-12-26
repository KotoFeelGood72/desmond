


let $body,
	windowHeight,
	windowWidth,
	degree = 0.0174532925,
	mediaPoint1 = 1024,
	mediaPoint2 = 768,
	mediaPoint3 = 480,
	mediaPoint4 = 320,
	devStatus = window.productionStatus === 'development';
	const win = document.body




gsap.registerPlugin(ScrollTrigger);


$(document).ready(function ($) {
	$body = $('body');
	loader();
});

$(window).on('load', function () {
	updateSizes();
	loadFunc();

	if(windowWidth > mediaPoint1) {
		customCursor();
		animateStart();
		allDefautAnim();
	} else {
		animateStart();
		// allDefautAnim();
	}
});

$(window).on('resize', function () {
	resizeFunc();
});

$(window).on('scroll', function () {
	scrollFunc();
});

function loadFunc() {
	calcViewportHeight();
}

function resizeFunc() {
	updateSizes();

	calcViewportHeight();
}

function scrollFunc() {}

function calcViewportHeight() {
	if (isMobile.apple.phone || isMobile.android.phone || isMobile.seven_inch) {
		var vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty('--vh', vh + 'px');
	}
}

function updateSizes() {
	windowWidth = window.innerWidth;
	windowHeight = window.innerHeight;
}

// if ('objectFit' in document.documentElement.style === false) {
// 	document.addEventListener('DOMContentLoaded', function () {
// 		Array.prototype.forEach.call(
// 			document.querySelectorAll('img[data-object-fit]'),
// 			function (image) {
// 				(image.runtimeStyle || image.style).background =
// 					'url("' +
// 					image.src +
// 					'") no-repeat 50%/' +
// 					(image.currentStyle
// 						? image.currentStyle['object-fit']
// 						: image.getAttribute('data-object-fit'));

// 				image.src =
// 					"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" +
// 					image.width +
// 					"' height='" +
// 					image.height +
// 					"'%3E%3C/svg%3E";
// 			}
// 		);
// 	});
// }



function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min)) + min;
}

function getRandom(min, max) {
	return Math.random() * (max - min) + min;
}

var styles = ['color: red', 'background: black'].join(';');
var message = 'Developed by KotoFeelGood Arkada-Studio https://arkada-web.ru/';
console.info('%c%s', styles, message);














function customCursor()  {
// CURSOR
var cursor = $(".cursor"),
follower = $(".circle");

var posX = 0,
    posY = 0;

var mouseX = 0,
    mouseY = 0;

TweenMax.to({}, 0.016, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / 6;
    posY += (mouseY - posY) / 6;

    TweenMax.set(follower, {
        css: {
        left: posX - 23.5,
        top: posY - 23.5
        }
    });

    TweenMax.set(cursor, {
        css: {
        left: mouseX,
        top: mouseY
        }
    });
  }
});

$(document).on("mousemove", function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});
// yellow circle
const el = document.querySelectorAll('.animation_el a');
cursor.addClass("visible")
		follower.addClass("visible")
el.forEach((item) => {
	item.addEventListener('mouseover', function() {
		cursor.addClass("active")
		follower.addClass("active")
	})
	item.addEventListener('mouseout', function() {
		cursor.removeClass("active");
		follower.removeClass("active");
	})
})
}



// function splitTitle() {
// 	const title = document.querySelector('.start_title')

// 	const splitText = (el) => {
// 		if(el) {
// 			el.innerHTML = el.textContent.replace(/(\S*)/g, m => {
// 			return `<div class="main_title">` +
// 					m.replace(/(-|#|@)?\S(-|#|@)?/g, "<div class='letter'>$&</div>") +
// 					`</div>`;
// 			});
// 		}
// 		return el;
// 	};
	
// 	const split = splitText(title);
	
// 	function random(min, max){
// 		return (Math.random() * (max - min)) + min;
// 	}
// 	if(split) {
// 		Array.from(split.querySelectorAll('.letter')).forEach((el, idx) => {
// 			TweenMax.from(el, 1.5, {
// 				opacity: 0,
// 				scale: .1,
// 				x: random(-500, 500),
// 				y: random(-500, 500),
// 				z: random(-500, 500),
// 				delay: idx * 0.01,
// 				repeat: 0,
// 			})
// 		});
// 	}
// }

function animateImg(el, dur, delay) {
	const img = document.querySelector(`.${el}`);
	if(img) {
		const imgAnimate = gsap.to(img, {
			x: 0,
			width: "100%",
			autoAlpha: 1,
			duration: dur,
			// ease: "power4.out",
			delay: delay
	});
	}

}

function visibleEl(el, dur, delay) {
	const item = document.querySelectorAll(`.${el}`)
	if(item) {
		const itemAnimate = gsap.to(item, {
			x: 0,
			autoAlpha: 1,
			duration: dur,
			ease: "power4.out",
			delay: delay
	});
	}
}




function animateStart() {

	if(windowWidth > mediaPoint1) {
		// splitTitle();
		if($('.start')[0]) {
			visibleEl('start_logo', .7, 1.7)
		}
	}
	visibleEl('start_bottom', .7, 1.7)
	animateImg('start_img', 3);


	animateImg('hero_img img', .7, () => {
		visibleEl('hero_logotype', .3, .7)
	});
}


function allDefautAnim(bottom = false, start = '-=30% center', end = 'bottom') {
	const animationList = Array.from(document.querySelectorAll('.sec_anim')).map(function(el) {

		console.log(el)
		const arr = Array.from(el.querySelectorAll('.el_anim')).map(function (item, index) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				ease: 'none',
				// markers: true,
			})
			tl.fromTo(item, {
				y: 100, 
				duration: .4,
				autoAlpha: 0,
			}, {
				y: 0,
				autoAlpha: 1,
				delay: 0.2 + (0.2 * index),
			});
		});
	});



	const animationImgList = Array.from(document.querySelectorAll('.img_anim')).map(function(el) {

		console.log(el)
		const arr = Array.from(el.querySelectorAll('.el_img_anim')).map(function (item, index) {
			const tl = gsap.timeline();
			ScrollTrigger.create({
				animation: tl,
				trigger: el,
				start: start,
				end: end,
				ease: 'none',
				// markers: true,
			})
			tl.fromTo(item, {
				y: 5, 
				duration: .3,
				autoAlpha: 0,
			}, {
				y: 0,
				autoAlpha: 1,
				delay: 0.1 + (0.1 * index),
			});
		});
	});
}




function loader() {

	const loader = document.querySelector('.loader')

	loader.classList.add('hidden')
}


























































