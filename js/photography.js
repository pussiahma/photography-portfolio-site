 
$(document).ready(function(){
$('.container-fluid').imagesLoaded(function(){
 $('.container-fluid').masonry({
        columnWidth: '.grid-sizer',
itemSelector: '.item',
isFitWidth: true

});
});

	$($(".menuitem a")).on('click', function(e) {
   e.preventDefault();
   let hash = this.hash;
   $('html, body').animate({
       scrollTop: $(hash).offset().top
     },1000, function(){

       window.location.hash = hash;
     });

}); 


$(window).on("scroll", function() {

let portfolioOffset = $("#portfolio").offset().top-120;
let aboutOffset = $("#footer").offset().top-300;
let port = $("nav #port");
let ab = $("nav #ab");
let scrollTop = $(this).scrollTop();
let item = $(".grid .item");
const back = $("#back");

if(scrollTop > portfolioOffset&& scrollTop < aboutOffset) {
	port.addClass("selected");
	ab.removeClass("selected");
	back.css("visibility", "hidden").css("transform", "scale(0)").css("transform", "translate3d(0,50%,0)").css("opacity", "0");

}else if(scrollTop > aboutOffset) {
	$overlay.fadeOut();
	$slide.fadeOut();
	$("header").css("background", "white");
	  $("body").css("background", "white");
	   $("nav").css("background", "white").css("border-bottom", "1px solid #ccc");
	  $(".header-img").css("opacity", "1");
  $(".img-responsive").css("opacity" ,"1");
  $("nav a").css("opacity", "1");
  $("body").css("overflow", "auto");


	ab.addClass("selected");
	port.removeClass("selected");

 back.css("visibility", "visible")
 .css("transform", "translate3d(0,0,0)")
 .css("opacity", "1")
 .css("transition", "transform 0.8s cubic-bezier(.33,.65,.83,.67) 0s, opacity 0.5s cubic-bezier(.33,.65,.83,.67) 0s");

}else if(scrollTop < portfolioOffset) {
	port.removeClass("selected");
	ab.removeClass("selected");
back.css("visibility", "hidden").css("transform", "scale(0)").css("transform", "translate3d(0,50%,0)").css("opacity", "0");
}

if(scrollTop < 300){
$overlay.fadeOut();
$slide.fadeOut();
$("header").css("background", "white");
  $("body").css("background", "white");
   $("nav").css("background", "white").css("border-bottom", "1px solid #ccc");
  $(".header-img").css("opacity", "1");
  $(".img-responsive").css("opacity" ,"1");
  $("nav a").css("opacity", "1");
  $("body").css("overflow", "auto");

  
}

item.each(function() {


let itemOffset = $(this).offset().top-500;

		if(scrollTop > itemOffset) { 
		$(this).css("opacity", "1").css("transform", "translate3d(0,0,0)").css("transition", "opacity 1.5s, transform 1s");
	
	}
		});





});




const $overlay = $('<div id="overlay"><p id="info">click image to open in new tab<p></div>');
const $image = $("<img>");
const $close = $('<div id="close"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" enable-background="new 0 0 26 26" height="26px" id="Layer_1" version="1.1" viewBox="0 0 26 26" width="26px" xml:space="preserve" style="&#10;    color: #ccc;&#10;"><g><polyline fill="#FFF" points="   649,137.999 675,137.999 675,155.999 661,155.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="white" points="   653,155.999 649,155.999 649,141.999  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2"/><polyline fill="white" points="   661,156 653,162 653,156  " stroke="#FFFFFF" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="2" style="&#10;    fill: #ccc;&#10;"/></g><g><path d="M11.312,12.766c0.194,0.195,0.449,0.292,0.704,0.292c0.255,0,0.51-0.097,0.704-0.292c0.389-0.389,0.389-1.02,0-1.409   L4.755,3.384c-0.389-0.389-1.019-0.389-1.408,0s-0.389,1.02,0,1.409L11.312,12.766z"/><path d="M17.407,16.048L28.652,4.793c0.389-0.389,0.389-1.02,0-1.409c-0.389-0.389-1.019-0.561-1.408-0.171L15.296,15   c0,0-0.296,0-0.296,0s0,0.345,0,0.345L3.2,27.303c-0.389,0.389-0.315,1.02,0.073,1.409c0.194,0.195,0.486,0.292,0.741,0.292   s0.528-0.097,0.722-0.292L15.99,17.458l11.249,11.255c0.194,0.195,0.452,0.292,0.706,0.292s0.511-0.097,0.705-0.292   c0.389-0.389,0.39-1.02,0.001-1.409L17.407,16.048z"/></g></svg></div>');
const $texts = $("<div class='captions'></div>");
const $prev = $("<span class='fa fa-angle-left' aria-hidden='true'></span>");
const $caption = $("<p id='title'></p>");
const $next = $("<span class='fa fa-angle-right' aria-hidden='true'></span>");
const $slideshowText = $("<h4 id='slideshow-text'>Slideshow</h4>");
const $slide = $('<div id="slide"></div>');
const $container = $(".container-fluid");

$overlay.append($image);
$overlay.prepend($slideshowText);
$overlay.prepend($close);
$overlay.append($texts);
$texts.append($prev);
$texts.append($caption);
$texts.append($next);

$container.prepend($slide);
$container.prepend($overlay);


function getImage(currentImage) {  
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");

    $image.attr("src", imageLocation);
    var captionText = $(currentImage).parent().children("h4").text();
    $caption.text(captionText);
}



$(".item a").on("click", function(e) {
	 if ($(window).width() > 760 && $(window).height() > 500) {
e.preventDefault();
getImage(this);
$prev.css("opacity", "0.8");
$next.css("opacity", "0.8");

$overlay.show();
$("body").css("overflow", "hidden");
$("body").css("background" ,"#333");
$(".item").css("opacity" ,"0.2");
$("header").css("background", "#333");
$("nav").css("background", "#333").css("border-bottom", "1px solid #000");
$(".header-img").css("opacity", "0.3");
$("nav a").css("opacity", "0.1");
console.log("layin' that over");

}

});

$close.on("click", function(){
  //Hide the overlay

  $overlay.fadeOut();
   $("nav").css("background", "white").css("border-bottom", "1px solid #ccc");
 $("header").css("background", "white");
  $("body").css("background", "white");
  $(".header-img").css("opacity", "1");
  $(".item").css("opacity" ,"1");
  $("nav a").css("opacity", "1");
  $("body").css("overflow", "auto");

});




$image.on("click", function() {

let img_url = $(this).attr("src");
window.open(img_url);

});

$next.on("click", function(){
  $prev.css("opacity", "0.8");
  imageParent = $(thisImage).parent().next();
    if(imageParent.length != 0){
      thisImage = $(imageParent).children("a");
    imageLocation = $(thisImage).attr("href");
    $image.attr("src", imageLocation);
   
}else{
  $next.css("opacity", "0.2");
}

getImage(thisImage);

});


$prev.on("click", function(){
  $next.css("opacity", "0.8");
  imageParent = $(thisImage).parentsUntil(".first-img").prev();
    if(imageParent.length != 0){
      thisImage = $(imageParent).children("a");
    imageLocation = $(thisImage).attr("href");
    $image.attr("src", imageLocation);
   
}else{
  $prev.css("opacity", "0.2");
}

getImage(thisImage);

});


$(window).resize(function() {

  $overlay.fadeOut();
  $slide.fadeOut();
   $("nav").css("background", "white").css("border-bottom", "1px solid #ccc");
 $("header").css("background", "white");
  $("body").css("background", "white");
  $(".header-img").css("opacity", "1");
  $(".item").css("opacity" ,"1");
$("nav a").css("opacity", "1");
$("body").css("overflow", "auto");




});




$slideshowText.on("click", function() {



imageLocation = $(thisImage).attr("href");
$overlay.hide();
$slide.fadeIn();
getImage(thisImage);
$("body").css("background", "black");
$(".item").css("opacity" ,"0.1");
$("header").css("background", "black");
$("nav").css("background", "black")
.css("border-bottom", "1px solid #000");
$("nav a").css("opacity", "0.1");



slideShow(imageLocation, slides());
getImage(thisImage);
console.log("WOW SUCH SLIDESHOW!");


});




function slideShow(current) {

let imageLocation = current;
$slide.css("background", "url(" + imageLocation +") center center no-repeat");
$slide.css("background-size", "cover");


}


function slides() {

	interval = setInterval(function() {
		imageParent = $(thisImage).parent().next();
	 if(imageParent.length != 0){
      thisImage = $(imageParent).children("a");
      imageLocation = $(thisImage).attr("href");
    slideShow(imageLocation);


}

if(imageParent.length < 1) {
		clearInterval(interval);
	
	$slide.fadeOut();
	$overlay.show();
	$("body").css("background", "#333");
$(".item").css("opacity" ,"0.2");
$("header").css("background", "#333");
$("nav").css("background", "#333").css("border-bottom", "1px solid #000");
	
	getImage(thisImage);
	}
	},2800);





$slide.on("click", function() {

$slide.fadeOut();
$overlay.show();
clearInterval(interval);
getImage(thisImage);
$("body").css("background", "#333");
$(".item").css("opacity" ,"0.5");
$("header").css("background", "#333");
$("nav").css("background", "#333").css("border-bottom", "1px solid #000");
});


$(window).resize( function() {
$slide.fadeOut();
clearInterval(interval);
getImage(thisImage);

});



}


});
