Router.configure({
    layoutTemplate: 'layout',
    loadingTemplate: 'loading',
    notFoundTemplate: 'notFound'
});

Router.route('/', {
    name: 'landing',
    template: 'landing',

    waitOn: function(){
			return (
        Meteor.subscribe('top5'),
        Meteor.subscribe('venues', (Events.find().fetch()[0].eventVenueId)),
        Meteor.subscribe('venues', (Events.find().fetch()[1].eventVenueId)),
        Meteor.subscribe('venues', (Events.find().fetch()[2].eventVenueId)),
        Meteor.subscribe('venues', (Events.find().fetch()[3].eventVenueId)),
        Meteor.subscribe('venues', (Events.find().fetch()[4].eventVenueId))
      )
		}

    // waitOn: function(){
    //   return (
    //     Meteor.subscribe('venues', (Events.find().fetch()[0].eventVenueId)),
    //     Meteor.subscribe('venues', (Events.find().fetch()[1].eventVenueId)),
    //     Meteor.subscribe('venues', (Events.find().fetch()[2].eventVenueId)),
    //     Meteor.subscribe('venues', (Events.find().fetch()[3].eventVenueId)),
    //     Meteor.subscribe('venues', (Events.find().fetch()[4].eventVenueId))
    //   )
    // }
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


//Router.route('/event/create', {
//	name: 'createEvent',
//	template: 'createEvent'
//


Router.route('/eventFlyer/:_id/edit', {
	
	template: 'editEvent',

	data: function() {

		console.log("Edit Event");
		let eventId = this.params._id;

		console.log(eventId);

		return Events.findOne({_id: eventId});
	}


});


Router.route('/venue/create', {
    name: 'createVenue',
    template: 'createVenue'
});

Router.route('/venues/:_id', {
    template: 'venueProfile',

    waitOn: function(){
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
    waitOn: function(){
      return Meteor.subscribe('venues', this.params._id);
    },
    data: function() {
        let venueId = this.params._id;

		console.log("edit Venue");

		return Venues.findOne({_id: venueId});
	}
})

Router.route('/search', {
    name: 'searchResultsPage'
});

// Router.route('/eventFlyer/:_id', {
// 	template: 'eventFlyer',
// 	data: function() {
// 		let eventId = this.params._id;
// 		let eventInfo = Events.findOne({_id: eventId })
// 		console.log(eventInfo)
// 		if (eventInfo) {
// 			console.log(eventInfo)
// 			return eventInfo;
// 		}
// 		// return Events.findOne({_id: eventId });
// 	}
// });

Router.route('eventFlyer', {
	path: '/eventFlyer/:_id',
	template: 'eventFlyer',
	waitOn: function(){
		return Meteor.subscribe('eventFlyer', this.params._id);
	},

	data: function() {
		let eventId = this.params._id;
		Session.set('selectedId', eventId);

		console.log(eventId);
		console.log("test");
		//console.log(Events.findOne({_id: eventId }))
		let eventInfo = Events.findOne({_id: eventId });
		//console.log(eventInfo)
	//	if (eventInfo) {
	//		console.log(eventInfo)
	//		return eventInfo;
	//	} 
		 return Events.findOne({_id: eventId });
	}
});


// Router.route('/eventFlyer/:_id', function() {
//             // add the subscription handle to our waitlist
//             this.subscribe('eventFlyer', this.params._id).wait();
//             //console.log(this.params._id);
//             //console.log(Events.find({}).fetch());
//             // this.ready() is true if all items in the wait list are ready
//
//             if (this.ready()) {
//                 //this.render('eventFlyer');
//                 this.render(function() {
//                         //template: 'eventFlyer';
//                         data: function() {
//                             let eventId = this.params._id;
//                             let eventInfo = Events.findOne({
//                                 _id: eventId
//                             });
//                             console.log(eventInfo);
//                             if (eventInfo) {
//                                 console.log(eventInfo);
//                                 return eventInfo;
//                             };
//
//                         });
//                     // return Events.findOne({_id: eventId });
//                 }
//                 else {
//                     this.render('Loading');
//                 }
//             });
//============
				// Router.route('/eventFlyer/:_id', {
				// 	template: 'eventFlyer',
				// 	console.log('waitOn Fuction Start'),
				//
				// 	waitOn: function () {
				// 			return Meteor.subscribe('eventFlyer', this.params._id);
				// 			console.log(this.params._id);
				// 			console.log(Events.find({}).fetch());
				// 	},
				//
				// 	console.log('waitOn Fuction End'),
				//
				// 	data: function() {
				// 		let eventId = this.params._id;
				// 		let eventInfo = Events.findOne({_id: eventId })
				// 		//console.log(eventInfo)
				// 		if (eventInfo) {
				// 			//console.log(eventInfo)
				// 			return eventInfo;
				// 		}
				// 		// return Events.findOne({_id: eventId });
				// 	}
				//
				// });

        Router.route('/aboutUs', {
            template: 'aboutUs',

        });
