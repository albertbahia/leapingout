Meteor.methods({
	createEvent: function(event) {

		let currentUser = Meteor.user();

		check(event, Object);
		check(currentUser, Object);

		console.log("createEvent server method");
		console.log("=========================");
		// console.log(event);
		Events.insert({
			eventName: event.eventData.eventName,
			eventStreetAddress: event.eventData.eventStreetAddress,
			eventNumberInAttendance: 0,
			eventPrice: event.eventData.eventPrice,
			eventVenueName: event.eventData.eventVenueName,
			eventType: event.eventData.eventType,
			eventStartTime: event.eventData.eventStartTime,
			eventEndTime: event.eventData.eventEndTime,
			eventHostName: event.eventData.eventHostName,
			eventNumberMalesAttending: 0,
			eventNumberFemalesAttending: 0,
			eventCity: event.eventData.eventCity,
			eventState: event.eventData.eventState,
			eventZipCode: event.eventData.eventZipCode
			//eventPublic: formEventData[0][12].value,
			//eventPrivate: formEventData[0][13].value,
		});

		return "hello world!";
	},
	getVenues: function() {

		let currentUser = Meteor.user();

		check(currentUser, Object);

		console.log("getVenues server method");
		console.log("=========================");

		console.log(Venues.find());

		return "hello world getVenues!";
	}
});
