// Make Foundation Go!
$(document).foundation();

// Your Awesome Scripts!
$(document).ready(function(){

	new Maplace({
	show_markers: true,
	locations: [{
		lat: 47.659381,
		lon: -117.4236639,
		zoom: 17
				}]
			}).Load(); 


	console.log('Page Loaded. Lets Do this!');

}); 

$('.selectorClass').socialProfiles({
email: 'sushimaru@email.com',
facebook: 'sushimaru',
twitter: 'sushimaru',
});
