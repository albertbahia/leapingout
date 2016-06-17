Meteor.subscribe("events");

Template.venueProfile.helpers({
  findVenue: function() {
    return Events.find({});
  }
});