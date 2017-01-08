Meteor.subscribe("events");
Meteor.subscribe("venues");

Template.venueProfile.helpers({
  findVenue: function() {
    console.log(Venues.find({}));
    return Venues.find({});
  }
});

Template.venueProfile.events ({

	"click button.delete": function() {

		

	

		var selectedId  = Session.get('selectedId');
		//let venueId = this.params._id;

		console.log(selectedId);

		console.log( Session.get('selectedId'));


		Venues.remove({_id: selectedId});

		//Venues.remove('nWyAnX35rPhMYhuej');

	}




});
