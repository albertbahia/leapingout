Template.hotspots.onRendered(function() {
    this.$('#InputDate').pickadate();
	this.$('#InputTime').pickatime();
});

Template.hotspots.helpers({
	
	findEvent: function(){
		
		 return Events.find({}, {sort: {eventNumberInAttendance:-1}, limit:5});
		
	}
	
});