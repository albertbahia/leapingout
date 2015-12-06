Meteor.subscribe("events");

Template.hotspots.onRendered(function() {
    this.$('#InputDate').pickadate();
	this.$('#InputTime').pickatime();
});

Template.hotspots.helpers({

	findEvent: function(){
		// console.log(Events.find({}, {sort: {eventNumberInAttendance:-1}, limit:5}));
		 return Events.find({});

	}

});