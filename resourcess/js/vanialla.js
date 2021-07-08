//var navBar = document.querySelector('nav');
//window.onscroll = function () {
//
//
//    if (document.body.scrollTop > 530 || document.documentElement.scrollTop > 530) {
//        navBar.classList.add('sticky');
//    }else{
//        navBar.classList.remove('sticky');
//    }
//}
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 100
});