/**
 * Variables
 */

var imageHero = document.getElementById("image-hero");
var header = document.querySelector("header");
var main = document.querySelector("main");
var headerPadding = header.style.paddingBottom;
var mainPadding = header.style.paddingTop

function adjustHero(){
    var height = document.getElementById("image-hero").offsetHeight;
    console.log(height);
    header.style.paddingBottom = headerPadding + (height / 2)  + "px";
    main.style.paddingTop = mainPadding+ (height / 2) + 'px';
}

window.addEventListener("load", function(){
    adjustHero();
})

window.addEventListener("resize", function(){
    adjustHero();
})