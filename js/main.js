/**
 * Variables
 */

var imageHero = document.getElementById("image-hero");
var header = document.querySelector("header");
var headerPadding = header.style.paddingBottom;


function adjustHero(){
    var height = document.getElementById("image-hero").offsetHeight;
    console.log(height);
    header.style.paddingBottom = headerPadding + (height / 2)  + "px";
}

window.addEventListener("load", function(){
    console.log("ayuda load");
    adjustHero();
})

window.addEventListener("resize", function(){
    console.log("ayuda resize");
    adjustHero();
})