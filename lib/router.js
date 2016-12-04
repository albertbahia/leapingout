Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound'
});

Router.route('/', {
	name: 'landing'
});

Router.route('/profile', {
	name: 'profile'
});

Router.route('/profile/edit', {
	name: 'editProfile'
})

Router.route('/event/create', {
	name: 'createEvent',
	template: 'createEvent'
});

Router.route('/venue/create', {
	name: 'createVenue',
	template: 'createVenue'
});

Router.route('/venues/:_id', {
	template: 'venueProfile',
	data: function() {
		let venueId = this.params._id;


		Session.set('selectedId', venueId);

		console.log(venueId);

		console.log(Session.get('selectedId'));
		

		return Venues.findOne({_id: venueId});
	}
})

Router.route('/venues/:_id/edit', {
	template: 'editVenueProfile',
	data: function() {
		let venueId = this.params._id;

		return Venues.findOne({_id: venueId});
	}
})

Router.route('/search', {
	name: 'searchResultsPage'
});

Router.route('/eventFlyer/:_id', {
	template: 'eventFlyer',
	data: function() {
		let eventId = this.params._id;
		let eventInfo = Events.findOne({_id: eventId })
		console.log(eventInfo)
		if (eventInfo) {
			console.log(eventInfo)
			return eventInfo;
		} 
		// return Events.findOne({_id: eventId });
	}
});
