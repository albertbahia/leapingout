Meteor.methods({
	createVenue: function(venue, user) {
		check(venue, Object);
		check(user, Object);
		
		console.log(venue);
		
		//-save venue data to MongoDB here-

	}
});
