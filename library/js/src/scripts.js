import * as mfaModule from "./modules/mfa.js";
import * as jobsModule from "./modules/jobs.js";
import * as sliderProgressBar from "./modules/sliderProgressBar.js";

jQuery(document).ready(function() {

	mfaModule.init();
	jobsModule.init();
	sliderProgressBar.setupAllProgressBars();

});