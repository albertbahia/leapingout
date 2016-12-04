 
Meteor.subscribe("events");
Meteor.subscribe("venues");

 Template.eventFlyer.events({

 	"click button.delete": function() {


var eventId  = Session.get('eventId');
		//let venueId = this.params._id;

		console.log(eventId);

		console.log( Session.get('eventId'));


		Events.remove({_id: eventId});






}

	
})