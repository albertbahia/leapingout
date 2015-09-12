Meteor.startup(function() {
	smtp = {
		username: 'info@leapingout.com',
		password: 'test123',
		server: 'smtp@gmail.com',
		port: 25
	}
	process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});