let $ = jQuery;
import UIkit from "../../plugins/uikit/js/uikit.min.js";

let numberOfOptionsSelected = 0;

function getNumberOfSelectedOptions(){

	let res = 0;

	$(".block-packages-accordion-holder input[type=radio]").add(".block-packages-accordion-holder input[type=checkbox]").each(function() {
		if ($(this).is(":checked")) {
			res++;
		}
	});

	return res;

}

function calculateTotalPriceForPackage(){

	let totalPriceOfStrategy = 0;
	let totalPriceOfPackage = 0;
	$(".result-name-holder").empty();

	$("#price_calculator input:checked").each(function(){

		let prijs = $(this).attr("data-price");

		let price_name = $(this).attr("data-price-name");
		let cat_slug = $(this).attr("data-category");

		if(cat_slug == "contentstrategie"){
			totalPriceOfStrategy += parseInt(prijs, 10);
			$(".price-holder.price-holder-1 .result-name-holder").append("<div>"+cat_slug+" "+price_name+"</div>");

		}else{
			totalPriceOfPackage += parseInt(prijs, 10);
			$(".price-holder.price-holder-2 .result-name-holder").append("<div>"+cat_slug+" "+price_name+"</div>");

		}

      
	});

	$("#total_price_strategy span").html(totalPriceOfStrategy);
	$("#total_price_strategy_2 span").html(totalPriceOfStrategy);

	$("#total_price span").html(totalPriceOfPackage);
	$("#total_price_2 span").html(totalPriceOfPackage);

	if(totalPriceOfStrategy && totalPriceOfStrategy > 0){
		$(".price-holder-1").show();		
	}else{
		$(".price-holder-1").hide();		
	}

	if(totalPriceOfPackage && totalPriceOfPackage > 0){
		$(".price-holder-2").show();		
	}else{
		$(".price-holder-2").hide();		
	}

}

function setupScrollSpy(){

	UIkit.scrollspy("#block-packages-accordion", {"repeat": true, "hidden": false});

	UIkit.scrollspy("#block-accordion-result-grid", {"repeat": true, "offsetTop": -180, "hidden": false});

	UIkit.util.on(document, "inview", "#block-packages-accordion", function() {
		$("#price-calc-summary").addClass("accordion-is-visible");
		// console.log("a");
	});

	UIkit.util.on(document, "outview", "#block-packages-accordion", function() {
		$("#price-calc-summary").removeClass("accordion-is-visible");
		// console.log("b");
	});	

	UIkit.util.on(document, "inview", "#block-accordion-result-grid", function() {
		$("#price-calc-summary").addClass("result-is-visible");
		// console.log("c");
	});

	UIkit.util.on(document, "outview", "#block-accordion-result-grid", function() {
		$("#price-calc-summary").removeClass("result-is-visible");
		// console.log("d");
	});	

}

function setupBlockCLick(){

	$(".blok-wrap").each(function(){
		$(this).click(function(e){
			e.preventDefault();
			$(this).toggleClass("clicked")
			$(this).find("input").click();
			return false;
		});
	});

	$(".blok-wrap input").click(function(){
		return false
	});

}

function setupPriceCalculator(){

	// $("#block-accordion-result").hide();

	$(".block-packages-accordion-holder input[type=radio]").add(".block-packages-accordion-holder input[type=checkbox]").click(function(){

		calculateTotalPriceForPackage();

		numberOfOptionsSelected = getNumberOfSelectedOptions();

		if(numberOfOptionsSelected > 0){

			$("body").addClass("show-price-calc-summary");

		}else{

			$("body").removeClass("show-price-calc-summary");

		}

	});

	setupScrollSpy();

	setupBlockCLick();	

}

// module.exports = { setupPriceCalculator }

export { setupPriceCalculator }