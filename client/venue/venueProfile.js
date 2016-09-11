Meteor.subscribe("events");
Meteor.subscribe("venues");

Template.venue.helpers({
  findVenue: function() {
    console.log(Venues.find({}));
    return Venues.find({});
  }
});
