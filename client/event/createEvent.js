Template.createEvent.events({
	"click #create-event" : function(event) {
		event.preventDefault();

		let formEventData = document.getElementsByClassName("new-event");
		
		let eventFormInput = formEventData[0];
		var eventData = {
			eventName: eventFormInput[0].value,
			eventStreetAddress: eventFormInput[1].value,
			eventPrice: eventFormInput[2].value,
			eventVenueName: $('select#venueName option:selected').text(),
			eventVenueId: eventFormInput[3].value,
			eventType: eventFormInput[4].value,
			eventStartTime: eventFormInput[5].value,
			eventEndTime: eventFormInput[6].value,
			eventHostName: eventFormInput[7].value,
			eventCity: eventFormInput[8].value,
			eventState: eventFormInput[9].value,
			eventZipCode: eventFormInput[10].value
			//eventPublic: eventFormInput[12].value,
			//eventPrivate: eventFormInput[13].value,
		};

		// console.log('zipcode: ' + eventFormInput[10].value)
		Meteor.call("createEvent", {
				eventData: eventData
			}, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("event data sent succesfully");
			}
		});

		// ---Clear form input fields
		for (var i = 0; i < eventFormInput.length; i++) {
			eventFormInput[i].value = "";
		}

		// ---Prevent default form submit
		return false;
	}
});

Template.createEvent.helpers({
	getVenues: function() {
		Meteor.call("getVenues", function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("getVenues call success!");
				console.log(res);
				Session.set("data", res)
			}
		});

		return Session.get("data");
	}
});
