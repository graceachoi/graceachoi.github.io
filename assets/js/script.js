$(document).ready(function() {


//CONSOLE LOG
// $(document).scroll(function() {
//    console.log($(window).scrollTop());
// });

$(function() {
   $('body').removeClass('fade-out');
});

$(".linkcontact").click(function() {
  $('.section2.contact').show();
});



$('.link.contact').click(function(e){
    $('.section.about').fadeOut('fast', function(){
        $('.section2.contact').fadeIn('fast');
    });
});


$('.link.about').click(function(e){
	$('.section2.contact').fadeOut('fast', function(){
		$('.section.about').fadeIn('fast');
	});
});



});