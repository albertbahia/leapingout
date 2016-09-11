// Meteor.publish("images", function(limit) {
//   check(limit, Number);
//
//   return Images.find({}, {
//    /*  limit: limit
// 	sort: {uploadedAt:-1} */
//   });
// });


// ----Events publication for Channel Guide-----
// Meteor.publish("events", function() {
// 	return Events.find({}, {sort: {eventNumberInAttendance:-1}, limit:5});
// });

Meteor.publish('events', function(){
  // should be a function of Date, Time, location, Distance from location, Sort option (such as popularity, friends, or catagory of events...ex with kids)

  Meteor._sleepForMs(5000);

  //var startTime = 1471204203087;
  //var endTime = 1472691666582;

  //var startTime = moment(start).valueOf;
  //var endTime = moment(end).valueOf;

  //return Events.find()
  //return Events.find({ 'start' : { $gte : start}, 'end' : { $lte : end}}, {sort: {pop: 1}, limit:5});
  //return Events.find({ 'start' : { $gte : 1471204203087}, 'end' : {$lte: 1472691666582}}, {sort: {pop: -1}, limit: 5});
  //return Events.find({ 'start' : { $gte : 1471204203087}, 'end' : {$lte: 1472691666582}}, {sort: {pop: -1}, limit: 5});
  return Events.find({}, {sort: {eventNumberInAttendance:-1}, limit: 5});
});


// -----Primary Venue Publication-----
Meteor.publish("venues", function() {
  return Venues.find({});
})