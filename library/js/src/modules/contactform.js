let $ = jQuery;


function scrollToTop(){

	setTimeout(function(){

		if($("body").hasClass("page-template-page-contact")){
	
			window.scrollTo({ top: 0, behavior: "smooth" });

		}else{		

			$("#modal-contact").animate({
				scrollTop : 0
			}, "slow");

		}

	}, 500);

}

function setupFormSuccessMessage(){

	if(!$("body").hasClass("page-template-page-forms-contact")){
		return;
	}

	var progress = 0;

	var refreshIntervalId = window.setInterval(function(){

		progress = progress + 1;
		$("#map-holder .progress").css("width", progress+"%");

		if(progress >= 100){

			clearInterval(refreshIntervalId);

			$("#map-holder").hide();
			$(".succes-message-holder #succes-message").show();            

		}
     
	}, 50);

}

function setupActiveStepsCounter(){

	$(".copywriter-form .progess-strips").each(function(){

		let active_step = parseInt($(this).attr("data-active-step"), 10)
		let number_of_steps = parseInt($(this).attr("data-number-of-steps"), 10)

		for(let i = 1; i <= number_of_steps; i++){

			if(i == active_step){
	
				$(this).append('<div class="progress-strip active"></div>');

			}else{

				$(this).append('<div class="progress-strip"></div>');

			}

		}

	})

}

function init (){

	setupFormSuccessMessage();

	setupActiveStepsCounter();

	$("#contact-form-wrapper").add("#contact-form-wrapper-toptalent").each(function(){

		let wrapper = $(this)

		$(this).find(".toggle_contact_screens").click(function(e){

			e.preventDefault();

			wrapper.toggleClass("screen-contact-form-visible");

			scrollToTop();

			return false;
		
		})

		$(this).find(".toggle_booking_screens").click(function(e){

			e.preventDefault();

			wrapper.toggleClass("screen-booking-form-visible");

			scrollToTop();

			return false;
		
		})	

		$(this).find(".back-arrow-screen-1").click(function(e){
			
			e.preventDefault();

			wrapper.removeClass("screen-contact-form-visible");
			wrapper.removeClass("screen-booking-form-visible");

			scrollToTop();

			return false;
		
		})	

	})

	$("#modal-contact").on("hidden", function(){
		$("#contact-form-wrapper").removeClass("screen-contact-form-visible");
		$("#contact-form-wrapper").removeClass("screen-booking-form-visible");
	});

}

export { init };