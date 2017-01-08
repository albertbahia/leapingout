Venues = new Mongo.Collection('venues');

Venues.allow ({

  insert() {return false;},
  update() {return false;},
  remove() {return false;}

});

Venues.deny ({

  insert() {return true;},
  update() {return true;},
  remove() {return true;}

});
