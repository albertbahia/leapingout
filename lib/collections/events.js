Events = new Mongo.Collection('events');


// Allows/Denys

Events.allow ({

  insert() {return false;},
  update() {return false;},
  remove() {return false;}

});

Events.deny ({

  insert() {return true;},
  update() {return true;},
  remove() {return true;}
update: () => true,
remove: () => true

});
