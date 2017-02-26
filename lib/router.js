Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'landing',
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

Router.route('/eventFlyer/:_id/edit', {

    template: 'editEvent',

    data: function() {

        console.log("Edit Event");
        let eventId = this.params._id;

        console.log(eventId);

        return Events.findOne({
            _id: eventId
        });
    }
});


Router.route('/venue/create', {
    name: 'createVenue',
    template: 'createVenue'
});

Router.route('/venues/:_id', {
    template: 'venueProfile',

    waitOn: function() {
        return Meteor.subscribe('venues', this.params._id);
    },

    data: function() {
        let venueId = this.params._id;

        Session.set('selectedId', venueId);

        console.log(venueId);

        console.log(Session.get('selectedId'));

        return Venues.findOne({
            _id: venueId
        });
    }
})

Router.route('/venues/:_id/edit', {
    template: 'editVenueProfile',
    waitOn: function() {
        return Meteor.subscribe('venues', this.params._id);
    },
    data: function() {
        let venueId = this.params._id;

		console.log("edit Venue");

		return Venues.findOne({_id: venueId});
	}
});

Router.route('/search', {
    name: 'searchResultsPage'
});

Router.route('eventFlyer', {
    path: '/eventFlyer/:_id',
    template: 'eventFlyer',
    waitOn: function() {
        return Meteor.subscribe('eventFlyer', this.params._id);
    },

    data: function() {
        let eventId = this.params._id;
        Session.set('selectedId', eventId);

        console.log(eventId);
        console.log("test");

        let eventInfo = Events.findOne({
            _id: eventId
        });

        return Events.findOne({
            _id: eventId
        });
    }
});

Router.route('/aboutUs', {
    template: 'aboutUs',
    name: 'aboutUs'
});
