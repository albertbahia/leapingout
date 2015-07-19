Meteor.subscribe("userData");

Template.profile.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    },
    userFirstName: function() {
        return Meteor.user().profile.name;
    }
});