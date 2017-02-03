Template.hotspots.onCreated(function() {

});

Template.hotspots.onRendered(function() {

});

Template.hotspots.onDestroyed(function() {

});

Template.hotspots.helpers({

});

Template.hotspots.events({
    'click #about-button': function(event) {
        event.preventDefault();
        Router.go('aboutUs');
    },

    'click #blog-button': function(event) {
        event.preventDefault();
        Router.go('blog');
    },

    'click #feedback-button': function(event) {
        event.preventDefault();
        Router.go('feedback');
    }
});
