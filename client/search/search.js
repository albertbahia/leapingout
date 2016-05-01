var options = {
  keepHistory: 1000 * 60 * 5,
  localSearch: true
};

var fields = ['eventName', 'summary'];

EventSearch = new SearchSource('events', fields, options);

