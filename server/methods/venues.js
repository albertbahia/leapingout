Meteor.methods({
	createVenue: function(venue) {
		check(venue, Object);
		//check(user, Object);

		console.log("server method for creating venue");		
		console.log(venue);
		
		Venues.insert({
			venueName: venue.venueName,
			venueStreetAddress: venue.venueStreetAddress,
			venueCity: venue.venueCity,
			venueState: venue.venueState,
			venueLatLong: [],
			venuePopularityRating: 0,
			venueCountry: venue.venueCountry,
			venueEventIds: [],
			venueCreatorId: venue.venueCreatorId,
			venueCreatedAt: Date.now(),
			venueProfileImageUrl: "/images/default-venue-profile-image.jpg"
		})

		//-save venue data to MongoDB here-
		return;
	}
});
