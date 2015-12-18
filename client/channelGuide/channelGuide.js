Meteor.subscribe("events");

Template.channelGuide.onRendered(function() {
    this.$('#InputDate').pickadate();
	this.$('#InputTime').pickatime();
});

Template.channelGuide.helpers({

	findEvent: function(){
		// console.log(Events.find({}, {sort: {eventNumberInAttendance:-1}, limit:5}));
		 return Events.find({});

	}

});