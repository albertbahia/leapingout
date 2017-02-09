Meteor.methods({
	createVenue: function(venue) {

		let currentUser = Meteor.user();

		check(venue, {
			venueName: String,
			venueStreetAddress: String,
			venueCity: String,
			venueState: String, 
			venueLatLong: String,
			venuePopularityRating: Number,
			venueCountry: String,
			venueEventIds: Array,
			venueCreatorId: String,
			venueCreatedAt: Date,
			venueUpdatedAt: Date,
			venueProfileImageUrl: String
		});
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
	}/*,

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
	}*/
});
