Template.createEvent.events({
	"click #create-event" : function(event) {
		event.preventDefault();

		var formEventData = document.getElementsByClassName("new-event");
		// console.log($('select#venueName option:selected').text());
		var eventData = {
			eventName: formEventData[0][0].value,
			eventStreetAddress: formEventData[0][1].value,
			eventPrice: formEventData[0][2].value,
			eventVenueName: $('select#venueName option:selected').text(),
			eventVenueId: formEventData[0][3].value,
			eventType: formEventData[0][4].value,
			eventStartTime: formEventData[0][5].value,
			eventEndTime: formEventData[0][6].value,
			eventHostName: formEventData[0][7].value,
			eventCity: formEventData[0][8].value,
			eventState: formEventData[0][9].value,
			eventZipCode: formEventData[0][10].value
			//eventPublic: formEventData[0][12].value,
			//eventPrivate: formEventData[0][13].value,
		};

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
		for (var i = 0; i < formEventData[0].length; i++) {
			formEventData[0][i].value = "";
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
