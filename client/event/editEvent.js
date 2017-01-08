Template.editEvent.events({
	"click #event-update" : function(event) {
		event.preventDefault();

		var formEventData = document.getElementsByClassName("edit-event");
		// console.log($('select#venueName option:selected').text());
		var eventData = {
			eventId:   formEventData[0][0].value,
			eventName: formEventData[0][1].value,
			eventStreetAddress: formEventData[0][2].value,
			eventPrice: formEventData[0][3].value,
			eventVenueName: $('select#venueName option:selected').text(),
			eventVenueId: formEventData[0][4].value,
			eventType: formEventData[0][5].value,
			eventStartTime: formEventData[0][6].value,
			eventEndTime: formEventData[0][7].value,
			eventHostName: formEventData[0][8].value,
			eventCity: formEventData[0][9].value,
			eventState: formEventData[0][10].value,
			eventZipCode: formEventData[0][11].value
			//eventPublic: formEventData[0][12].value,
			//eventPrivate: formEventData[0][13].value,
		}

		console.log(eventData)

		Meteor.call("updateEvents", {
				eventData: eventData
			}, function(err, res) {
			if (err) {
				console.log(err);
			} else {
				console.log("event data sent succesfully");
			}
		});

		
		
		// ---Prevent default form submit
		return false;
	}
});



Template.editEvent.helpers({
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
