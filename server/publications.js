Meteor.publish('top5', function(time){
  // should be a function of Date, Time, location, Distance from location, Sort option (such as popularity, friends, or catagory of events...ex with kids)
 console.log('Time: ' + time)
  Meteor._sleepForMs(2000);

	var targetTime = moment(time);
  console.log('Target Time: ' + targetTime)

	var rangeWindow = 5; //hours
  var rangeStart = moment(targetTime).valueOf();
	var rangeEnd = moment(targetTime).add(rangeWindow, 'hours').valueOf();

	return Events.find({'eventStartDate._i': { $lt : rangeEnd }, 'eventEndDate._i':{ $gte: rangeStart}}, {sort: {eventNumberInAttendance:-1}, limit: 5});
});

// -----Primary Venue Publication-----
Meteor.publish("venues", function(venueId) {
  return Venues.find({_id: venueId});
  console.log(Venues.find({_id: venueId}).fetch());
});

Meteor.publish("eventFlyer", function(eventId){
  return Events.find({_id: eventId});
  console.log(Events.find({_id: eventId}).fetch());
});
