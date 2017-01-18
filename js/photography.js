

function load(img)
{
  img.fadeOut(0, function() {
    img.fadeIn(2000);
  });
}
$('.lazyload').lazyload({load: load});


	$($(".menuitem a")).on('click', function(e) {
   e.preventDefault();
//varastoi klikatun hashin
   let hash = this.hash;
   //luodaananimaatio, sekunnin kesto
   $('html, body').animate({
    //kuinka monta pikseliä klikatun hashin yläpuolella on ikkunassa
    //tämä on se matka jonka animaatio kulkee klikattaessa, joko ylös tai alas
       scrollTop: $(hash).offset().top-100
     },1000, function(){
        //lisää urliin klikatun hashin
       window.location.hash = hash;
     });

}); 


$(window).scroll(function() {

let portfolioOffset = $("#portfolio").offset().top-120;
let aboutOffset = $("footer #about").offset().top-120;
let port = $("nav #port");
let ab = $("nav #ab");
let scrollTop = $(this).scrollTop();

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



});


//mansonrykoodi
/*

 $('.container-fluid').masonry({
        itemSelector: '.item',
        columnWidth: 607.55

});
*/