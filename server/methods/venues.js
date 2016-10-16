Meteor.methods({
	createVenue: function(venue) {
			
		let currentUser = Meteor.user();	

		check(venue, Object);
		check(currentUser, Object);

		//console.log("server method for creating venue");		

		//-Save venue data to MongoDB here-
		Venues.insert({
			venueName: venue.venueName,
			venueStreetAddress: venue.venueStreetAddress,
			venueCity: venue.venueCity,
			venueState: venue.venueState,
			venueLatLong: [],
			venuePopularityRating: 0,
			venueCountry: venue.venueCountry,
			venueEventIds: [],
			venueCreatorId: currentUser, 
			venueCreatedAt: Date.now(),
			venueProfileImageUrl: "/images/default-venue-profile-image.jpg"
		});

		return;
	}
});
