Venues = new Mongo.Collection('venues');


Venues.allow ({ 

update: () => true,
remove: () => true

});
