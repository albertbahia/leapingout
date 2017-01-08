 
Meteor.subscribe("events");
Meteor.subscribe("venues");

Template.eventFlyer.helpers({
  findEvent: function() {
  	console.log("Event List");

    console.log(Events.find({}));
    return Events.find({});
  }
});

 Template.eventFlyer.events({

 	"click button#delete-event-button": function() {


var eventId  = Session.get('selectedId');
		//let venueId = this.params._id;

		console.log(eventId);

		console.log( Session.get('selectedId'));


		Events.remove({_id: eventId});






}

	
})