Meteor.publish("userData", function() {
    var currentUserId = this.userId;
    if (currentUserId) {
        return Meteor.users.find({createdBy: currentUserId});
    } else {
        this.ready();
    }
});