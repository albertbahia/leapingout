Template.profile.helpers({
    currentUser: function() {
        return Meteor.user().emails[0].address;
    }
});