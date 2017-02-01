 
$(document).ready(function(){
$('.container-fluid').imagesLoaded( function(){
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
let aboutOffset = $("footer #about").offset().top-10;
let port = $("nav #port");
let ab = $("nav #ab");
let scrollTop = $(this).scrollTop();
let item = $(".grid .item");


if(scrollTop > portfolioOffset&& scrollTop < aboutOffset) {
	port.addClass("selected");
	ab.removeClass("selected");

}else if(scrollTop > aboutOffset) {
	ab.addClass("selected");
	port.removeClass("selected");
}else if(scrollTop < portfolioOffset) {
	port.removeClass("selected");
	ab.removeClass("selected");

}

item.each(function() {


let itemOffset = $(this).offset().top-500;

		if(scrollTop > itemOffset) { 
		$(this).css("opacity", "1").css("transform", "translate3d(0,0,0)").css("transition", "opacity 1.5s, transform 1s");
		console.log("worked?");
	}
		});





});


});