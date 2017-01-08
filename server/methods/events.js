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
			eventVenueId: event.eventData.eventVenueId,
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
		Venues.update({ "_id": event.eventData.eventVenueId },{ $push: { venueEventIds: eventId } });
		console.log(Venues.findOne({"_id": event.eventData.eventVenueId}));
		console.log("=========================");

		// Get venue id from form
		// Search venues collection in mongodb for specific venue using id value from form
		// Update/push created event's id to venue field venueEventId's

		return "hello world!";
	},

	getEvents: function() {

		let currentUser = Meteor.user(),

			eventsArray = [];

			check(currentUser, Object); 

			console.log("Events server method");
			let events = Events.find().fetch();

			for (let i =0; i < events.length; i++) {

				eventsArray.push({eventId: events[i]._id, eventName: events[i].eventName})
			}

			return eventsArray;


	},

	updateEvents: function(event) {

		console.log("-------------------------");
		console.log("updateEvents server method");
		console.log("-------------------------");

		let currentUser = Meteor.user();

		check(event, Object);
		check(currentUser, Object);

		console.log(event);

		console.log("event Id" + event.eventData.eventId);

		let eventId = Events.update(event.eventData.eventId, {
			$set: {
				eventName: event.eventData.eventName,
				eventStreetAddress: event.eventData.eventStreetAddress,
				eventNumberInAttendance: 0,
			eventPrice: event.eventData.eventPrice,
			eventVenueName: event.eventData.eventVenueName,
			eventVenueId: event.eventData.eventVenueId,
			eventType: event.eventData.eventType,
			eventStartTime: event.eventData.eventStartTime,
			eventEndTime: event.eventData.eventEndTime,
			eventHostName: event.eventData.eventHostName,
			eventNumberMalesAttending: 0,
			eventNumberFemalesAttending: 0,
			eventCity: event.eventData.eventCity,
			eventState: event.eventData.eventState,
			eventZipCode: event.eventData.eventZipCode,
				eventUpdatedAt: Date.now()
			}

			
		});

		console.log("test event" + eventId);
		//Venues.update({ "_id": event.eventData.eventVenueId },{ $push: { venueEventIds: eventId } });


			return;


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
			venuesArray.push({venueId: venues[i]._id, venueName: venues[i].venueName});
		}

		return venuesArray;
	}
});
