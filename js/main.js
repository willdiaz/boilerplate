// get viewport width and height
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

// use to prevent onScroll events from firing onLoad
var initialScroll = false;
var header = document.getElementsByClassName('header')[0];
var hero = document.getElementsByClassName('hero-image')[0];

window.addEventListener("scroll", function() {
    if (initialScroll) {
        if (header.getBoundingClientRect().top < 0) {
            header.classList.add('header--fixed');
        }
        if (hero.getBoundingClientRect().top === 0) {
            header.classList.remove('header--fixed');
        }
    } else {
        initialScroll = true;
    }
});