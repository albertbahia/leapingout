Events = new Mongo.Collection('events');

Events.allow ({ 

update: () => true,
remove: () => true

});
