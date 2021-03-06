// Fixture data

if (Events.find().count() === 0) {

	var now = Date.now();

	Events.insert({
		eventName: "Happy Hour",
		eventVenueName: "Grasshopper",
		eventStreeteventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		eventDateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 5
	})

		Events.insert({
		eventName: "Happy Hour 2",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 10
	})

		Events.insert({
		eventName: "Happy Hour 3",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 15
	})

		Events.insert({
		eventName: "Happy Hour 4",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 20
	})

		Events.insert({
		eventName: "Happy Hour 5",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 25
	})

		Events.insert({
		eventName: "Happy Hour 6",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 30
	})

		Events.insert({
		eventName: "Happy Hour 7",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 35
	})

		Events.insert({
		eventName: "Happy Hour 8",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 40
	})

		Events.insert({
		eventName: "Happy Hour 9",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 45
	})

		Events.insert({
		eventName: "Happy Hour 10",
		eventVenueName: "Grasshopper",
		eventStreetAddress: "123 Main Street, Morristown NJ 12345",
		eventStartDate: "May 05",
		eventEndDate: "May 05",
		eventStartTime: "1:00pm",
		eventEndTime: "4:00pm",
		createdUser: "Joey",
		dateCreated: now,
		summary: "Happy Hour at the Grasshoppper!!! 1:00pm to 4:00pm",
		eventNumberInAttendance: 50
	})
}

if (Venues.find().count() === 0) {

	var now = Date.now();

	Venues.insert({
		venueName: "testVenueName1",
		venueStreetAddress: "testVenueStreetAddress1",
		venueCity: "testVenueCity1",
		venueState: "testVenueState1",
		venueLatLong: "testVenueLatLong1",
		venuePopularityRating: 7,
		venueCountry: "testVenueCountry1",
		venueEventId: "testVenueEventId1",
		venueCreatorId: "testCreatorId1",
		venueCreatedAt: now
	})

	Venues.insert({
		venueName: "testVenueName1",
		venueStreetAddress: "testVenueStreetAddress1",
		venueCity: "testVenueCity1",
		venueState: "testVenueState1",
		venueLatLong: "testVenueLatLong1",
		venuePopularityRating: 7,
		venueCountry: "testVenueCountry1",
		venueEventId: "testVenueEventId1",
		venueCreatorId: "testCreatorId1",
		venueCreatedAt: now
	})
}