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


	$("header .btn-menu").click(function(){
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
      prevArrow: '<div id="prev"><svg width="20" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.4 7.2H2.44l6.112-5.82A.8.8 0 1 0 7.448.22L.468 6.87a1.6 1.6 0 0 0 .014 2.276l6.966 6.634a.796.796 0 0 0 1.131-.027.8.8 0 0 0-.027-1.131L2.415 8.8H18.4a.8.8 0 0 0 0-1.6z" fill="#94A3BE"/></svg></div>',
      nextArrow: '<div id="next"><svg width="20" height="17" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="a" fill="#fff"><path d="M1.05 9.175h15.96l-6.112 5.82a.8.8 0 1 0 1.104 1.16l6.979-6.648a1.6 1.6 0 0 0-.014-2.276L12 .595a.796.796 0 0 0-1.13.028.8.8 0 0 0 .027 1.13l6.137 5.821H1.05a.8.8 0 0 0 0 1.6z"/></mask><path d="M1.05 9.175h15.96l-6.112 5.82a.8.8 0 1 0 1.104 1.16l6.979-6.648a1.6 1.6 0 0 0-.014-2.276L12 .595a.796.796 0 0 0-1.13.028.8.8 0 0 0 .027 1.13l6.137 5.821H1.05a.8.8 0 0 0 0 1.6z" fill="#94A3BE"/><path d="M17.01 9.175l5.517 5.793 14.48-13.793H17.01v8zm-6.112 5.82L5.381 9.204l5.517 5.793zm-.027 1.132l5.792-5.517-5.792 5.517zm1.13.027l5.515 5.797.004-.004-5.518-5.793zm6.98-6.647l5.518 5.792.072-.069.07-.07-5.66-5.653zm-.014-2.277l5.653-5.66-.067-.067-.069-.066-5.517 5.793zM12 .596l-5.52 5.79.003.003L12 .596zm-1.13.028l5.792 5.517.003-.003L10.87.624zm.027 1.13L5.38 7.547l.006.006.006.006 5.506-5.805zm6.137 5.821v8h20.059L22.54 1.771l-5.505 5.804zm-15.985 9.6h15.96v-16H1.05v16zM11.492 3.382L5.38 9.202 16.416 20.79l6.11-5.821L11.493 3.382zM5.38 9.203a8.8 8.8 0 0 0-.303 12.442l11.585-11.036a7.2 7.2 0 0 1-.247 10.18L5.38 9.202zm-.303 12.441a8.8 8.8 0 0 0 12.438.307L6.488 10.358a7.2 7.2 0 0 1 10.175.252L5.078 21.644zm12.441.303L24.5 15.3 13.463 3.714l-6.979 6.648L17.52 21.947zm7.123-6.787a9.59 9.59 0 0 0 2.808-6.785h-16c0-1.7.68-3.329 1.87-4.521L24.642 15.16zm2.808-6.785a9.6 9.6 0 0 0-2.83-6.805L13.314 12.89a6.4 6.4 0 0 1-1.864-4.515h16zm-2.966-6.938L17.52-5.197 6.484 6.389l6.966 6.634L24.483 1.437zm-6.962-6.631a8.796 8.796 0 0 0-6.072-2.43v16a7.204 7.204 0 0 1-4.97-1.99l11.042-11.58zm-6.072-2.43a8.798 8.798 0 0 0-6.375 2.733l11.59 11.03a7.202 7.202 0 0 1-5.215 2.236v-16zm-6.373 2.73A8.8 8.8 0 0 0 5.38 7.547L16.415-4.038a7.2 7.2 0 0 1 .248 10.18L5.077-4.895zm.315 12.453l6.137 5.82L22.54 1.771 16.403-4.05 5.393 7.559zM17.035-.425H1.05v16h15.985v-16zm-15.985 0a8.8 8.8 0 0 0-8.8 8.8h16a7.2 7.2 0 0 1-7.2 7.2v-16zm-8.8 8.8a8.8 8.8 0 0 0 8.8 8.8v-16a7.2 7.2 0 0 1 7.2 7.2h-16z" fill="#94A3BE" mask="url(#a)"/></svg></div>',
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


