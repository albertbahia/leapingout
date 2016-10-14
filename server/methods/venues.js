Meteor.methods({
	createVenue: function(venue) {
		check(venue, Object);
		//check(user, Object);

		console.log("server method for creating venue");		
		console.log(venue);
		
		//-save venue data to MongoDB here-
		return "hello";
	}
});
