$(document).ready(function() {
	new WOW().init();

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	$(".header .btn-menu").click(function(){
		$(".header-menu").css("display", "block");
	});

	$(".header-menu li").click(function(){
		$(".header-menu").css("display", "none");
	});

	$(".header-menu .close").click(function(){
		$(".header-menu").css("display", "none");
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});


	

	function setProgress(index) {
	  const calc = ((index + 1) / ($slider.slick('getSlick').slideCount)) * 100;

	  $progressBar
	    .css('background-size', `${calc}% 100%`)
	    .attr('aria-valuenow', calc);


	}

	const $slider = $('.slider');
	const $progressBar = $('.progress');
	const $progressBarLabel = $('.slider__label');

	$slider.on('beforeChange', function(event, slick, currentSlide, nextSlide) {   
	  setProgress(nextSlide);
	});

	$slider.on('afterChange', function(event, slick, currentSlide) {
	     $progressBarLabel.text("0" + (currentSlide + 1));
	  });

	$slider.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 400,
	  fade: true,
	  asNavFor: '.slider-nav',
	  appendArrows: $('.arrows'),
      prevArrow: '<div id="prev"><img src="img/prev.svg"></div>',
      nextArrow: '<div id="next"><img src="img/next.svg"></div>',
	});  

	setProgress(0);


	$('.slider-nav').slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  speed: 400,
	  fade: true,
	  asNavFor: '.slider-for',
	  dots: false,
	  arrows: false
	});

	$( ".slick-slide" ).each(function( index ) { 
	   $( this ).css('margin-top',
	   ($('.slider').height()-$(this).height())/2+'px' );
	 });



});


