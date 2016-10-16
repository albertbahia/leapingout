Meteor.methods({
	createEvent: function(event) {
		
		let currentUser = Meteor.user();
		
		check(event, Object);
		check(currentUser, Object);
	
		console.log(event);	
		//Events.insert({});

		return "hello world!";
	}
});
