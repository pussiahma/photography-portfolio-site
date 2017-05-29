 
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


$(window).scroll(function() {

let portfolioOffset = $("#portfolio").offset().top-120;
let aboutOffset = $("#footer").offset().top-300;
let port = $("nav #port");
let ab = $("nav #ab");
let scrollTop = $(this).scrollTop();
let item = $(".grid .item");


if(scrollTop > portfolioOffset&& scrollTop < aboutOffset) {
	port.addClass("selected");
	ab.removeClass("selected");

}else if(scrollTop > aboutOffset) {
	$overlay.fadeOut();
	  $("body").css("background", "white");
  $(".img-responsive").css("opacity" ,"1");

	ab.addClass("selected");
	port.removeClass("selected");
}else if(scrollTop < portfolioOffset) {
	port.removeClass("selected");
	ab.removeClass("selected");

}

if(scrollTop < 300){
$overlay.fadeOut();
  $("body").css("background", "white");
  $(".img-responsive").css("opacity" ,"1");
}

item.each(function() {


let itemOffset = $(this).offset().top-500;

		if(scrollTop > itemOffset) { 
		$(this).css("opacity", "1").css("transform", "translate3d(0,0,0)").css("transition", "opacity 1.5s, transform 1s");
	
	}
		});





});


var $overlay = $('<div id="overlay"></div>');
var $image = $("<img>");
var $close = $("<div id='close'><i class='fa fa-close' aria-hidden='true'></i></div>");
var $texts = $("<div class='captions'></div>");
var $prev = $("<span class='fa fa-angle-left' aria-hidden='true'></span>");
var $caption = $("<p id='title'></p>");
var $next = $("<span class='fa fa-angle-right' aria-hidden='true'></span>");


$overlay.append($image);
$overlay.prepend($close);
$overlay.append($texts);
$texts.append($prev);
$texts.append($caption);
$texts.append($next);


$(".container-fluid").prepend($overlay);


function getImage(currentImage) {  
    thisImage = currentImage;
    var imageLocation = $(currentImage).attr("href");

    $image.attr("src", imageLocation);
console.log(thisImage);
    var captionText = $(currentImage).parent().children("h4").text();
    console.log($(currentImage).parent());
    $caption.text(captionText);
}



$(".item a").on("click", function(e) {
	 if ($(window).width() > 768) {
e.preventDefault();
getImage(this);
$prev.css("opacity", "0.8");
$next.css("opacity", "0.8");
console.log("what_is_this");
$overlay.show();
$("body").css("background" ,"#333");
$(".img-responsive").css("opacity" ,"0.5");


}else{
let url = $(this).attr("href");
window.open(url);
}

});

$close.on("click", function(){
  //Hide the overlay

  $overlay.fadeOut();
  $("body").css("background", "white");
  $(".img-responsive").css("opacity" ,"1");

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
  $("body").css("background", "white");
  $(".img-responsive").css("opacity" ,"1");



});


});