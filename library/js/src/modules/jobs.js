let $ = jQuery;
// import("jsrender")(jQuery);  
import("../../plugins/jsrender/jsrender.js");

let idArray = [];
let hash = "";

function _getShortDescription (desc) {

	const regex = /<p>(.*?)<\/p>/;
	const corresp = regex.exec(desc);
	const firstParagraph = (corresp) ? corresp[0] : ""; // <p>text1</p>

	return firstParagraph;

}

function _showRemainingHours (hours) {

	return '<span class="lang-nl">Nog '+Math.ceil(hours)+' uur</span><span class="lang-fr">Plus que '+Math.ceil(hours)+' heurs</span><span class="lang-en">'+Math.ceil(hours)+" hours left</span>";

}

function _showRemainingDays  (hours) {

	return '<span class="lang-nl">Nog '+Math.ceil(hours)+' dagen</span><span class="lang-fr">Plus que '+Math.ceil(hours)+' jours</span><span class="lang-en">'+Math.ceil(hours)+" days left</span>";

}

function _showRemainingWeeks (hours) {

	return '<span class="lang-nl">Nog '+Math.ceil(hours)+' weken</span><span class="lang-fr">Plus que '+Math.ceil(hours)+' semaines</span><span class="lang-en">'+Math.ceil(hours)+" weeks left</span>";

}

function _showRemainingMonths (hours) {

	return '<span class="lang-nl">Nog '+Math.ceil(hours)+' maanden</span><span class="lang-fr">Plus que '+Math.ceil(hours)+' mois</span><span class="lang-en">'+Math.ceil(hours)+" months left</span>";

}

function _showRemainingYears (hours) {

	return '<span class="lang-nl">Nog '+ (Math.round((hours + Number.EPSILON) * 10) / 10) +' jaar</span><span class="lang-fr">Plus que '+ (Math.round((hours + Number.EPSILON) * 10) / 10) +' ans</span><span class="lang-en">'+ (Math.round((hours + Number.EPSILON) * 10) / 10) +" years left</span>";

}

function _calculateRemainingTime  (timestamp) {

	const endDate = new Date(timestamp);

	const today = new Date();
	const diff = new Date(endDate - today);
	const hours = diff/1000/60/60;
	const days = diff/1000/60/60/24;
	const weeks = diff/1000/60/60/24/7;
	const months = diff/1000/60/60/24/30;
	const years = diff/1000/60/60/24/365;

	if (days <= 0){
		return "";
	}else if (days <= 1){
		return _showRemainingHours(hours); 
	}else if (days <= 10){          
		return _showRemainingDays(days); 
	}else if (weeks <= 10){          
		return _showRemainingWeeks(weeks); 
	}else if (months <= 12){          
		return _showRemainingMonths(months); 
	}else{          
		return _showRemainingYears(years); 
	}

} 

function _prettyIntro (introduction) {

	let intro = "";

	if(introduction){
		intro = introduction;
	}

	return intro;

}

function showAllJobs (){

	$("#jobs-overview").show();
	$("#jobs-details").hide();

	if(window.location.hash) {
		hash = window.location.href.split("#")[1];

		if( hashExists(hash) ){
			$("#jobs-overview").hide();
			$("#jobs-details").show();
			$(".jobs-detail").hide();
			$("#jobs-detail-"+hash).show();
			window.scrollTo({ top: 0, behavior: "smooth" });
		}
	
	}

}

function hashExists (hash){

	return (idArray.indexOf(hash) >= 0);

}

function _showNiceLanguage (){

	if($("body").hasClass("lang-nl")){
		return "Nederlands";
	}else if($("body").hasClass("lang-fr") ){
		return "Français";
	}else if($("body").hasClass("lang-en")){
		return "English";
	} 

}

function compareDates(a, b) {
	if (a.to < b.to) {
		return -1;
	}
	if (a.to > b.to) {
		return 1;
	}
	// a must be equal to b
	return 0;
}

function _sortJobsByDate (jobs){

	return jobs.sort(compareDates)

}

function setupJobsPage(data){

	if(data && data.records){

		data.records = _sortJobsByDate(data.records);

		data.records.forEach(function(vacature) {

			var id = vacature._id; 
			idArray.push(id);

			var vacatureTile = $.templates("#vacature-template").render({
				language : _showNiceLanguage(),
				_id : id,
				salary : vacature.salary,
				location : vacature.location,
				category : vacature.function,
				client: vacature.client,
				introduction: _prettyIntro(vacature.introduction),
				short_description : _getShortDescription(vacature.description),
				title : vacature.title,
				timeRemaining : _calculateRemainingTime(vacature.to),
				external_id : vacature._id,
				function : vacature.function,
				description : vacature.description,
				offer : vacature.offer,
				about : vacature.about
			});

			$("#vacatures-overview").append(vacatureTile);

			var vacatureDetailTile = $.templates("#vacature-detail-template").render({
				language : _showNiceLanguage(),
				_id : id,
				salary : vacature.salary,
				location : vacature.location,
				category : vacature.function,
				client: vacature.client,
				introduction: _prettyIntro(vacature.introduction),
				short_description : _getShortDescription(vacature.description),
				title : vacature.title,
				timeRemaining : _calculateRemainingTime(vacature.to),
				external_id : vacature._id,
				function : vacature.function,
				description : vacature.description,
				offer : vacature.offer,
				about : vacature.about
			});

			$("#jobs-detail-list").append(vacatureDetailTile);
		});

		$(".block-jobs.jobs-overview-loading").removeClass("jobs-overview-loading").addClass("jobs-overview-loaded");

		if(data.records.length == 0){
			$("body").addClass("jobs-overview-has-no-jobs");
		}else{				
			$("body").removeClass("jobs-overview-has-no-jobs");
		}

		showAllJobs();

	}

	window.addEventListener("hashchange", () => {
		showAllJobs();
	}, false);

}

function setupMenuCounter(data){

	if(data && data.records){

		$(".vacatures-counter a").append("<span class='number-vacatures'>"+data.records.length+"</span>");

	} else {

		$(".vacatures-counter a").append("<span class='number-vacatures'>0</span>");			

	}

	$(".vacatures-counter").addClass("numberOfJobsReady")

}

function connectJobsAPI(){

	let jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs";

	if($("body").hasClass("lang-nl")){
		jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/nl";
	}else if($("body").hasClass("lang-fr") ){
		jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/fr";
	}else if($("body").hasClass("lang-en")){
		jobs_url = "https://jobs-api.mediaforta.com/api/v1/website/jobs/en";
	} 

	var request = $.ajax({
		url : jobs_url,
		method: "GET",
		dataType: "json"
	});
        
	request.done(function( data ) {

		setupMenuCounter(data);

		if($("body").hasClass("page-template-page-jobs") || $("body").hasClass("page-template-page-people-netwerk")){

			setupJobsPage(data);

		}

	});

}

function init (){
  
	if($("body").hasClass("page-template-page-jobs") || $("body").hasClass("page-template-page-people-netwerk")){
		$("body").addClass("jobs-overview-has-no-jobs");
		idArray = [];
	}

	connectJobsAPI();

}

// module.exports = { init }

export { init }
