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
	name: 'events'
});

Router.route('/venues', {
	name: 'venues'
});

Router.route('/venueProfile', {
	name: 'venueProfile'
})

Router.route("/dropzone", {
	name:  'home'
});

Router.route('/search', {
	name: 'searchResultsPage'
});
