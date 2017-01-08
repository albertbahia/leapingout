Meteor.methods({
	createVenue: function(venue) {

		let currentUser = Meteor.user();

		check(venue, Object);
		check(currentUser, Object);

		// console.log(venue.venueData);
		//console.log("server method for creating venue");

		//-Save venue data to MongoDB here-
		Venues.insert({
			venueName: venue.venueData.venueName,
			venueStreetAddress: venue.venueData.venueStreetAddress,
			venueCity: venue.venueData.venueCity,
			venueState: venue.venueData.venueState,
			venueLatLong: [],
			venuePopularityRating: 0,
			venueCountry: venue.venueData.venueCountry,
			venueEventIds: [],
			venueCreatorId: currentUser,
			venueCreatedAt: Date.now(),
			venueUpdatedAt: Date.now(),
			venueProfileImageUrl: "/images/default-venue-profile-image.jpg"
		});

		return;
	},
	updateVenue: function(venue) {

		console.log("-------------------------");
		console.log("updateVenue server method");
		console.log("-------------------------");

		let currentUser = Meteor.user();

		check(venue, Object);
		check(currentUser, Object);

		console.log(venue);

		Venues.update(venue.venueData.venueId, {
			$set: {
				venueName: venue.venueData.venueName,
				venueProfileImageUrl: venue.venueData.venueProfileImageUrl,
				venueUpdatedAt: Date.now()
			}
		});

		return;
	}
});
