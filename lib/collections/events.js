Events = new Mongo.Collection('events');

Events.allow ({ 

remove: () => true

});
