Meteor.publish("images", function(limit) {
  check(limit, Number);

  return Images.find({}, {
   /*  limit: limit
	sort: {uploadedAt:-1} */
  });
});

Meteor.publish("events", function() {
	return Events.find({}, {sort: {eventNumberInAttendance:-1}, limit:5});
});