Meteor.methods({
	createEvent: function(event) {

		let currentUser = Meteor.user();

		check(event, Object);
		check(currentUser, Object);

		console.log("createEvent server method");
		console.log("=========================");
		console.log(event.eventData);
		console.log("=========================");
		// console.log(event);
		let eventId = Events.insert({
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
			eventZipCode: event.eventData.eventZipCode,
			eventCreatedAt: Date.now(),
			eventUpdatedAt: Date.now()
			//eventPublic: formEventData[0][12].value,
			//eventPrivate: formEventData[0][13].value,
		});

		console.log("=========================");
		console.log("ID of New Event Created:")
		console.log("=========================");
		console.log(eventId);
		console.log("=========================");

		console.log("=========================");
		console.log("Venue Selected:");
		console.log("=========================");
		console.log(Events.findOne({"_id": eventId}));
		console.log("=========================");

		return "hello world!";
	},
	getVenues: function() {

		let currentUser = Meteor.user(),
				venuesArray = [];

		check(currentUser, Object);

		console.log("getVenues server method");
		console.log("=========================");

		// console.log(Venues.find());
		let venues = Venues.find().fetch();
		// console.log(venues);

		for (let i = 0; i < venues.length; i++) {
			venuesArray.push(venues[i].venueName);
		}

		return venuesArray;
	}
});
