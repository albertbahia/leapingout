Template.events.events({
	"click #create-event" : function(event) {

		var formEventData = document.getElementsByClassName("new-event");

		Events.insert({
			eventName: formEventData[0][0].value,
			eventStreetAddress: formEventData[0][1].value,
			eventNumberInAttendance: 20,
			eventPrice: formEventData[0][2].value,
			eventVenueName: formEventData[0][3].value,
			eventDuration: formEventData[0][4].value,
			eventType: formEventData[0][5].value,
			eventCalendarDate: formEventData[0][6].value,
			eventCreatedAt: Date.now(), //---Current time
			eventHostName: formEventData[0][7].value,
			eventNumberMalesAttending: null,
			eventNumberFemalesAttending: null,
			eventCity: formEventData[0][9].value,
			eventState: formEventData[0][10].value,
			eventZipCode: formEventData[0][11].value,
			eventCreatorId: Meteor.userId(),
			eventPublic: formEventData[0][12].value,
			eventPrivate: formEventData[0][13].value,
			eventVenueId: "venueId" //---CHECK
		});

		// ---Clear form input fields
		for (var i = 0; i < formEventData[0].length; i++) {
			formEventData[0][i].value = "";
		}

		// ---Prevent default form submit
		return false;
	}
});