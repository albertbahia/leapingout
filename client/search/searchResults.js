Template.searchResults.helpers({
  getEvents: function() {
    return EventSearch.getData({
      transform: function(matchText, regExp) {
        return matchText.replace(regExp, "<b>$&</b>")
      },
      sort: {eventNumberInAttendance: -1}
    });
  },
  isLoading: function() {
    return EventSearch.getStatus().loading;
  }
});

Template.searchBox.events({
  "keyup #search": _.throttle(function(e) {
    var text = $(e.target).val().trim();
    if (text !== '') {
      EventSearch.search(text);
    }
  }, 200)
});