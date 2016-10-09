Meteor.subscribe("events");
Meteor.subscribe("venues");

Template.venueProfile.helpers({
  findVenue: function() {
    console.log(Venues.find({}));
    return Venues.find({});
  }
});
