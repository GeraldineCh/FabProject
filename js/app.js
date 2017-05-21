//$(document).foundation()

/*$(document).ready(function() {
	var owl = $('.owl-carousel');
	owl.owlCarousel({
		margin: 10,
		nav: true,
		loop: true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 3
			},
			1000: {
				items: 5
			}
		}
	})
})*/




    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object

    $(document).on('ready', function() {
   $(".regular").slick({
     infinite: true,
     slidesToShow: 5,
     slidesToScroll: 5,
     draggable: false
   });
 });

  /*  $(document).on('ready', function() {
     $('.your-class').slick({
       dots: true,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3
     });*/
