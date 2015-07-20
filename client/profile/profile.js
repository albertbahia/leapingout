Meteor.subscribe("userData");

Template.profile.helpers({
    userEmail: function() {
        //console.log(Meteor.user().emails[0]);
        return Meteor.user().emails[0].address;
    },
    userFirstName: function() {
        console.log(Meteor.user());
        return Meteor.user().profile.userFirstName;
    },
    userLastName: function() {
        return Meteor.user().profile.userLastName;
    }
});

Template.editProfile.helpers({
    userEmail: function() {
        return Meteor.user().emails[0].address;
    }
});