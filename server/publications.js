Meteor.publish('top5', function(){
  // should be a function of Date, Time, location, Distance from location, Sort option (such as popularity, friends, or catagory of events...ex with kids)

  Meteor._sleepForMs(1000);

  //var startTime = 1471204203087;
  //var endTime = 1472691666582;

  //var startTime = moment(start).valueOf;
  //var endTime = moment(end).valueOf;

  //return Events.find()
  //return Events.find({ 'start' : { $gte : start}, 'end' : { $lte : end}}, {sort: {pop: 1}, limit:5});
  //return Events.find({ 'start' : { $gte : 1471204203087}, 'end' : {$lte: 1472691666582}}, {sort: {pop: -1}, limit: 5});
  //return Events.find({ 'start' : { $gte : 1471204203087}, 'end' : {$lte: 1472691666582}}, {sort: {pop: -1}, limit: 5});
  return Events.find({}, {sort: {eventNumberInAttendance:-1}});
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
