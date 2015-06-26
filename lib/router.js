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

Router.route('/events', {
	name: 'events'
});