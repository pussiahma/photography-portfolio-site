$(".nav .menuitem a").click(function() {
  $(".nav .menuitem a").removeClass("selected");
   $(this).addClass("selected");
    return false;
});

$(".nav .headline a").click(function() {
	$(".nav .menuitem a").removeClass("selected");
console.log("header clicked");
});


	$($("nav .menuitem a")).on('click', function(e) {
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



//mansonrykoodi


 $('.container-fluid').masonry({
        itemSelector: '.item',
        columnWidth: 607.55

});